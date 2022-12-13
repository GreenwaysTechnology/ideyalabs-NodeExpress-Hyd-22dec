require('dotenv').config();
const express = require('express')
const customerRouter = require('./routers/customer.router')
const bookRouter=require('./routers/book.router')
const bodyParser = require('body-parser')

const app = express()

//register global middlewares
app.use(bodyParser.json())

//use 
app.use('/api/customers',customerRouter)
app.use('/api/books',bookRouter)


const port = process.env.port || 3000
////////////////////

//global api
//index 
app.get('/', (req, res) => {
    res.status(200).json({ home: 'Home' })
})

//////
app.listen(port, () => {
    console.log('Express Server is Running')
})