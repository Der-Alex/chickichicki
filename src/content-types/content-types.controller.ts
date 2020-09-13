import { Controller, Post } from '@nestjs/common';

@Controller('content-types')
export class ContentTypesController {
  @Post()
  createContentType() {}
}
