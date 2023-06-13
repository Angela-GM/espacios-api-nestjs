/* eslint-disable prettier/prettier */
import { registerAs } from '@nestjs/config';

// Encapsula un objeto que se puede instanciar desde el app.module.ts
export default registerAs('db', () => ({
  type: 'mysql',
  entities: ['dist/**/*.entity.js'],
  synchronize: true, //si está en true, hace que la tabla si no existe se cree
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  //   Parametros para la conexion de la bae de datos
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Juajua123',
  database: process.env.DB_DATABASE || 'espacios',
}));
