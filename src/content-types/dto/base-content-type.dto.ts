import { IsString } from 'class-validator';

export class BaseContentTypeDto {
  @IsString()
  name: string;
  @IsString()
  cssClasses: string;
}
