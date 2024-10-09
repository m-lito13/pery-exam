import { Request } from 'express';
export interface RequestValidatorIfs {
    validateArticlesRequest(req : Request) : void;
    validateUserTokenRequest(req : Request) : void;
}