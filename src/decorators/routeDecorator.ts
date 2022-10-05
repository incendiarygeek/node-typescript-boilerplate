import endpoints from '../endpoints/index.js';
import { Express } from 'express';
import routeFactory from '../factories/routeFactory.js';
export default function (app: Express) {
  endpoints.forEach((el) => {
    routeFactory({
      dbConnection: '',
      app: app,
      handler: el.handler,
      method: el.method,
      path: el.path,
    });
  });
}
