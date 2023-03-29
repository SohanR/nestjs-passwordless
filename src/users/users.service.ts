import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'John',
      email: 'kenaa@example.com',
    },
    {
      id: 2,
      name: 'Jane',
      email: 'kenai@example.com',
    },
  ];

  findOneByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }
}
