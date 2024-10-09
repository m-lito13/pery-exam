import { Request } from "express";
import { RequestValidatorIfs } from "./requestvalidatorIfs";
import { BadRequest } from "@tsed/exceptions";

const USERNAME_FILED = 'userName';
const LANGUAGE_FIELD = 'language';

export class RequestValidator implements RequestValidatorIfs {
    validateUserTokenRequest(req: Request): void {
        let isValid = ((USERNAME_FILED in req.body) && (LANGUAGE_FIELD in req.body) && (Object.keys(req.body).length === 2));
        if (!isValid) {
            throw new BadRequest('Invalid request body for generate token');
        }
    }

    validateArticlesRequest(req: Request): void {
        let articleName = req.params.articleName;
        let regexp = new RegExp("([a-z0-9A-Z_-])$");
        if (!regexp.test(articleName)) {
            throw new BadRequest('Valid chars in article name are letters , digits , _ and -');
        }
    }

}