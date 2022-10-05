import { Request, Response } from 'express';
import { endpoint } from '../types/endpoint.js';

const handler = async (req: Request, res: Response) => {
  res.send('/Register').status(200);
};
const register: endpoint = {
  path: '/register',
  method: 'get',
  handler: handler,
};
export default register;
