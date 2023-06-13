import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudService } from './solicitud.service';

const solicitud: any = [
  {
    id: 1,
    nombre: 'Sara',
    cargo: 'formador',
    promocion: 'p7',
    email: 'sara@gmail.com',
    tipo: 'masterclass',
    nombreActividad: 'Taller Testing APIs NestJS',
    start: '2023-06-15T00:00:00.000Z',
    end: '2023-06-15T00:00:00.000Z',
    dia: 'Lunes',
    horaInicio: '9:00 h',
    horaFin: '13:00 h',
  },
];

describe('SolicitudService', () => {
  let service: SolicitudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolicitudService],
    }).compile();

    service = module.get<SolicitudService>(SolicitudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
