import { BaseContentTypeDto } from './base-content-type.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { TextInterface } from '../base-content-types/interfaces/text.interface';

export class TextBaseContentTypeDto extends BaseContentTypeDto implements TextInterface {
  @IsNotEmpty()
  @IsString()
  text: string;
}
