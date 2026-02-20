import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs-extra';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsRoot = path.resolve(__dirname, '..');
const sourceDir = path.resolve(docsRoot, '..', 'dist');
const targetDir = path.resolve(docsRoot, 'static', 'wje-elementy');

async function main() {
  const sourceExists = await fs.pathExists(sourceDir);

  if (!sourceExists) {
    throw new Error(`Source directory does not exist: ${sourceDir}`);
  }

  await fs.remove(targetDir);
  await fs.copy(sourceDir, targetDir, {
    overwrite: true,
    dereference: true,
  });

  console.log(`Synced WJ assets: ${sourceDir} -> ${targetDir}`);
}

main().catch((error) => {
  console.error('[sync:wje-assets] Failed:', error.message);
  process.exit(1);
});
