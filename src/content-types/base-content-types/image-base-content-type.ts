import { ImageInterface } from './interfaces/image.interface';
import { BaseContentType } from './base-content-type';

export class ImageBaseContentType extends BaseContentType implements ImageInterface {
  name: string;
  cssClasses: string;
  url: string;
  altText: string;
  constructor() {
    super();
    this.name = '';
    this.cssClasses = '';
    this.url = '';
    this.altText = '';
  }
}
