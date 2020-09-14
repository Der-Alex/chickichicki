import { IsArray, ValidateNested } from 'class-validator';
import { BaseContentTypeDto } from './base-content-type.dto';
import { Type } from 'class-transformer';
import { HtmlBaseContentTypeDto } from './html-base-content-type.dto';
import { ImageBaseContentTypeDto } from './image-base-content-type.dto';
import { TextBaseContentTypeDto } from './text-base-content-type.dto';

export class CreateContentTypeDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BaseContentTypeDto, {
    discriminator: {
      property: 'type',
      subTypes: [
        { value: HtmlBaseContentTypeDto, name: 'html' },
        { value: ImageBaseContentTypeDto, name: 'image' },
        { value: TextBaseContentTypeDto, name: 'text' },
      ],
    },
  })
  contentTypes: BaseContentTypeDto[];
}
