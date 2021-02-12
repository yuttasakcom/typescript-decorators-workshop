import 'reflect-metadata';
import Koa from 'koa';
import { RoutingControllersOptions, useKoaServer } from 'routing-controllers';

const app = new Koa();

const routingControllersOptions: RoutingControllersOptions = {
  defaultErrorHandler: false,
  controllers: [`${__dirname}/**/*.controller.ts`],
};

useKoaServer(app, routingControllersOptions);

app.listen(3000);
