import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
  @ApiProperty({ example: '1', description: 'Unique id' })
  readonly id: string;
}
