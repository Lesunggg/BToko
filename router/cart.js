const express = require('express')
const router = express.Router()
const connection = require('./data')
const middleware = require('./middleware')

router.post('/cart/add',middleware,(req,res)=>{
  const datas = res.locals.data
  const user = datas.id
  const kodeBrg = req.body.kode
  const qty = req.body.qty
  const qcek = `SELECT * FROM cart WHERE kode_user=${user} AND kode_brg=${kodeBrg}`
  connection.query(qcek,(err,result)=>{
    let q = ''
    if (err) {
      res.status(500).send('Server Problem')
      return
    }
    if (result.length) {
      q = `UPDATE cart
      SET qty = ${qty+result[0].qty}
      WHERE kode_user = ${user} and kode_brg = ${kodeBrg};`
    }
    else{
      q = `INSERT INTO cart ("kode_user","kode_brg","qty") VALUES (${user},${kodeBrg},${qty})`
    }
    connection.query(q,(err,result)=>{
      if (err){
        res.status(500).send('Server Problem')
        return
        }
      res.send("Barang sudah ditambahkan")
    })
  })
})
  
router.post('/cart/update',middleware,(req,res)=>{
  const user = req.body.user
  const qty = req.body.qty
  const brg = req.body.brg
  const q = `UPDATE cart
  SET qty = ${qty}
  WHERE kode_user = ${user} and kode_brg = ${brg};`
  connection.query(q, (err,result)=>{
    if(err) {
      res.status(500).send('Update Cart Server Error')
      return
    }
    res.send('QTY Updated')
  })
})
  
router.delete('/cart/delete/:id',middleware,(req,res)=>{
  const kode = req.params.id
  const q = `DELETE FROM cart WHERE cartid=${kode}`
  connection.query(q,(err,result)=>{
    if(err) {
      res.status(500).send('Delete Cart Server Error')
      return
    }
    res.send('Item Deleted')
  })
})
  
router.get('/cart',middleware,(req,res)=>{
  const datas = res.locals.data
  const q = `
  SELECT cart.cartid, cart.kode_user, cart.kode_brg, produk.nama, cart.qty, produk.harga
  FROM cart
  LEFT JOIN produk ON cart.kode_brg = produk.kode
  WHERE kode_user=${datas.id}
  ORDER BY cart.cartid;
  `
  connection.query(q,(err,result)=>{
    if(err) {
      res.status(500).send('server Problem')
      return
    }
    let total = 0
    for (let item of result) {
      total+=(item.harga*item.qty)
    }
    const data = [datas,result,total]
    res.send(data)
  })
})

module.exports = router
