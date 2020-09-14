import { BaseContentTypeInterface } from './base-content-type.interface';
/**
  This one should be used for wysiwyg editors
 */
export interface HtmlInterface extends BaseContentTypeInterface {
  html: string;
}
