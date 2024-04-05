const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
// const DATABASE_URL = "mongodb://localhost/subscribers";
// mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection
// db.on('error', (err) => console.log(err))
// db.once('open', () => console.log('connected to database'))


const uri = "mongodb+srv://ujjwalnatani10:Pbmp@1444@youtubesubscriberdata.sjib2vf.mongodb.net/?retryWrites=true&w=majority&appName=YoutubeSubscriberData";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB Atlas'));


// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
