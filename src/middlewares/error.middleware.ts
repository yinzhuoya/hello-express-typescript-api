import HttpExceptions from '../exceptions/HttpException'
import { Request, Response, NextFunction } from 'express'
import { INTERNAL_SERVER_ERROR } from 'http-status-codes'

const errorMiddleware = (
  error: HttpExceptions,
  _request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = error.status || INTERNAL_SERVER_ERROR
  const message = error.message || 'Something went wrong'

  response.status(status).json({
    success: false,
    message,
  })

  next()
}
export default errorMiddleware
