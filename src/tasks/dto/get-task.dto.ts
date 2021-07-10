import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class GetTaskDto {
  @ApiProperty({ example: '3' })
  @IsNumber({}, { message: 'Must be a number' })
  readonly projectId: number;
}
