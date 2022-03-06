const resolvers = {

    Book: {
        author: async ({ authorId }, args, { mongoDataMethods }) =>
            await mongoDataMethods.getA
    },

    Mutation: {
        createAuthor: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.createAuthor(args),
        createBook: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createBook(args),
    }
}

module.exports = resolvers