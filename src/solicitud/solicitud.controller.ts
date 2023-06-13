import { Body, Controller, Get, Post } from '@nestjs/common';
import { SolicitudService } from './solicitud.service';
import { CreateSolicitudDto } from './dtos/create-solicitud-dto';

@Controller('solicitud')
export class SolicitudController {
  constructor(private solicitudService: SolicitudService) {}
  @Get()
  findAll() {
    // return 'all solicitudes';
    return this.solicitudService.findAll();
  }

  @Post()
  create(@Body() createSolicitudDto: CreateSolicitudDto) {
    // return 'crear solicitud nueva';
    return this.solicitudService.create(createSolicitudDto);
  }
}
