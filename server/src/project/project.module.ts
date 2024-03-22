import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from 'src/project/entities/project.entity';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  imports: [
    TypeOrmModule.forFeature([Project])
  ]
})
export class ProjectModule {}
