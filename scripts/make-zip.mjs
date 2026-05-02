import AdmZip from 'adm-zip';
import fs from 'fs';
import path from 'path';

const zip = new AdmZip();
const cwd = process.cwd();

function walk(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    // Ignore heavy or unnecessary directories
    if (['node_modules', '.next', '.git'].includes(item) || item.endsWith('.zip')) {
      continue;
    }
    
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else {
      // Add local file, maintaining the relative directory structure
      const relativeDirPath = path.dirname(path.relative(cwd, fullPath));
      zip.addLocalFile(fullPath, relativeDirPath === '.' ? '' : relativeDirPath);
    }
  }
}

console.log('Gathering files for ZIP...');
walk(cwd);

const outputPath = path.join(cwd, 'public', 'linux-distro-chooser.zip');
zip.writeZip(outputPath);

console.log(`ZIP file created successfully at: ${outputPath}`);
