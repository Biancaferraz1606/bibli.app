import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Livro } from './livro.entity';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Livro],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Livro]),
  ],
  controllers: [LivrosController],
  providers: [LivrosService],
})
export class AppModule {}


