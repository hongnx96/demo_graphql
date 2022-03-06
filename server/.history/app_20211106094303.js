const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/graphQL', {
            useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
        })
    } catch (error) {
        console.log(error);
    }
}