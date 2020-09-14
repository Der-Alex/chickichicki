import { BaseContentTypeDto } from './base-content-type.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { HtmlInterface } from '../base-content-types/interfaces/html.interface';

export class HtmlBaseContentTypeDto extends BaseContentTypeDto implements HtmlInterface {
  @IsString()
  @IsNotEmpty()
  html: string;
}
