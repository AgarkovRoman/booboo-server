import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/users.model';

interface ProjectCreationAttrs {
  name: string;
  description: string;
  userId: number;
}

@Table({ tableName: 'projects' })
export class Project extends Model<Project, ProjectCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Project 1', description: 'Project name' })
  @Column({ type: DataType.STRING, allowNull: true })
  name: string;

  @ApiProperty({ example: 'Project 1', description: 'Project description' })
  @Column({ type: DataType.STRING })
  description: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
