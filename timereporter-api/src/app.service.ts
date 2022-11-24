import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class AppService {
  async getHello(): Promise<string[]> {
    main()
      .then(async () => {
        await prisma.$disconnect();
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
      });
    return ['test', 'test2'];
  }
}

async function main() {
  const quotes = await prisma.quote.findMany();
  console.log(quotes);
  // ... you will write your Prisma Client queries here
}
