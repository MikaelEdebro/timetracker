import { Body, Controller, Get, Post } from '@nestjs/common';
import { Post as PostModel } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('posts')
export class PostsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getAllPosts() {
    await wait(500);
    return await this.prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  @Post()
  createPost(@Body() post: PostModel) {
    return this.prisma.post.create({
      data: post,
    });
  }
}

function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
