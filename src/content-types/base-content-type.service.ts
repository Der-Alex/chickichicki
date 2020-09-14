import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseContentTypeService {
  async getAllBaseContentTypes() {
    console.log('blub');
  }
}
