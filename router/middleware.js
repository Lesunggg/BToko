const express = require('express')
const router = express.Router()
const connection = require('./data')

router.use((req,res,next)=>{   
  if (req.session.user) {
    const q = `SELECT * FROM user WHERE id=${req.session.user.id}`;
    connection.query(q, (err, result)=>{
      if (err) {
        res.status(500).send('Server Problem')
        return;
      }
      if (result.length === 0) {
        res.status(404).send('Account not found, Please login first')
      }
      const cekUser = result[0].nama
      const cekPass = result[0].password
      if (cekUser == req.session.user.nama && cekPass == req.session.user.password) {
        next()
      }else{
        res.send('Profile Not Found')
      }
    })
  } 
  else {
    res.send('Account not found, Please login first');
  }
})

module.exports = router