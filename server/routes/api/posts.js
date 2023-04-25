require('dotenv').config();

const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Connection URI
const uri = `mongodb+srv://sudo:${process.env.SUDO_PASSWORD}@vue-express-app.ef67yar.mongodb.net/?retryWrites=true&w=majority`;

// Get posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();

    res.send(await posts.find({}).toArray());
});

// Add posts
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();

    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });

    res.status(201).send();
});


// Update posts
router.put('/:id', async (req, res) => {
    const posts = await loadPostsCollection();

    await posts.updateOne({
        _id: new mongodb.ObjectId(req.params.id)
    },
    {
        $set: {
            text: req.body.text
        }
    });

    res.status(200).send();
});


// Delete posts
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();

    await posts.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    });

    res.status(200).send();
});

// Load Posts Collection
async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect(uri, {
        useNewUrlParser: true
    });

    return client.db('vue-express').collection('posts');
}


module.exports = router;