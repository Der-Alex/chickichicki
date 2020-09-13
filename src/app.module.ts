import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { BaseContentTypesModule } from './base-content-types/base-content-types.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule.forRoot(typeOrmConfig), AuthModule, BaseContentTypesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
