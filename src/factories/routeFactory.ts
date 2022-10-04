/* Library Imports */
// import { Express, Handler, Request, Response } from 'express'
import { RouteFactory } from '../types/RouteFactory.js';



const routeFactory = (
  {
    dbConnection,
    app,
    path,
    method,
    req,
    res,
    handler
  }: RouteFactory ) =>
{
  console.log( dbConnection )
  app[ method ]( path, handler( req, res ) )

}


export default routeFactory
