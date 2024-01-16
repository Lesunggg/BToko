const express = require('express')
const router = express.Router()
const connection = require('./data')

router.get('/',(req,res)=>{
  res.send('Welcome')
})
router.get('/product',(req,res)=>{
  const q = 'SELECT * FROM produk'
  connection.query(q,(err,results)=>{
    res.json(results)
  })
})
router.get('/product/:id',(req,res)=>{
  const q = `SELECT * FROM produk WHERE kode=${req.params.id}`
  connection.query(q,(err,results)=>{
    res.json(results)
  })
})
router.get('/product/filter/:jenis',(req,res)=>{
  const q = `SELECT * FROM produk WHERE jenis='${req.params.jenis}'`
  connection.query(q,(err,results)=>{
    res.json(results)
  })
})

module.exports = router