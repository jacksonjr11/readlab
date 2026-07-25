import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { BookRepository } from './book/repositories/implementations/book.repository';
import { BookRepository as IBookRepository } from './book/repositories/interfaces/book.repository';

@Module({
  imports: [BookModule],
  providers: [
    {
      provide: IBookRepository,
      useClass: BookRepository,
    },
  ],
})
export class LibraryModule {}
