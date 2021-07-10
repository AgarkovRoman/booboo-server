import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'Buy', description: 'Task name' })
  @IsString({ message: 'Must be a string' })
  readonly name: string;

  @ApiProperty({
    example: 'Working task',
    description: 'Task description',
  })
  @IsString({ message: 'Must be a string' })
  readonly description?: string;

  @ApiProperty({ example: '1' })
  @IsNumber({}, { message: 'Must be a number' })
  readonly userId: number;

  @ApiProperty({ example: '3' })
  @IsNumber({}, { message: 'Must be a number' })
  readonly projectId: number;
}
