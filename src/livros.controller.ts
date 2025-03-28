// src/livros/livros.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { Livro } from './livro.entity';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Post()
  async create(@Body() livro: Livro) {
    return this.livrosService.create(livro);
  }

  @Get()
  async findAll(): Promise<Livro[]> {
    return this.livrosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Livro> {
    return this.livrosService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() livro: Livro): Promise<Livro> {
    return this.livrosService.update(id, livro);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.livrosService.remove(id);
  }
}
