import { NextFunction, Request, Response, Router } from "express";
import { HostAllowed } from "../helpers/validate";
const router = Router();

router.all('*', (req: Request, res: Response, next: NextFunction) => {

    if (!HostAllowed(req)) {res.statusCode = 406; res.render('400/406')};

    res.statusCode = 404;
    res.render('400/404');
});

export default router;
