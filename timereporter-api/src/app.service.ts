import { Injectable } from '@nestjs/common';
import { quote } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';
@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getHello(): Promise<quote[] | null> {
    return this.prisma.quote.findMany();
  }
}
