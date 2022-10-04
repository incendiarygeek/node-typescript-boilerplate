import { Express, Handler, Request, Response } from 'express';

type RouteFactory = {
  dbConnection?: unknown;
  app: Express;
  path: string;
  method: 'get' | 'post' | 'put' | 'delete';
  req: Request;
  res: Response;
  handler: (req: Request, res: Response) => Handler;
};
