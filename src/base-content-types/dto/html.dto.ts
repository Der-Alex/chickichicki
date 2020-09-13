import { BaseContentTypeDto } from './base-content-type.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class HtmlDto extends BaseContentTypeDto {
  @IsString()
  @IsNotEmpty()
  html: string;
}
