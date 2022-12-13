const express = require('express')

const app = express()
const port = process.env.port || 3000
////////////////////

//global api
//index 
app.get('/', (req, res) => {
    res.status(200).json({ home: 'Home' })
})


//////
app.listen(port, () => {
    console.log(app)
    console.log('Express Server is Running')
})