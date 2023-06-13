import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudService } from './solicitud.service';
import { CreateSolicitudDto } from './dtos/create-solicitud-dto';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Solicitud } from './entities/solicitud.entity';

const solicitudes: any = [
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
  const mockSolicitudRepositoryService = {
    find: jest.fn().mockReturnValue(Promise.resolve(solicitudes)),
    save: jest
      .fn()
      .mockImplementation((createSolicitudDto: CreateSolicitudDto) => {
        return {
          id: 1,
          ...createSolicitudDto,
        };
      }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SolicitudService,
        {
          provide: getRepositoryToken(Solicitud),
          useValue: mockSolicitudRepositoryService,
        },
      ],
    })
      // .overrideProvider(getRepositoryToken(Solicitud))
      // .useValue(mockSolicitudRepositoryService)
      .compile();

    service = module.get<SolicitudService>(SolicitudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll() should return the array "espacios"', async () => {
    expect(await service.findAll()).toMatchObject(solicitudes);
  });

  it('should create an space and return the new solicitud ', async () => {
    const newSolicitud = {
      nombre: 'Sara',
      cargo: 'formador',
      promocion: 'p7',
      email: 'sara@gmail.com',
      tipo: 'masterclass',
      nombreActividad: 'Taller Testing APIs NestJS',
      start: new Date('2023-06-15T00:00:00.000Z'),
      end: new Date('2023-06-15T00:00:00.000Z'),
      dia: 'Lunes',
      horaInicio: '9:00 h',
      horaFin: '13:00 h',
    };
    expect(await service.create(newSolicitud)).toMatchObject({
      id: expect.any(Number),
    });
  });
});
