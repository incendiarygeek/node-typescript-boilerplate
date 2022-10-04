/* library imports */
import express, { Express } from 'express';
// import httpErrors from 'http-errors';
import path from 'path';
import cookieparser from 'cookie-parser';
import http from 'http';
import { toNamespacedPath } from 'path/posix';



export interface envInterface {
  port: number;
  build: 'dev' | 'release' | ''

}
export default class serverFactory
{
  on ( arg0: string, arg1: () => void )
  {
    throw new Error( 'Method not implemented.' );
  }
  listen ( arg0: number, arg1: string )
  {
    throw new Error( 'Method not implemented.' );
  }
  constructor ( {app}: {app:Express} )
  {
    // console.log( `port: ${port}; build: ${build}` );
    app.use(express.json());
    app.use(cookieparser());
    app.use(express.urlencoded({ extended: false }));
    app.use( express.static( path.join( toNamespacedPath( 'public' ), 'public' ) ) );


    /*  insert routes  */
    app.get( '/', ( req, res ) =>
    {
      console.log( req )
      res.send('root directory')
    } )
    app.use(function (
      err: { message: string; status: string },
      req: { app: { get: (arg0: string) => string } },
      res:
      {
        locals: { message: string; error: { message?: string; status?: string } };
        status: (arg0: any) => void;
        render: (arg0: string) => void;
      },
    ) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    } );
    // this.app.use( function ( req: Request, res: Response, next )
    // {
    //   res.locals.message = 'Request:' + req.body + 'Response: error 404';
    //   next(httpErrors(404));
    // });
    const server = http.createServer(app);
    // server.listen(3000, '127.0.0.1');
    // server.on('listening', () => {
    //   console.log('listening on port 3000');
    // } );
    return server as http.Server
  }

}
// const app = new serverFactory( { port: 3000, build: 'dev' } );
// const server = http.createServer(app as unknown as Express);
// server.listen(3000, '127.0.0.1');
// server.on('listening', () => {
//   console.log('listening on port 3000');
// });
