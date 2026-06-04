import { Module } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { TareasController } from './tareas.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [TareasService, PrismaService],
  controllers: [TareasController]
})
export class TareasModule {}
