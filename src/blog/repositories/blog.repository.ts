import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/database/services/prisma.service';
import { BlogPost, Comment } from '@prisma/client';

@Injectable()
export class BlogRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<BlogPost[]> {
    return this.prisma.blogPost.findMany({
      include: {
        _count: {
          select: { comments: true },
        },
      },
    });
  }

  async findById(id: string): Promise<BlogPost | null> {
    return this.prisma.blogPost.findUnique({
      where: { id },
      include: { comments: true },
    });
  }

  async create(data: { title: string; content: string }): Promise<BlogPost> {
    return this.prisma.blogPost.create({
      data,
    });
  }

  async createComment(blogPostId: string, content: string): Promise<Comment> {
    return this.prisma.comment.create({
      data: {
        content,
        blogPostId,
      },
    });
  }
}
