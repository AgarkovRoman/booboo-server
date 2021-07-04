import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetUserDto {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @IsString({ message: 'Must be a string' })
  readonly id: string;
}
