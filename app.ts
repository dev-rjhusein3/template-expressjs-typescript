import express, { NextFunction, Response, Request } from "express";
import * as path from 'path'
import * as cookieParser from 'cookie-parser';
import { default as allRoutes } from './src/routes/main'
import helmet from "helmet";

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/public/views'));
app.set('view engine', 'ejs');

// Use a bunch of middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser.default());
app.use(express.static(path.join(__dirname, 'src/public')));
app.use(helmet());
app.disable("x-powered-by");

/**
 * Routing
 */
allRoutes.forEach(route => {
    app.use(route.path, route.route)
})

/**
 * Error Handling
 */
app.use( (err: any, req: Request, res: Response, next: NextFunction) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.log(err.message)

    // render the error page
    res.status(err.status || 500);
    res.render('400/404');
});

export {app};
