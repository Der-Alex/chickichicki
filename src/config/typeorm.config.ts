import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'chickichicki',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true
};