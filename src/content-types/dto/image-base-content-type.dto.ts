import { BaseContentTypeDto } from './base-content-type.dto';
import { IsNotEmpty, isNotEmpty, IsString, IsUrl } from 'class-validator';
import { ImageInterface } from 'chickichicki-shared-interfaces';

export class ImageBaseContentTypeDto extends BaseContentTypeDto implements ImageInterface {
  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsString()
  altText: string;
}
