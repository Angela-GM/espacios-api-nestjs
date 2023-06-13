import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EspacioModule } from './espacio/espacio.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitudModule } from './solicitud/solicitud.module';

// Fichero donde se hace la conexión
// Esto viene en la documentacion de nest.js
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('db'),
    }),
    EspacioModule,
    SolicitudModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
