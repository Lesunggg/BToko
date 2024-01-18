const express = require('express')
const router = express.Router()
const connection = require('./data')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

router.use((req,res,next)=>{   
  token = req.headers.authorization
  if (token == "") {
    res.status(404).send('Account not found, Please login first')
    return
  }
  jwt.verify(token, "winnnnn", (err,decoded)=>{
    if (err) {
      res.status(401).send('Not Found')
      return;
    }
    const payload = decoded
    const nama = payload.name
    const pass = payload.pass
    const q = `SELECT * FROM user WHERE id=${payload.id}`
    connection.query(q, (err, result)=>{
      if (err) {
        res.status(500).send('Server Problem')
        return
      }
      if (result.length === 0) {
        res.status(404).send('Account not found, Please login first')
        return
      }
      bcrypt.compare(pass, result[0].password, (err, hasil) => {
        if (err) {
          res.status(500).send('Server Problem')
          return
        }
        if (hasil && nama == result[0].nama) {
          res.locals.data = payload
          next()
        }else{
          res.send('Profile Not Found')
        }
      })
    })
  })
})

module.exports = router
