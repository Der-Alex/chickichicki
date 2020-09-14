import { HtmlBaseContentType } from './html-base-content-type';
import { ImageBaseContentType } from './image-base-content-type';
import { TextBaseContentType } from './text-base-content-type';
import { BaseContentTypeInterface } from './interfaces/base-content-type.interface';

/**
 * TODO: Find a better way to show all the content types by calling a controller...
 */
export function baseContentTypes(): { [key: string]: BaseContentTypeInterface } {
  const html = new HtmlBaseContentType();
  const image = new ImageBaseContentType();
  const text = new TextBaseContentType();

  return {
    html,
    image,
    text,
  };
}
