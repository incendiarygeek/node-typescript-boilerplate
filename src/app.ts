// /* imports */
// import http from 'http';
// // import serverFactory from './factories/serverFactory.js'


// // const app = new serverFactory({env:{port: 3000,  env: dev}, 'paths'})
// /* app declaration */
// // const __dirname = path.dirname();
// // const app = express();
// // const logger = morgan;
// // app.use(logger('dev'));
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));
// // app.use(cookieparser());
// // app.use(express.static(path.join(toNamespacedPath('public'), 'public')));

// // // app.get('/', (req, res) => {
// // //   res.status(200).send('hello world');
// // // });
// // app.use( function ( req: Request, res: Response, next )
// // {
// //   res.locals.message = 'Request:' + req.body + 'Response: error 404';
// //   next(httpErrors(404));
// // });

// // // error handler
// // app.use(function (
// //   err: { message: string; status: string },
// //   req: { app: { get: (arg0: string) => string } },
// //   res: {
// //     locals: { message: string; error: { message?: string; status?: string } };
// //     status: (arg0: any) => void;
// //     render: (arg0: string) => void;
// //   },
// // ) {
// //   // set locals, only providing error in development
// //   res.locals.message = err.message;
// //   res.locals.error = req.app.get('env') === 'development' ? err : {};

// //   // render the error page
// //   // res.status(err.status || 500);
// //   //res.render('error');
// // });

// const server = http.createServer(app);
// server.listen(3000, '127.0.0.1');
// server.on('listening', () => {
//   console.log('listening on port 3000');
// });


// // export default app;
/* library imports */
import express from 'express';
// import httpErrors from 'http-errors';
import serverFactory from './factories/serverFactory.js'



// export interface envInterface {
//   port: number;
//   build: 'dev' | 'release' | ''

// }
// export class serverFactory
// {
//   private app:Express = express();
//   constructor ( { port, build }:envInterface )
//   {
//     console.log( `port: ${port}; build: ${build}` );
//     this.app.use(express.json());
//     this.app.use(cookieparser());
//     this.app.use(express.urlencoded({ extended: false }));
//     this.app.use( express.static( path.join( toNamespacedPath( 'public' ), 'public' ) ) );


//     /*  insert routes  */
//     this.app.get( '/', ( req, res ) =>
//     {
//       console.log( 'running' )
//       res.status(200).send('root directory')
//     } )
//     this.app.use(function (
//       err: { message: string; status: string },
//       req: { app: { get: (arg0: string) => string } },
//       res:
//       {
//         locals: { message: string; error: { message?: string; status?: string } };
//         status: (arg0: any) => void;
//         render: (arg0: string) => void;
//       },
//     ) {
//       // set locals, only providing error in development
//       res.locals.message = err.message;
//       res.locals.error = req.app.get('env') === 'development' ? err : {};

//       // render the error page
//       res.status(err.status || 500);
//       res.render('error');
//     } );
//     // this.app.use( function ( req: Request, res: Response, next )
//     // {
//     //   res.locals.message = 'Request:' + req.body + 'Response: error 404';
//     //   next(httpErrors(404));
//     // });
//   }

// }
// const app = new serverFactory( { port: 3000, build: 'dev' } );
// const server = http.createServer(app as unknown as Express);
// server.listen(3000, '127.0.0.1');
// server.on('listening', () => {
//   console.log('listening on port 3000');
// });

const app =express()

// export class serverFactory
// {
//   constructor ( {app}: {app:Express} )
//   {
//     // console.log( `port: ${port}; build: ${build}` );
//     app.use(express.json());
//     app.use(cookieparser());
//     app.use(express.urlencoded({ extended: false }));
//     app.use( express.static( path.join( toNamespacedPath( 'public' ), 'public' ) ) );


//     /*  insert routes  */
//     app.get( '/', ( req, res ) =>
//     {
//       console.log( req )
//       res.send('root directory')
//     } )
//     app.use(function (
//       err: { message: string; status: string },
//       req: { app: { get: (arg0: string) => string } },
//       res:
//       {
//         locals: { message: string; error: { message?: string; status?: string } };
//         status: (arg0: any) => void;
//         render: (arg0: string) => void;
//       },
//     ) {
//       // set locals, only providing error in development
//       res.locals.message = err.message;
//       res.locals.error = req.app.get('env') === 'development' ? err : {};

//       // render the error page
//       res.status(err.status || 500);
//       res.render('error');
//     } );
//     // this.app.use( function ( req: Request, res: Response, next )
//     // {
//     //   res.locals.message = 'Request:' + req.body + 'Response: error 404';
//     //   next(httpErrors(404));
//     // });
//     return app
//   }

// }
const server = new serverFactory( { app: app } );
server.listen(3000, '127.0.0.1');
server.on('listening', () => {
  console.log('listening on port 3000');
});
