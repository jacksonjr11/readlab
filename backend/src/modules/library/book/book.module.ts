import { Module } from '@nestjs/common';
import { BookController } from './controllers/book.controller';
import { BookService } from './services/book.service';
import { BookRepository } from './repositories/implementations/book.repository';
import { BookRepository as IBookRepository } from './repositories/interfaces/book.repository';

@Module({
  controllers: [BookController],
  providers: [
    BookService,
    {
      provide: IBookRepository,
      useClass: BookRepository,
    },
  ],
})
export class BookModule {}
