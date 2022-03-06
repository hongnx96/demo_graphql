const resolvers = {
    Mutation: {
        createAuthor: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.createAuthor(args),
    }
}

mode