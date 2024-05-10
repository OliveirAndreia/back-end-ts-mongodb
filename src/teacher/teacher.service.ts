import { Injectable, NotFoundException } from '@nestjs/common';
import { Teacher } from './teacher.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class TeacherService {
    constructor(@InjectModel('Teacher') private readonly teacherModel: Model<Teacher>) { }

    async createTeacher(teacher: Teacher) {
        const teacherModel = new this.teacherModel(
            {
                nome: teacher.nome,
                nRegistro: teacher.nRegistro,
                modulo: teacher.modulo
            }
        )
        const result = await teacherModel.save()
        return result.id as string;
    }

    async readAllProf() {
        const teacher = await this.teacherModel.find().exec()
        return teacher.map( teacher => ({
            id: teacher.id,
            nome: teacher.nome,
            nRegistro: teacher.nRegistro,
            modulo: teacher.modulo
        }) );
    }
    async updateTeacher(id: string, teacher: Teacher): Promise<void> {
        const updatedTeacher = await this.findTeacherById(id);
        if (!updatedTeacher) {
            throw new NotFoundException('Teacher not found');
        }
        Object.assign(updatedTeacher, teacher);
        await updatedTeacher.save();
    }

    async deleteTeacher(id: string): Promise<void> {
        const result = await this.teacherModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException('Teacher not found');
        }
    }
    

    private async findTeacherById(id: string): Promise<Teacher> {
        let teacher;
        try {
            teacher = await this.teacherModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Teacher not found');
        }
        if (!teacher) {
            throw new NotFoundException('Teacher not found');
        }
        return teacher;
    }
}