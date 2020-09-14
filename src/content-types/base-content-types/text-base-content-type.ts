import { BaseContentType } from './base-content-type';
import { TextInterface } from 'chickichicki-shared-interfaces';

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
