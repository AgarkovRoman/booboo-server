import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'email@mail.com', description: 'User email' })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;
  @ApiProperty({ example: '12345', description: 'User password' })
  @IsString({ message: 'Must be a string' })
  @Length(6, 24, { message: 'Password length from 6 to 24' })
  readonly password: string;
  @ApiProperty({ example: 'John', description: 'User name' })
  @IsString({ message: 'Must be a string' })
  readonly name?: string;
}
