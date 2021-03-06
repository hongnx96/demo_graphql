const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/graphQL', { db: 'mongodb://localhost'})
    } catch (error) {
        console.log(error);
    }
}