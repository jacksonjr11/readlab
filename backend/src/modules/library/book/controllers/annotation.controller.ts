import { Controller } from '@nestjs/common';
import { AnnotationService } from '../services/annotation.service';

@Controller('book')
export class AnnotationController {
  constructor(private readonly service: AnnotationService) {}
}
