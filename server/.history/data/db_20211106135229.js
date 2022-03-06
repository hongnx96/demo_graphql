const Author = require('./../models/Author')

const mongoDataMethods = {
    createAuthor: async args => {
		const newAuthor = new Author(args)
		return await newAuthor.save()
	},
    creteBook: async args => {
        const newBook = new Book(args)
        return await newBook.save()
    }
}

module.exports = mongoDataMethods