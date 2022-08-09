import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

interface IRoomExists {
  roomExists: boolean;
  full: boolean;
}

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/room-exists/:roomId')
  roomExists(@Param() roomId: string): IRoomExists {
    return this.appService.roomExists(roomId);
  }
}
