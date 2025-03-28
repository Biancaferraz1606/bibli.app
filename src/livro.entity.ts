import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Livro {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column()
  autor: string;

  @Column()
  anoPublicacao: number;

  @Column()
  genero: string;

  @Column()
  sinopse: string;
}
