import { Controller } from '@nestjs/common';
import { GuiCinemometrosService } from './gui-cinemometros.service';

@Controller('gui-cinemometros')
export class GuiCinemometrosController {
  constructor(private readonly guiCinemometrosService: GuiCinemometrosService) {}
}
