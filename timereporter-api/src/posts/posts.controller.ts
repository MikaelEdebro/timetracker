import { Body, Controller, Get, Post } from '@nestjs/common';
import { Post as PostDto } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('posts')
export class PostsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getAllPosts() {
    await wait(1000);
    return this.prisma.post.findMany();
  }

  @Post()
  createPost(@Body() post: PostDto) {
    return this.prisma.post.create({
      data: post,
    });
  }
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
