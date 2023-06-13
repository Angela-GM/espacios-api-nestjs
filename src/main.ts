import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // http://localhost:3000/api/v1/ hacer una ruta raiz mas larga para poder añadir en otra ruta la documenacion por ejemplo
  app.setGlobalPrefix('api/v1');
  app.enableCors(); //habilitar cors a nivel global de nuestra api
  await app.listen(3000);
}
bootstrap();
