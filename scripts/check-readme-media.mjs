import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const readme = readFileSync(join(root, 'README.md'), 'utf8');
const limit = 1_000_000;

const images = [...readme.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map((m) => m[1]);
assert.ok(images.length, 'README has no image references');
const top = images[0];
assert.ok(!top.endsWith('.gif'), `the first README image is still an animated GIF: ${top}`);
assert.ok(readme.includes('docs/video/org-setup.mp4'), 'the MP4 walkthrough link is missing');

for (const ref of images) {
  if (/^https?:\/\//.test(ref)) continue;
  const path = join(root, ref);
  assert.ok(existsSync(path), `README image does not exist: ${ref}`);
  const bytes = statSync(path).size;
  assert.ok(bytes < limit, `${ref} is ${bytes} bytes, over the ${limit}-byte limit`);
  console.log(`${ref}: ${bytes} bytes`);
}
