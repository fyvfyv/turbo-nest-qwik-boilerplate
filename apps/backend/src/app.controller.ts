import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service.js';
import {UserDto} from '@tnq/types/users/user.dto.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user')
  getUser(): UserDto {
    return this.appService.getUser();
  }
}
