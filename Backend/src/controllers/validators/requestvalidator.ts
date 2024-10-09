import { Request } from "express";
import { RequestValidatorIfs } from "./requestvalidatorIfs";
import {BadRequest} from "@tsed/exceptions";


export class RequestValidator implements RequestValidatorIfs {           
    validateArticlesRequest(req: Request): void {
        let articleName = req.params.articleName;
        let regexp = new RegExp("([a-z0-9A-Z_-])$");
        if (!regexp.test(articleName)) { 
            throw new BadRequest('Valid chars in article name are letters , digits , _ and -');
        }
    } 

}