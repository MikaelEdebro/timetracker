import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [PrismaService],
})
export class AppModule {}
