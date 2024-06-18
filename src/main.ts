import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
// import url from 'url';
// import { app, BrowserWindow } from 'electron';
// import { engine } from 'express-handlebars';

async function bootstrap() {
  const nestApp = await NestFactory.create<NestExpressApplication>(AppModule);
  // const nestApp = await NestFactory.create(AppModule);
  nestApp.enableCors();
  nestApp.setGlobalPrefix('nest-gui-repot');

  // Configuración de Handlebars
  // nestApp.engine(
  //   'hbs',
  //   engine({
  //     extname: '.hbs',
  //     layoutsDir: join(__dirname, '..', 'views', 'layouts'), // Directorio donde están los diseños
  //     defaultLayout: 'main', // Diseño principal por defecto
  //     partialsDir: join(__dirname, '..', 'views', 'partials'), // Directorio opcional para vistas parciales
  //   }),
  // );
  nestApp.setViewEngine('hbs'); // Establecer Handlebars como motor de vistas
  nestApp.setBaseViewsDir(join(__dirname, '..', 'views')); // Directorio base donde están las vistas
  // Servir archivos estáticos desde el directorio 'public'
  nestApp.useStaticAssets(join(__dirname, '..', 'public'));

  const configService = nestApp.get(ConfigService);
  await nestApp.listen(configService.get<number>('dao.PORT'));

  // Configuracion Electron
  /* let mainWindow: BrowserWindow;
  app.on('ready', () => {
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    });

    if (process.env.NODE_ENV === 'development') {
      mainWindow.loadURL('http://localhost:3000');
    } else {
      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, '../dist/index.html'),
          protocol: 'file:',
          slashes: true,
        }),
      );
    }

    mainWindow.on('closed', () => {
      mainWindow = null;
    });
  }); */
}
bootstrap();
