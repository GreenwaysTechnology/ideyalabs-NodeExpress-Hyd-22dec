const express = require('express')
const { findAll } = require('../services/customer.service')
const customerRouter = express.Router()

//REST API:
customerRouter.get('/', async (req, res) => {
    try {
        const customers = await findAll()
        res.status(200).json(customers)
    }
    catch (err) {
        res.status(500).json({ err })
    }
})
customerRouter.post('/create', (req, res) => {
    res.end('Customers-POST')
})
customerRouter.put('/update', (req, res) => {
    res.end('Customers-UPDATE')
})
customerRouter.delete('/remove', (req, res) => {
    res.end('Customers-Delete')
})

module.exports = customerRouter