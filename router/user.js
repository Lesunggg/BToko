const express = require('express')
const router = express.Router()
const connection = require('./data')
const bcrypt = require('bcrypt')
const middleware = require('./middleware')
const jwt = require('jsonwebtoken')
router.get('/cek',middleware,(req,res)=>{
  res.send('Success')
})

router.post('/register',(req,res) => {
  const user = req.body
  if (!user.nama || !user.pass){
    res.status(400).send('Wajib menyertakan nama & pass')
    return
  }
  const qcek = `SELECT * FROM user WHERE nama = '${user.nama}'`
  connection.query(qcek, (err,result)=>{
    if (err){
      console.error(err)
      res.status(500).send("ada masalah dengan server")
      return;                
    }

    if (result.length != 0){
      res.status(401).send('Name is registered')
      return;
    }

    bcrypt.hash(user.pass, 10, (err,result) => {
      if (err) {
        res.status(500).send("ada masalah dengan server")
        return;
      }
      const qtmbh = `INSERT INTO user (nama, password) VALUES ('${user.nama}', '${result}')`
      connection.query(qtmbh,(err,result) => {
        if (err){
          res.status(500).send('Ada masalah dengan hubungan ke server')
          return
        }
      res.status(201).send('Yeay, Registrasi User Berhasil')
      })
    })
  })
})

router.get('/login',(req,res)=>{
  const auth = req.headers.authorization || ''
  const hasilSplit = auth.split(',')
  const loginname = hasilSplit[0]
  const password = hasilSplit[1]
  
  const q = `SELECT * FROM user WHERE nama='${loginname}'`;
  connection.query(q, (err, result)=>{
    if (err) {
      res.status(500).send('Server Problem')
      return;
    }
    if (result.length === 0) {
      res.status(404).send('Not Found')
    }
    else {
      bcrypt.compare(password, result[0].password, (err, hasil) => {
        if (err) {
          res.status(500).send('Login Server Problem')
          return;
        }
        if (hasil) {
          const payload = {
            id: result[0].id,
            name: loginname,
            pass: password
          }
          jwt.sign(payload, "winnnnn", (err,token)=>{
            const data = {
              "token" : token,
              "note" : "Login Successful"
            } 
            res.send(data)
          })
        } else {
          res.status(404).send('Not Found')
        }
      })
    }
  })
})

router.delete('/logout',middleware,(req,res)=>{
  res.send('Logout Success')
})

module.exports = router
