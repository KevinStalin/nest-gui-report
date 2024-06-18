import {
  Controller,
  Get,
  Post,
  Render,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { GuiCinemometrosService } from './gui-cinemometros.service';
import { FileService } from './filesService.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@Controller('gui-cinemometros')
export class GuiCinemometrosController {
  constructor(
    private readonly guiCinemometrosService: GuiCinemometrosService,
    // private readonly fileService: FileService,
  ) {}

  @Get('/index2')
  // @Render('indexCine') // Nombre de la vista
  // @Render('indexUpload') // Nombre de la vista
  @Render('indexUpload') // Nombre de la vista
  getIndexUpload() {
    return this.guiCinemometrosService.renderHome();
  }

  @Get('/')
  // @Render('indexCine') // Nombre de la vista
  // @Render('indexUpload') // Nombre de la vista
  @Render('indexUpJson') // Nombre de la vista
  getHello() {
    return this.guiCinemometrosService.renderHome();
  }

  // @Get('select-folder')
  // async selectFolder() {
  //   console.log('Se ejecuta (select-folder)');
  //   return await this.fileService.selectFolder();
  // }

  /*   @Post('/upload')
  @UseInterceptors(FileInterceptor('folder'))
  async uploadFolder(@UploadedFile() folder: Express.Multer.File) {
    console.log('folder\n', folder);
    if (!folder) {
      // throw new BadRequestException('No se seleccionó una carpeta válida');
      console.log('No se seleccionó una carpeta válida');
      return;
    }
    const folderPath = folder.path;
    // Aquí puedes procesar la carpeta seleccionada
    console.log('Carpeta seleccionada:', folderPath);

    // Por ejemplo, listar archivos dentro de la carpeta
    // Utiliza módulos de Node.js como fs/promises para leer archivos

    // Devolver respuesta al cliente
    return {
      message: 'Carpeta seleccionada: ',
    };
  } */

  @Post('/upload')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFolder(@UploadedFiles() files, @Res() res: Response) {
    if (!files || files.length === 0) {
      // throw new BadRequestException('No se seleccionaron archivos válidos');
      console.log('No se seleccionó una carpeta válida');
      return;
    }
    // console.log('Archivos seleccionados:', files);
    // Lógica de procesamiento de los archivos aquí
    const buffer = await this.guiCinemometrosService.mainJson(files);

    res.setHeader(
      'Content-Disposition',
      'attachment; filename="miArchivo.xlsx"',
    );
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );

    // Enviar el buffer como respuesta
    res.end(buffer);
    // return { message: 'Archivos seleccionados correctamente' };
  }
}
