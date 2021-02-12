import { io } from '..';

export function SocketIO(chanel: string) {
  return function (target: any) {
    const socketIO = new target();

    io.on('connect', (socket) => {
      console.log(`socketId: ${socket.id}`);

      socket.on(chanel, (msg1: string, msg2: object, msg3: number[]) => {
        console.log(msg1, msg2, msg3);
      });
    });

    console.log(`hello message: ${socketIO.hello()}`);
  };
}
