const express = require('express')
// console.log(express)
//create app object and assign into app variable
const app = express()
const port = 3000
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