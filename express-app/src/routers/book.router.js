const express = require('express')
const { findAll, save, update, findById,remove } = require('../services/book.service')
const bookRouter = express.Router()

//REST API:
bookRouter.get('/', async (req, res) => {
    try {
        const books = await findAll()
        res.status(200).json(books)
    }
    catch (err) {
        res.status(400).json({ err })
    }
})
bookRouter.post('/', async (req, res) => {
    try {
        const book = req.body
        const savedBook = await save(book)
        res.status(201).json(savedBook)
    }
    catch (err) {
        res.status(400).json({ err })
    }
})
bookRouter.get('/:id', async (req, res) => {
    try {
        const id = +req.params.id
        const book = await findById(id)
        if (book.length === 0) {
            res.status(200).json({ message: 'No Data Found' })
        }
        res.status(200).json(book)
    }
    catch (err) {
        res.status(400).json({ err })
    }
})
bookRouter.delete('/:id', async (req, res) => {
    try {
        const id = +req.params.id
        const book = await remove(id)
        if (book=== 0) {
            res.status(200).json({ message: 'No Data Found' })
        }
        res.status(200).json(book)
    }
    catch (err) {
        res.status(400).json({ err })
    }
})
bookRouter.put('/:id', async (req, res) => {
    try {
        const book = req.body
        const id = +req.params.id
        const savedBook = await update(book, id)
        res.status(200).json(savedBook)
    }
    catch (err) {
        res.status(400).json({ err })
    }
})

module.exports = bookRouter