import { Injectable } from '@nestjs/common';
import { baseContentTypes } from './base-content-types/base-content-types';
import { CreateContentTypeDto } from './dto/create-content-type.dto';
import { BaseContentTypeInterface } from 'chickichicki-shared-interfaces';

@Injectable()
export class ContentTypesService {
  async getAllBaseContentTypes(): Promise<{ [key: string]: BaseContentTypeInterface }> {
    return baseContentTypes();
  }

  async createContentType(createContentTypeDto: CreateContentTypeDto): Promise<BaseContentTypeInterface[]> {
    console.log(JSON.stringify(createContentTypeDto.contentTypes));
    return createContentTypeDto.contentTypes;
  }
}
