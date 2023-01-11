import express from 'express'
import mongoose from 'mongoose'
import { registerValidation } from './validations/auth.js'
import checkAuth from './utils/checkAuth.js'

import * as UserControler from './controllers/UserControler.js'

mongoose
  .connect(
    'mongodb+srv://admin:wwwwww@cluster0.opvl2gi.mongodb.net/blog?retryWrites=true&w=majority'
  )
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err))

const app = express()
app.use(express.json())

app.post('/auth/login', UserControler.login)
app.post('/auth/register', registerValidation, UserControler.register)
app.get('/auth/me', checkAuth, UserControler.getMe)

app.listen(4444, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('Server OK')
})
