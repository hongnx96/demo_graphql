const Author = require('./../models/Author')
const Book = require('./../models/Book')

const mongoDataMethods = {
    getAllAuthors: async (condition = null) => 
        condition  await Author.find(),
    getAuthorById: async id => await Author.findById(id),
    getAllBooks: async () => await Book.find(),
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