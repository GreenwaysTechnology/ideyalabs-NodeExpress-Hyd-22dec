const express = require('express')
const app = express()

//error handler
app.use((req, res, next) => {
    console.log('next')
    next()
})
app.use((err, req, res, next) => {
    res.status(500).send('something went wrong')
})


//home page:
app.get("/", (req, res) => {
    res.end('Welcome to Express App - Home Page!!!')
})

app.get('/error', (req, res, next) => {
    throw new Error('Broken...')
    next()
})

//start server
app.listen(3000, () => {
    console.log('Express Server is running')
})