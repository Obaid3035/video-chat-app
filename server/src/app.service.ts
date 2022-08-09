import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private room = [];

  roomExists(roomId: string) {
    const room = this.room.find((room) => room.id === roomId);
    if (room) {
      // Send response that room exist
      if (room.connectedUsers.length > 3) {
        // Send response that room exist but it's full
        return {
          roomExists: true,
          full: true,
        };
      } else {
        // Send response that room exist but it's not full
        return {
          roomExists: true,
          full: false,
        };
      }
    } else {
      // Send response that room exist does not exist
      return {
        roomExists: false,
        full: false,
      };
    }
  }
}
