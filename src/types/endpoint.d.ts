import { Handler } from 'express';

type endpoint = {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete';
  handler: Handler;
};
