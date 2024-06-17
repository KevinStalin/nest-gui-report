import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*   @Get()
  getHello(): string {
    return this.appService.getHello();
  } */

  @Get()
  @Render('index')
  getIndex() {
    return {
      title: 'Bienvenido a Handlebars con NestJS',
      body: 'Esta es una plantilla simple de Handlebars con NestJS.',
    };
  }
}
