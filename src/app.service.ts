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

  
  async create(livro: Livro): Promise<any> {
    return this.livrosRepository.save(livro);
  }

  
  async findAll(): Promise<Livro[]> {
    return this.livrosRepository.find();
  }


  async remove(id: string): Promise<void> {
    await this.livrosRepository.delete(id);
  }
}
