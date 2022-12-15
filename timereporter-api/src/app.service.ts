import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';
@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getHello(): Promise<Post[] | null> {
    return this.prisma.post.findMany();
  }
}
