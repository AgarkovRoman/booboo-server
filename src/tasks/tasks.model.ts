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
import { Project } from '../projects/projects.model';

interface TaskCreationAttrs {
  name: string;
  description?: string;
  userId: number;
  projectId: number;
}

@Table({ tableName: 'tasks' })
export class Task extends Model<Task, TaskCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ description: 'Archive task or not' })
  @Column({ type: DataType.BOOLEAN, allowNull: true, defaultValue: false })
  archived: boolean;

  @ApiProperty({ example: '04/03/2021', description: 'Task todo date' })
  @Column({ type: DataType.STRING })
  date: string;

  @ApiProperty({ example: 'Task 1', description: 'Task name' })
  @Column({ type: DataType.STRING, allowNull: true })
  name: string;

  @ApiProperty({ example: 'To do task 1', description: 'Task description' })
  @Column({ type: DataType.STRING })
  description?: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ForeignKey(() => Project)
  @Column({ type: DataType.INTEGER })
  projectId: number;

  @BelongsTo(() => User)
  author: User;

  @BelongsTo(() => Project)
  project: Project;
}
