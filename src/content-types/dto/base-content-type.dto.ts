import { IsString } from 'class-validator';
import { BaseContentTypeInterface } from '../base-content-types/interfaces/base-content-type.interface';

export class BaseContentTypeDto implements BaseContentTypeInterface {
  @IsString()
  name: string;
  @IsString()
  cssClasses: string;
}
