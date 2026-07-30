import { BookEntity } from 'src/infrastructure/database/entities/book.entity';
import { AnnotationRepository as IAnnotationReposity } from '../interfaces/annotation.repository';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export class AnnotationRepository implements IAnnotationReposity {
  constructor(
    @InjectRepository(BookEntity)
    private readonly repository: Repository<BookEntity>,
  ) {}

  async findByID(id: string): Promise<BookEntity> {
    const result = await this.repository.findOneBy({ id });
    return result as BookEntity;
  }
}
