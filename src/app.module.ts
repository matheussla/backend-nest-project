import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { DatabaseModule } from './shared/database/database.module';
import { LoggerModule } from './shared/logger/logger.module';

@Module({
  imports: [DatabaseModule, LoggerModule, BlogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
