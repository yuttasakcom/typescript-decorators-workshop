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
