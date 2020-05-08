import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'

const app: Express = express()

app.get('/', (_req: Request, res: Response) => {
  res.send('hello world')
})

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
