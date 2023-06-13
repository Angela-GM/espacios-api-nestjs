/* eslint-disable prettier/prettier */
import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class Solicitud {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  cargo: string;

  @Column()
  promocion: string;

  @Column()
  email: string;

  @Column()
  tipo: string;

  @Column()
  nombreActividad: string;

  @Column()
  start: Date;

  @Column()
  end: Date;

  @Column()
  dia: string;

  @Column()
  horaInicio: string;

  @Column()
  horaFin: string;
}
