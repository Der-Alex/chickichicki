import { BaseContentTypeInterface } from './base-content-type.interface';

export interface ImageInterface extends BaseContentTypeInterface {
  url: string;
  altText: string;
}
