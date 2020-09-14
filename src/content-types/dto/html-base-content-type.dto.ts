import { BaseContentTypeDto } from './base-content-type.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { HtmlInterface } from 'chickichicki-shared-interfaces';

export class HtmlBaseContentTypeDto extends BaseContentTypeDto implements HtmlInterface {
  @IsString()
  @IsNotEmpty()
  html: string;
}
