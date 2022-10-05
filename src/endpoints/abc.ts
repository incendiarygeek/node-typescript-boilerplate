import { Request, Response } from 'express';
import { endpoint } from '../types/endpoint.js';

const handler = async (req: Request, res: Response) => {
  res.send('/abc').status(200);
};

const abc: endpoint = {
  path: '/abc',
  method: 'get',
  handler: handler,
};
export default abc;
