import { Request, Response, NextFunction} from 'express';


export const errorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    // Handle the error
    let statusCode = (res.statusCode && res.statusCode != 500) ? res.statusCode : 500;
    let message = (err.message !== '') ? err.message : 'Server Error'
    res.status(statusCode).json({ error: message, code: statusCode });
};