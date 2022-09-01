import {Request} from "express";

function noArgs(req: Request){
    return Object.keys(req.query).length <= 0;
}

export {noArgs}