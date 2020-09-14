import { Module } from '@nestjs/common';
import { ContentTypesController } from './content-types.controller';
import { BaseContentTypeService } from './base-content-type.service';
import { ContentTypeService } from './content-type.service';

@Module({
  providers: [BaseContentTypeService, ContentTypeService],
  controllers: [ContentTypesController],
})
export class ContentTypesModule {}
