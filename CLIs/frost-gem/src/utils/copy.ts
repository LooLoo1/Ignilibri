import * as fs from 'fs/promises'
import * as path from 'path'

export async function copyFile(sourcePath: string, destinationPath: string): Promise<void> {
  try {
    await fs.copyFile(sourcePath, destinationPath);
    console.log(`File copied from ${sourcePath} to ${destinationPath}`);
  } catch (error) {
    console.error(`Error copying file from ${sourcePath} to ${destinationPath}:`, error);
  }
}

export async function copyDirectory(sourceDir: string, destinationDir: string): Promise<void> {
  try {
    await fs.mkdir(destinationDir, { recursive: true });

    const files = await fs.readdir(sourceDir);
    for (const file of files) {
      const sourceFilePath = path.join(sourceDir, file);
      const destinationFilePath = path.join(destinationDir, file);

      const stats = await fs.stat(sourceFilePath);
      if (stats.isDirectory()) {
        await copyDirectory(sourceFilePath, destinationFilePath);
      } else {
        await copyFile(sourceFilePath, destinationFilePath);
      }
    }

    console.log(`Directory copied from ${sourceDir} to ${destinationDir}`);
  } catch (error) {
    console.error(`Error copying directory from ${sourceDir} to ${destinationDir}:`, error);
  }
}

// Examples
copyFile('path/to/source/file.txt', 'path/to/destination/file.txt');
copyDirectory('path/to/source/directory', 'path/to/destination/directory');
