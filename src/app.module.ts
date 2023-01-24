import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { ServeStaticModule } from '@nestjs/serve-static'; //dx is installed though omo werey
import { join } from 'path';

@Module({
  imports: [
    ChatModule, 
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', '..', '..', 'dist', 'client'),
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
