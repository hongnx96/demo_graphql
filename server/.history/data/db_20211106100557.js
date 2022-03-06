//const Author = require('./../models/Author')

const mongoDataMethods = {
    createAuthor: async args => {
		const newAuthor = new Author(args)
		return await newAuthor.save()
	},
}

module.exports = mongoDataMethods