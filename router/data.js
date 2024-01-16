const mysql = require('mysql2')
const connection = mysql.createConnection({
  host:'winsql-delwinones-3258.a.aivencloud.com',
  user:'avnadmin',
  password:'AVNS_6KwJ_KjR53gdd8VEAcB',
  port:24196,
  database: 'tugas'
})

module.exports = connection