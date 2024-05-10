import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import {Teacher} from './teacher.model';
import {TeacherService} from './teacher.service';


@Controller('teacher')
export class TeacherController {
    constructor(private readonly professorService:TeacherService) {}
    
    @Get()
    readAllProf(): Promise<any>{
    return this.professorService.readAllProf();
    
    }

    @Post()
    async createTeacher(@Body() professor: Teacher): Promise<any>{
    var resposta = await this.professorService.createTeacher(professor);
    return {id: resposta};
    }

    @Put(':id')
    async updateTeacher(@Param('id') id: string, @Body() teacher: Teacher): Promise<void> {
        await this.professorService.updateTeacher(id, teacher);
    }

    @Delete(':id')
    async deleteTeacher(@Param('id') id: string): Promise<void> {
        await this.professorService.deleteTeacher(id);
    }
}