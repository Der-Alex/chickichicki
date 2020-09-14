import { BaseContentTypeDto } from './base-content-type.dto';
import { IsNotEmpty, isNotEmpty, IsString, IsUrl } from 'class-validator';
import { ImageInterface } from '../base-content-types/interfaces/image.interface';

export class ImageBaseContentTypeDto extends BaseContentTypeDto implements ImageInterface {
  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsString()
  altText: string;
}
