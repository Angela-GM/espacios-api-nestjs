/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// Mapeo de la base de datos mysql a objeto json
// Crear clase Espacio que será la tabla espacio
@Entity()
export class Espacio {
  // Añadir los cammpos de la tabla Espacio
  @PrimaryGeneratedColumn() //primaryKey autoincremento
  id: number;

  @Column()
  edificio: string;

  @Column()
  aula: string;
}
