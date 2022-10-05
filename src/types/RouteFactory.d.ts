import { Express, Handler } from 'express';

type RouteFactory = {
  dbConnection?: unknown;
  app: Express;
  path: string;
  method: 'get' | 'post' | 'put' | 'delete';
  handler: Handler;
};
