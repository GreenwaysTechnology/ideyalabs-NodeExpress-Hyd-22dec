const Book = require('../models/book')
const sequelize = require('../config/db.config')

class BookService {
    constructor() { }

    findAll() {
        return Book.findAll()
    }
    //save 
    async save(book) {

        //Manaaged Transactions
        // const t = await sequelize.transaction();

        // try {
        //     const created = Book.create(book)
        //     await t.commit();
        //     return created
        // }
        // catch (err) {
        //     await t.rollback();
        // }
        try {

            return await sequelize.transaction(async (t) => {
                const createdBook = await Book.create(book)
                return createdBook;
            });
            // If the execution reaches this line, the transaction has been committed successfully
            // `result` is whatever was returned from the transaction callback (the `user`, in this case)

        } catch (error) {

            // If the execution reaches this line, an error occurred.
            // The transaction has already been rolled back automatically by Sequelize!

        }

    }
    findById(id) {
        // return Book.findAll(
        //     { where: { id } }
        // )
        return Book.findByPk(id)
    }

    update(book, id) {
        return Book.update(
            book,
            { where: { id } }
        )
    }
    remove(id) {
        return Book.destroy({ where: { id } })
    }
}
module.exports = new BookService()