import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ContentTypesService } from './content-types.service';
import { CreateContentTypeDto } from './dto/create-content-type.dto';
import { BaseContentTypeInterface } from 'chickichicki-shared-interfaces';

@Controller('content-types')
export class ContentTypesController {
  constructor(private contentTypeService: ContentTypesService) {}

  @Get()
  async getAllBaseContentTypes(): Promise<{ [key: string]: BaseContentTypeInterface }> {
    return this.contentTypeService.getAllBaseContentTypes();
  }

  @Post()
  async createContentType(
    @Body(ValidationPipe) createContentTypeDto: CreateContentTypeDto,
  ): Promise<BaseContentTypeInterface[]> {
    return this.contentTypeService.createContentType(createContentTypeDto);
  }
}
