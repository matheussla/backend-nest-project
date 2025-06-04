import { Injectable, NotFoundException } from '@nestjs/common';
import { BlogRepository } from '../repositories/blog.repository';
import { CreateBlogPostDto, CreateCommentDto } from '../dtos';
import { LoggerService } from '../../shared/logger/services';
import { BlogPost } from '@prisma/client';

@Injectable()
export class BlogService {
  constructor(
    private readonly blogRepository: BlogRepository,
    private readonly logger: LoggerService,
  ) {}

  private async findById(id: string): Promise<BlogPost> {
    const blogPost = await this.blogRepository.findById(id);
    if (!blogPost) {
      this.logger.error(`Blog post with ID ${id} not found`);
      throw new NotFoundException(`Blog post with ID ${id} not found`);
    }
    return blogPost;
  }

  async findAll(): Promise<BlogPost[]> {
    this.logger.log('Fetching all blog posts', 'BlogService');
    return this.blogRepository.findAll();
  }

  async getBlogPostById(id: string): Promise<BlogPost> {
    this.logger.log(`Fetching blog post with ID: ${id}`, 'BlogService');
    return this.findById(id);
  }

  async create(createBlogPostDto: CreateBlogPostDto): Promise<BlogPost> {
    this.logger.log('Creating new blog post', 'BlogService');
    return this.blogRepository.create(createBlogPostDto);
  }

  async createComment(
    id: string,
    createCommentDto: CreateCommentDto,
  ): Promise<BlogPost> {
    this.logger.log(
      `Creating comment for blog post with ID: ${id}`,
      'BlogService',
    );
    await this.blogRepository.createComment(id, createCommentDto.content);

    const blogPost = await this.findById(id);
    return blogPost;
  }
}
