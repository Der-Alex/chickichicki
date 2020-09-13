import { Module } from '@nestjs/common';
import { BaseContentTypesModule } from '../base-content-types/base-content-types.module';
import { ContentTypesController } from './content-types.controller';

@Module({
  imports: [BaseContentTypesModule],
  controllers: [ContentTypesController],
})
export class ContentTypesModule {}
