#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function run(cmd, args, opts = {}) {
  // Use shell: false so Windows paths with spaces are handled correctly
  const result = spawnSync(cmd, args, { stdio: 'inherit', shell: false, ...opts });
  return result.status ?? 0;
}

// 1) Try to generate llms.txt, but don't fail the build if it errors
try {
  const genScript = resolve(__dirname, 'generate-llms.js');
  const code = run('node', [genScript]);
  if (code !== 0) {
    console.warn('[build] generate-llms.js failed, continuing with build...');
  }
} catch (e) {
  console.warn('[build] generate-llms.js threw, continuing with build...');
}

// 2) Clean dist to avoid stale files
try {
  const distPath = resolve(__dirname, '..', 'dist');
  fs.rmSync(distPath, { recursive: true, force: true });
  console.log('[build] Cleaned dist/');
} catch {}

// 3) Run Vite build
const viteExit = run('npx', ['vite', 'build']);
process.exit(viteExit);
