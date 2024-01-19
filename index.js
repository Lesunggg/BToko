const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const app = express()
const PORT = 3000
const routerMiddleware = require('./router/middleware')
const routerCart = require('./router/cart')
const routerProduct = require('./router/product')
const routerUser = require('./router/user')

app.use(express.text())
app.use(express.json())
app.use(cors({
  origin: "https://toko-trio.netlify.app",
  methods: ["POST", "PUT", "GET", "DELETE", "OPTIONS", "HEAD"],
  credentials: true,
}))

app.use(routerUser)
app.use(routerProduct)
app.use(routerMiddleware)
app.use(routerCart)

app.listen(PORT, ()=>{
  console.log(`SERVER SUDAH BERJALAN DI PORT ${PORT}`)
})
