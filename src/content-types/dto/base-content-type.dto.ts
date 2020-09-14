import { IsString } from 'class-validator';
import { BaseContentTypeInterface } from 'chickichicki-shared-interfaces';

export class BaseContentTypeDto implements BaseContentTypeInterface {
  @IsString()
  name: string;
  @IsString()
  cssClasses: string;
}
