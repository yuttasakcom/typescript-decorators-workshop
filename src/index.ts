import 'reflect-metadata';
import * as http from 'http';
import { Server as socketIO } from 'socket.io';
import Koa from 'koa';
import { RoutingControllersOptions, useKoaServer } from 'routing-controllers';

const app = new Koa();
const server = http.createServer(app.callback());
export const io = new socketIO(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

const routingControllersOptions: RoutingControllersOptions = {
  defaultErrorHandler: false,
  controllers: [`${__dirname}/**/*.controller.ts`],
};

useKoaServer(app, routingControllersOptions);

server.listen(3000);
