import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StundetModule } from './stundet/stundet.module';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [StundetModule, TeacherModule, MongooseModule.forRoot('mongodb+srv://devpressao:devpressao123@cluster1.eixyr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
