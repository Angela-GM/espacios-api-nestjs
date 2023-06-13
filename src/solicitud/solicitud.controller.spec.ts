import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudController } from './solicitud.controller';
import { SolicitudService } from './solicitud.service';
import { CreateSolicitudDto } from './dtos/create-solicitud-dto';

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

describe('SolicitudController', () => {
  let controller: SolicitudController;
  const mockSolicitudService = {
    findAll: jest.fn().mockImplementation(() => Promise.resolve({ solicitud })),
    create: jest
      .fn()
      .mockImplementation((createSolicitudDto: CreateSolicitudDto) => {
        const newSolicitud = {
          id: 2,
          ...createSolicitudDto,
        };
        solicitud.push(newSolicitud);
        return Promise.resolve(newSolicitud);
      }),
  };
  // ARRANGE
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitudController],
      providers: [SolicitudService],
    })
      .overrideProvider(SolicitudService)
      .useValue(mockSolicitudService)
      .compile();

    controller = module.get<SolicitudController>(SolicitudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a spaces list', async () => {
    expect(await controller.findAll()).toMatchObject({ solicitud });
  });
});
