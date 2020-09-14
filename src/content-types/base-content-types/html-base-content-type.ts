import { HtmlInterface } from './interfaces/html.interface';
import { HtmlBaseContentTypeDto } from '../dto/html-base-content-type.dto';

export class HtmlBaseContentType extends HtmlBaseContentTypeDto implements HtmlInterface {
  name: string;
  cssClasses: string;
  html: string;
  constructor() {
    super();
    this.name = '';
    this.cssClasses = '';
    this.html = '';
  }
}
