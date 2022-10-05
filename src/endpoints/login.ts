import { Request, Response } from 'express';
import { endpoint } from '../types/endpoint.js';

const handler = async (req: Request, res: Response) => {
  res.send('/Login').status(200);
};

const login: endpoint = {
  path: '/login',
  method: 'get',
  handler: handler,
};
export default login;
