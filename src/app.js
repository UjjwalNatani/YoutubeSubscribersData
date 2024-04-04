
const express = require('express');
const app = express()


// Your code goes here
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
const uri = "mongodb+srv://ujjwalnatani10:Pbmp@1444@youtubesubscriberdata.sjib2vf.mongodb.net/?retryWrites=true&w=majority&appName=YoutubeSubscriberData";

async function connectToDatabase() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");

        const database = client.db("youtubeUsers");
        const collection = database.collection("userdata");

        // Start the server after successful connection
        startServer(collection);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

function startServer(collection) {
    // Route to get all subscribers
    app.get('/subscribers', async (req, res) => {
        try {
            const subscribers = await collection.find().toArray();
            res.json(subscribers);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

    // Route to get subscribers' names and subscribed channels
    app.get('/subscribers/names', async (req, res) => {
        try {
            const subscribers = await collection.find({}, { projection: { _id: 0, name: 1, subscribedChannel: 1 } }).toArray();
            res.json(subscribers);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

    // Route to get a subscriber by ID
    app.get('/subscribers/:id', async (req, res) => {
        try {
            // Convert the hexadecimal string to a MongoDB ObjectID
            const objectId = new ObjectId(req.params.id);

            const subscriber = await collection.findOne({ _id: objectId });
            res.json(subscriber);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}

// Connect to the database and start the server
connectToDatabase();

module.exports = app;
