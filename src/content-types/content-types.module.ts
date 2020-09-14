import { Module } from '@nestjs/common';
import { ContentTypesController } from './content-types.controller';
import { ContentTypesService } from './content-types.service';

@Module({
  providers: [ContentTypesService],
  controllers: [ContentTypesController],
})
export class ContentTypesModule {}
