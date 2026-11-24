import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { copyFileSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';

test('a linked walkthrough must exist as a file', (t) => {
  const root = mkdtempSync(join(tmpdir(), 'readme-media-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'scripts'));
  mkdirSync(join(root, 'docs/video'), { recursive: true });
  const script = join(root, 'scripts/check-readme-media.mjs');
  copyFileSync(new URL('./check-readme-media.mjs', import.meta.url), script);
  writeFileSync(join(root, 'README.md'), '[![Walkthrough](poster.png)](docs/video/org-setup.mp4)\n');
  writeFileSync(join(root, 'poster.png'), 'poster');
  const run = () => spawnSync(process.execPath, [script], { encoding: 'utf8' });

  const missing = run();
  assert.equal(missing.status, 1, missing.stderr);
  assert.match(missing.stderr, /README walkthrough is not a file: docs\/video\/org-setup\.mp4/);

  writeFileSync(join(root, 'docs/video/org-setup.mp4'), 'video');
  const present = run();
  assert.equal(present.status, 0, present.stderr);
});
