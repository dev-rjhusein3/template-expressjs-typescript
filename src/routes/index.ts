import { NextFunction, Request, Response, Router } from "express";
import { noArgs } from './helpers/validate'
const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    if (!noArgs(req)){
        res.render('400/406')
    }else{
        res.statusCode = 200;
        res.render('200/index');
    }
});

export default router;
