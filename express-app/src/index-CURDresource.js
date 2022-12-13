const express = require('express')

const app = express()
const port = process.env.port || 3000
////////////////////

//global api
//index 
app.get('/', (req, res) => {
    res.status(200).json({ home: 'Home' })
})


//REST API:
app.get('/api/customers',(req,res)=>{
    res.end('Customers-Get')
})
app.post('/api/customers/create',(req,res)=>{
    res.end('Customers-POST')
})
app.put('/api/customers/update',(req,res)=>{
    res.end('Customers-UPDATE')
})
app.delete('/api/customers/remove',(req,res)=>{
    res.end('Customers-Delete')
})
app.get('/api/users',(req,res)=>{
    res.end('users-Get')
})
app.post('/api/users/create',(req,res)=>{
    res.end('USERS-POST')
})
app.put('/api/users/update',(req,res)=>{
    res.end('USERS-UPDATE')
})
app.delete('/api/users/remove',(req,res)=>{
    res.end('USERS-Delete')
})

//////
app.listen(port, () => {
    console.log(app)
    console.log('Express Server is Running')
})