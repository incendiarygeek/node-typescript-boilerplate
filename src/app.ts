// /* imports */
import express from 'express';
import serverFactory from './factories/serverFactory.js'


const app =express()

const server = new serverFactory( { app: app } );
server.listen(3000, '127.0.0.1');
server.on('listening', () => {
  console.log('listening on port 3000');
});
