import { Module } from '@nestjs/common';
import { GuiCinemometrosService } from './gui-cinemometros.service';
import { GuiCinemometrosController } from './gui-cinemometros.controller';

@Module({
  controllers: [GuiCinemometrosController],
  providers: [GuiCinemometrosService],
})
export class GuiCinemometrosModule {}
