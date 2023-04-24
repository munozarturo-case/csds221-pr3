require('dotenv').config();

const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

const uri = `mongodb+srv://sudo:${process.env.SUDO_PASSWORD}@vue-express-app.ef67yar.mongodb.net/?retryWrites=true&w=majority`;

// Get posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();

    res.send(await posts.find({}).toArray());
});

// Add posts


// Delete posts


async function loadPostsCollection() {
    console.log(process.env.SUDO_PASSWORD);

    const client = await mongodb.MongoClient.connect(uri, {
        useNewUrlParser: true
    });

    return client.db('vue-express').collection('posts');
}


module.exports = router;