import { BookEntity } from 'src/infrastructure/database/entities/book.entity';

export abstract class BookRepository {
  abstract findByID: (id: string) => Promise<BookEntity>;
}
