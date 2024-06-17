import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './configuration/configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GuiCinemometrosModule } from './modules/gui-cinemometros/gui-cinemometros.module';
import { ModulesModule } from './modules/modules.module';

require('dotenv').config();

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: `./env/${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    ModulesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly configService: ConfigService) {
    console.log(
      `===============================================================================`,
    );
    console.log('\tProyecto Nest con GUI para reportes');
    console.log(
      `===============================================================================`,
    );
    console.log('Descripcion');
    console.log(`AMBIENTE:\t${process.env.NODE_ENV}`);
    console.log(`PUERTO:\t${this.configService.get<number>('dao.PORT')}`);
    console.log(
      `===============================================================================`,
    );
  }
}
