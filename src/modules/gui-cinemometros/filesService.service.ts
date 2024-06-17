import { Injectable } from '@nestjs/common';
import { dialog } from 'electron';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileService {
  async selectFolder() {
    const result = await dialog.showOpenDialog({
      properties: ['openDirectory'],
    });

    if (result.canceled) return [];

    const folderPath = result.filePaths[0];
    const files = fs.readdirSync(folderPath);

    return files.map((file) => path.join(folderPath, file));
  }
}
