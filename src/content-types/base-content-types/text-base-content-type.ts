import { TextInterface } from './interfaces/text.interface';
import { BaseContentType } from './base-content-type';

export class TextBaseContentType extends BaseContentType implements TextInterface {
  name: string;
  cssClasses: string;
  text: string;
  constructor() {
    super();
    this.name = '';
    this.cssClasses = '';
    this.text = '';
  }
}
