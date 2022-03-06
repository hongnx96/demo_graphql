const resolvers = {

    Book: {
        author: async ({ authorId }, ar)
    },

    Mutation: {
        createAuthor: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.createAuthor(args),
        createBook: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createBook(args),
    }
}

module.exports = resolvers