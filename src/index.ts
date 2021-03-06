import express, { Express, Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'
import { NOT_FOUND } from 'http-status-codes'
import HttpExceptions from './exceptions/HttpException'
import errorMiddleware from './middlewares/error.middleware'
import * as userController from './controllers/user'
// import bodyParser from 'body-parser'

const app: Express = express()

// app.use(bodyParser.json())
app.use(express.json())

app.get('/', (_req: Request, res: Response) => {
  res.send('hello world')
})

app.post('/users/register', userController.postRegister)

app.use((_req: Request, _res: Response, next: NextFunction) => {
  const error: HttpExceptions = new HttpExceptions(
    NOT_FOUND,
    'Router Not Found'
  )
  next(error)
})

app.use(errorMiddleware)

const port: any = process.env.PORT || 6060

const main = async () => {
  await mongoose.connect('mongodb://localhost:27017/tsexpress', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  app.listen(port, () => {
    console.log(`Running on http://localhost:${6060}`)
  })
}

main()
