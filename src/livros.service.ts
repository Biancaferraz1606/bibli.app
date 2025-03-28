// src/livros/livros.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Livro } from './livro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LivrosService {
  constructor(
    @InjectRepository(Livro)
    private livrosRepository: Repository<Livro>,
  ) {}


  async create(livro: Livro): Promise<Livro> {
    return this.livrosRepository.save(livro);
  }


  async findAll(): Promise<Livro[]> {
    return this.livrosRepository.find();
  }


  async findOne(id: string): Promise<any> {
    return this.livrosRepository.findOne({ where: { id } });
  }


  async update(id: string, livro: Livro): Promise<any> {
    await this.livrosRepository.update(id, livro);
   
  }

 
  async remove(id: string): Promise<void> {
    await this.livrosRepository.delete(id);
  }
}
