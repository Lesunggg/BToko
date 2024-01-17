const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const session = require('express-session')
const app = express()
const routerMiddleware = require('./router/middleware')
const routerCart = require('./router/cart')
const routerProduct = require('./router/product')
const routerUser = require('./router/user')

app.use(express.text())
app.use(express.json())

app.set("trust proxy", 1)
app.use(cors({
  origin: "https://toko-trio.netlify.app",
  methods: ["POST", "PUT", "GET", "DELETE", "OPTIONS", "HEAD"],
  credentials: true,
}))

app.use(session({
  secret:'win',
  resave:false,
  saveUninitialized:true,
  cookie:{
    maxAge: 1000*60*60*12,
    domain: 'toko-trio.netlify.app',
    secure: true,
    sameSite:"none",
    httpOnly:true}
}))

app.use(routerUser)
app.use(routerProduct)
app.use(routerMiddleware)
app.use(routerCart)


app.listen(process.env.PORT || 3000, ()=>{
  console.log(`SERVER SUDAH BERJALAN DI PORT ${process.env.PORT || 3000}`)
})
