import { Injectable } from '@nestjs/common';

import * as Excel from 'exceljs';

@Injectable()
export class GuiCinemometrosService {
  renderHome() {
    return {
      message: 'Conversor de Archivos (.json) a .xlsx',
      title: 'MAIN',
    };
  }

  async mainJson(listFiles: any) {
    const workbook = new Excel.Workbook();
    const sheet = workbook.addWorksheet('Mi Hoja');
    const Encabesados = [
      'Fecha',
      'Hora',
      'UsuarioCodigo',
      'UbicacionOperativo',
      'Latitude',
      'Longitude',
      'VelocidadLimite',
      'VelocidadMedida',
      'PlacaVehiculo',
      'Tolerancia',
      'Infraccion',
      'Equipo',
      'SerieEquipo',
      'CertificadoHomologacion',
      'ArchivoOrigen',
      'ArchivoImagen',
      'FechaDeVigenciaHomologacion',
      'FechaUltimoMantenimiento',
      'HomologacionEquador',
    ];
    sheet.addRow(Encabesados);
    for (const iterator of listFiles) {
      // console.log('NAME:', iterator.originalname);
      const textPlain = this.readBuffer(iterator.buffer);
      const dataCompleta = this.convertData(JSON.parse(textPlain));

      // console.log('Final=>', dataCompleta);
      sheet.addRow(dataCompleta);
    }

    // await workbook.xlsx.writeFile('miArchivo.xlsx'); //crea un archivo en la base del proyecto
    const buffer = await workbook.xlsx.writeBuffer();

    // console.log('FINALLLLLL');
    // console.log(buffer);
    return buffer;
    // await this.createExcelFile();
  }

  readBuffer(buffer: Buffer) {
    // Puedes convertir el buffer a string si contiene texto
    return buffer.toString('utf-8');
  }

  convertData(Datos: any) {
    // const entriesData = Object.entries(Datos);
    // console.log('entriesData', entriesData);
    return Object.entries(Datos).map((item) => item[1]);
  }

  //? manejar archivos .XLSX (Excel)
  /*   
  async createExcelFile() {
    // Crear un nuevo libro de trabajo y una hoja
    const workbook = new Excel.Workbook();
    const sheet = workbook.addWorksheet('Mi Hoja');

    // Añadir algunas filas con datos
    sheet.addRow(['ID', 'Nombre', 'Valor']);
    sheet.addRow([1, 'Producto 1', 1000]);
    sheet.addRow([2, 'Producto 2', 2000]);

    // Guardar el archivo .xlsx
    await workbook.xlsx.writeFile('miArchivo.xlsx');

    return { message: 'Archivo .xlsx creado correctamente' };
  }
 */
}
