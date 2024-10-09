import { Request } from 'express';
export interface RequestValidatorIfs {
    validateArticlesRequest(req : Request) : void;
}