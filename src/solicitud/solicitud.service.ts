import { Injectable } from '@nestjs/common';
import { CreateSolicitudDto } from './dtos/create-solicitud-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Solicitud } from './entities/solicitud.entity';

@Injectable()
export class SolicitudService {
  constructor(
    // Injectar repositorio de libreria con metodos sql
    @InjectRepository(Solicitud)
    private solicitudRepository: Repository<Solicitud>,
  ) {}
  async findAll(): Promise<Solicitud[]> {
    return this.solicitudRepository.find();
    // return 'soy espacio service';
  }

  create(createSolicitudDto: CreateSolicitudDto) {
    return this.solicitudRepository.save(createSolicitudDto);
    // return 'post del espacio';
  }
}
