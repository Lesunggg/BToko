const mysql = require('mysql2')
const connection = mysql.createConnection({
  host:process.env.HOST,
  user:process.env.USER,
  password:process.env.PASS,
  port:24196,
  database: 'tugas'
})

module.exports = connection
