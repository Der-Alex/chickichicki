import { BaseContentTypeDto } from './base-content-type.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { TextInterface } from 'chickichicki-shared-interfaces';

export class TextBaseContentTypeDto extends BaseContentTypeDto implements TextInterface {
  @IsNotEmpty()
  @IsString()
  text: string;
}
