const Author = require('./../models/Author')
const Book = require('./../models/Book')

const mongoDataMethods = {
    getAuthorById: async id => await Author.fin
    createAuthor: async args => {
		const newAuthor = new Author(args)
		return await newAuthor.save()
	},
    createBook: async args => {
        const newBook = new Book(args)
        return await newBook.save()
    }
}

module.exports = mongoDataMethods