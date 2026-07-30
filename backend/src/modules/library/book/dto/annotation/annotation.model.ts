import { BookModel } from '../book/book.model';

export interface AnnotationModel {
  id: string;
  title: string;
  content: string;
  book: BookModel;
}
