require('dotenv').config();

const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Connection URI
const uri = `mongodb+srv://cluster-add:${process.env.MONGODB_PASSWORD}@cluster-us-east.r8dna1m.mongodb.net/?retryWrites=true&w=majority`;

// Get posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();

    res.send(await posts.find({}).toArray());
});

// Add posts
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();

    await posts.insertOne({
        user: req.body.user,
        body: req.body.body,
        time: new Date(),
        likes: 0
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
            user: req.body.user,
            body: req.body.body,
            time: new Date(),
            likes: req.body.likes
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

    return client.db('cluster-us-east').collection('posts');
}


module.exports = router;