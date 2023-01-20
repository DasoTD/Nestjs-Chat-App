import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { ChatEvent } from './events.gateway';

@Module({
  providers: [ChatGateway, ChatService, ChatEvent]
})
export class ChatModule {}
