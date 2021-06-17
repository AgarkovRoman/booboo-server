import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'email@mail.com', description: 'User email' })
  readonly email: string;
  @ApiProperty({ example: '12345', description: 'User password' })
  readonly password: string;
  @ApiProperty({ example: 'John', description: 'User name' })
  readonly name?: string;
}
