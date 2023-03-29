import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // required jwt token
  @Get('protected')
  getProtected(): string {
    //TODO jwt token
    return 'Protected';
  }
}
