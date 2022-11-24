import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string[] {
    return this.appService.getHello();
  }

  some(): void {
    const test = this.test().test().test();
    console.log(test);
    const some = 'hello';
    console.log(some);
  }

  test(): AppController {
    return this;
  }
}
