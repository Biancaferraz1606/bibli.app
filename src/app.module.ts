
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Livro } from './livro.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      username: 'seu_usuario', 
      database: 'biblioteca', 
      entities: [Livro],
      synchronize: true,
    }),
   AppModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


