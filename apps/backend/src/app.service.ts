import {Injectable} from '@nestjs/common';
import {UserDto} from '@tnq/types/users/user.dto.js';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
