import { BaseSingleton } from '../../helper/base-singleton';
import { BaseContentTypeInterface } from './interfaces/base-content-type.interface';

export class BaseContentType extends BaseSingleton implements BaseContentTypeInterface {
  name: string;
  cssClasses: string;
}
