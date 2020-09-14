import { BaseContentType } from './base-content-type';
import { ImageInterface } from 'chickichicki-shared-interfaces';

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
