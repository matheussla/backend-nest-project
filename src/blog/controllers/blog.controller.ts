import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { BlogService } from '../services';
import { CreateBlogPostDto, CreateCommentDto } from '../dtos';
import { BlogPost } from '@prisma/client';

@Controller('posts')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async findAll(): Promise<BlogPost[]> {
    return this.blogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<BlogPost> {
    return this.blogService.getBlogPostById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createBlogPostDto: CreateBlogPostDto,
  ): Promise<BlogPost> {
    return this.blogService.create(createBlogPostDto);
  }

  @Post(':id/comments')
  @HttpCode(HttpStatus.CREATED)
  async createComment(
    @Param('id') id: string,
    @Body() createCommentDto: CreateCommentDto,
  ): Promise<BlogPost> {
    return this.blogService.createComment(id, createCommentDto);
  }
}
