import { Request, Response, NextFunction } from 'express'

export const postRegister = (
  req: Request,
  _res: Response,
  _next: NextFunction
) => {
  console.log(req.body)
}
