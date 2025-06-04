import { Module } from '@nestjs/common';
import { BlogController } from './controllers/blog.controller';
import { BlogService } from './services/blog.service';
import { BlogRepository } from './repositories/blog.repository';

@Module({
  imports: [],
  controllers: [BlogController],
  providers: [BlogService, BlogRepository],
})
export class BlogModule {}
