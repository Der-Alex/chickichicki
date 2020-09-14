import { BaseSingleton } from '../../helper/base-singleton';
import { BaseContentTypeInterface } from 'chickichicki-shared-interfaces';

export class BaseContentType extends BaseSingleton implements BaseContentTypeInterface {
  name: string;
  cssClasses: string;
}
