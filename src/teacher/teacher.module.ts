import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';
import { ProfessorSchema } from './teacher.model'; // Certifique-se de importar o esquema correto

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Teacher', schema: ProfessorSchema }])
  ],
  controllers: [TeacherController],
  providers: [TeacherService]
})
export class TeacherModule {}
