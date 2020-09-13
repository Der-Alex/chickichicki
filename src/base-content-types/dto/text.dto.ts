import { BaseContentTypeDto } from './base-content-type.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class TextDto extends BaseContentTypeDto {
  @IsString()
  @IsNotEmpty()
  text: string;
}
