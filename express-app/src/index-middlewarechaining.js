const express = require('express')
const myMiddleware = require('./middlwares/my-middlware')

const app = express();

//configure the middleware 
app.use(myMiddleware({ option1: 'option1', option2: 'options' }))

// app.use((req, res, next) => {
//     console.log('m2')
//     next()
// })
// app.use((req, res, next) => {
//     console.log('m3')
//     next()
// })
// app.use((req, res, next) => {
//     console.log('m4')
//     next()
// })
//object chaining
app.use((req, res, next) => {
    console.log('m2')
    next()
}).use((req, res, next) => {
    console.log('m3')
    next()
}).use((req, res, next) => {
    console.log('m4')
    next()
})
//function chaining
app.get('/api/user', (req, res, next) => {
    console.log('User Middleware-1')
    next()
}, (req, res, next) => {
    console.log('User Middleware2')
    next()
}, (req, res) => {
    res.send('Users')
})

//you can intercept req do something
app.get('/', (req, res, next) => {
    console.log(req.url)
    console.log(req.headers)
    console.log(req.baseUrl)
    //set custom response header
    res.set({
        'company': 'google'
    })
    next()
})
app.get('/', (req, res, next) => {
    res.end('response')
})

app.listen(3000, () => {
    console.log('Express server is running')
})