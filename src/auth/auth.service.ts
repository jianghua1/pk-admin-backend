import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}
  signin(username: string, password: string) {
    return this.userRepository.find(username);
  }

  signup(username: string, password: string): string {
    return '这是注册接口' + username + password;
  }
}
