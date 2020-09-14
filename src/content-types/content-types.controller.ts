import { Controller, Get, Post } from '@nestjs/common';
import { BaseContentTypeService } from './base-content-type.service';
import { ContentTypeService } from './content-type.service';
import { BaseContentTypeInterface } from './base-content-types/base-content-type.interface';

@Controller('content-types')
export class ContentTypesController {

  constructor(private baseContentTypeService: BaseContentTypeService, private contentTypeService: ContentTypeService) {}

  @Get()
  async getAllBaseContentTypes() {
    await this.baseContentTypeService.getAllBaseContentTypes();
  }

  @Post()
  createContentType() {
  }
}
