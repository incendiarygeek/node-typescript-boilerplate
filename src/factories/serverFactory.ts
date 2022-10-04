/* library imports */
import express, { Express } from 'express';
import path from 'path';
import cookieparser from 'cookie-parser';
import http from 'http';
import { toNamespacedPath } from 'path/posix';



export interface envInterface {
  port: number;
  build: 'dev' | 'release' | ''

}
export default class serverFactory extends http.Server
{

  constructor ( {app}: {app:Express} )
  {
    super()
    app.use(express.json());
    app.use(cookieparser());
    app.use(express.urlencoded({ extended: false }));
    app.use( express.static( path.join( toNamespacedPath( 'public' ), 'public' ) ) );


    /*  insert routes  */
    app.get( '/', ( req, res ) =>
    {
      // console.log( req )
      res.send('root directory')
    } )
    app.use(function (
      err: { message: string; status: string },
      req: { app: { get: (arg0: string) => string } },
      res:
      {
        locals: { message: string; error: { message?: string; status?: string } };
        status: (arg0: unknown) => void;
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
    const server = http.createServer(app);
    return server as http.Server
  }

}
