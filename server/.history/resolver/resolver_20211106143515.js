const resolvers = {
    Query: {
        authors: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllAuthors(),
        author: async (parent, { id }, { mongoDataMethods }) =>
        await mongoDataMethods.getAuthorById(id),
    },

    // Book: {
    //     author: async ({ authorId }, args, { mongoDataMethods }) =>
    //         await mongoDataMethods.getAuthorById(authorId)
    // },

    Au

    Mutation: {
        createAuthor: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.createAuthor(args),
        createBook: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createBook(args),
    }
}

module.exports = resolvers