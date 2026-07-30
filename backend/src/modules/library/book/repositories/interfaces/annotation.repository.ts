import { BookEntity } from 'src/infrastructure/database/entities/book.entity';

export abstract class AnnotationRepository {
  abstract findByID: (id: string) => Promise<BookEntity>;
}
