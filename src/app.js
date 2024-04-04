
const express = require('express');
const app = express()


// Your code goes here

const Subscriber = require('./models/subscribers');

// Route to get all subscribers
app.get('/subscribers', async (req, res) => {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
        res.status(500);
});

// Route to get subscribers' names and subscribed channels
app.get('/subscribers/names', async (req, res) => {
        const subscribers = await Subscriber.find({}, 'name subscribedChannel');
        res.json(subscribers);
        res.status(500);
});

// Route to get a subscriber by ID
app.get('/subscribers/:id', getSubscriber, (req, res) => {
    res.json(res.subscriber);
});

async function getSubscriber(req, res, next) {
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }

    res.subscriber = subscriber;
    next();
}

module.exports = app;
