import { Module } from '@nestjs/common';
import { GuiCinemometrosService } from './gui-cinemometros.service';
import { GuiCinemometrosController } from './gui-cinemometros.controller';
import { FileService } from './filesService.service';

@Module({
  controllers: [GuiCinemometrosController],
  providers: [GuiCinemometrosService, FileService],
})
export class GuiCinemometrosModule {}
