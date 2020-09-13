import { BaseContentTypeDto } from './base-content-type.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class ImageDto extends BaseContentTypeDto {
  @IsString()
  @IsNotEmpty()
  url: string;
  @IsString()
  @IsNotEmpty()
  altText: string;
}
