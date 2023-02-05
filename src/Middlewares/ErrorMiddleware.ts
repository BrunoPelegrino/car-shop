import { NextFunction, Request, Response } from 'express';
import GenerateErrorMiddleware from './GenerateErrorMiddleware';

class ErrorHandler {
  static handleError(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { status, message } = error as GenerateErrorMiddleware;
    res.status(status).json({ message });
    next();
  }
}
  
export default ErrorHandler;