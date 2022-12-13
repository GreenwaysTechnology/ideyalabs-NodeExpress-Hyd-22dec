const express = require('express')

const app = express();

//simple middleware
app.get('/', (req, res, next) => {
    console.log('middlware')
    next()
})
app.get('/', (req, res, next) => {
    res.end('response')
})

app.listen(3000, () => {
    console.log('Express server is running')
})