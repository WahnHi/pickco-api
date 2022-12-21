const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
require('dotenv').config()
const app = express()

app.use(cors())

const connection = mysql.createConnection(process.env.DATABASE_URL)

app.get('/', (req, res) => {
    console.log('Pickco')
    res.send('Hello Pickco!')
})

app.get('/student', (req, res) => {
    connection.query(
        'select * from student',
        function(err, results, fields) {
            console.log(results)
            res.send(results)
        }
    )
})

app.get('/login', (req, res) => {
    connection.query(
        'select id , telephone from student ',
        function(err, results, fields) {
            console.log(results)
            res.send(results)
        }
    )
})

app.get('/courses', (req, res) => {
    connection.query(
        'select * from courses ',
        function(err, results, fields) {
            console.log(results)
            res.send(results)
        }
    )
})

app.listen(process.env.PORT || 3000)
    //connection.end()
