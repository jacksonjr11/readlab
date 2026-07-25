import { Injectable } from '@nestjs/common';
import { BookModel } from '../dto/book.model';
import { BookRepository } from '../repositories/interfaces/book.repository';

@Injectable()
export class BookService {
  constructor(private readonly repository: BookRepository) {}

  public async findByID(id: string): Promise<BookModel> {
    const entity = await this.repository.findByID(id);
    const response: BookModel = {
      id: entity.id,
      title: entity.title,
    };

    return response;
  }
}
