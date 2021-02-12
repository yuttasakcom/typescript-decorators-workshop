# TypeScript Decorators Workshop

## Table of Contents

- [Class Decorator](#Class-Decorator)

## Class Decorator

```javascript
//-------------SocketIO Decorator------------------
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

//---------------Logger Decorator----------------

export function Logger(constructor: Function) {
  console.log(`Logging...`);
  console.log(constructor);
}

//---------------DemoController----------------

import { Controller, Get } from 'routing-controllers';

import { Logger } from '../decorators/logger.decorator';
import { SocketIO } from '../decorators/socketio.decorator';

@Controller('/demo')
@SocketIO('message')
@Logger
class DemoController {
  @Get()
  hello(): string {
    return 'hello';
  }
}

export default DemoController;
```
