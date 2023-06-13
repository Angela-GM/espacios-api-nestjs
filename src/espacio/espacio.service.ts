import { Injectable } from '@nestjs/common';
import { CreateEspacioDto } from './dtos/create-espacio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Espacio } from './entities/espacio.entity';

@Injectable()
export class EspacioService {
  constructor(
    // Injectar repositorio de libreria con metodos sql
    @InjectRepository(Espacio) private espacioRepository: Repository<Espacio>,
  ) {}
  async findAll(): Promise<Espacio[]> {
    return this.espacioRepository.find();
    // return 'soy espacio service';
  }

  create(createEspacioDto: CreateEspacioDto) {
    return this.espacioRepository.save(createEspacioDto);
    // return 'post del espacio';
  }
}
