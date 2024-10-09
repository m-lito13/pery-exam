import { Request, Response, NextFunction } from 'express';
export const errorHandlerMiddleware = (err : Error, req : Request, res : Response, next : NextFunction) => {
    // Handle the error
    res.status(500).json({ error: `Failure on server ${err}`,code :500 });
};