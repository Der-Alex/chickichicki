import { BaseContentTypeDto } from './base-content-type.dto';
import { IsNotEmpty, IsString } from 'class-validator';

/**
  This one should be used for wysiwyg editors
 */
export class HtmlDto extends BaseContentTypeDto {
  @IsString()
  @IsNotEmpty()
  html: string;
}
