import { Module } from '@nestjs/common';
import { GuiCinemometrosModule } from './gui-cinemometros/gui-cinemometros.module';

@Module({
  imports: [GuiCinemometrosModule],
  providers: [],
  exports: [],
})
export class ModulesModule {}
