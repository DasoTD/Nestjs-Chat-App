import { MessageBody, SubscribeMessage } from "@nestjs/websockets";

export class ChatEvent {
@SubscribeMessage('events')
handleEvent(@MessageBody() data: string): string{
    return data;
}

}