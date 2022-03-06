const resolvers = {

    Book: {
        author: async ({ authorID})
    },

    Mutation: {
        createAuthor: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.createAuthor(args),
        createBook: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createBook(args),
    }
}

module.exports = resolvers