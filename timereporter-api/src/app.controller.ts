import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  test() {
    const hello = 'testone says hello';
    const test = true;
    if (test) {
      console.log('helloo');
    }
    console.log(hello);
  }
}
