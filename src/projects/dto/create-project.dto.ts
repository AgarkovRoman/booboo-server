import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ example: 'Work', description: 'Project name' })
  @IsString({ message: 'Must be a string' })
  readonly name: string;

  @ApiProperty({
    example: 'Project for working tasks',
    description: 'Project description',
  })
  @IsString({ message: 'Must be a string' })
  readonly description?: string;

  @ApiProperty({ example: '1' })
  @IsNumber({}, { message: 'Must be a number' })
  readonly userId: number;
}
