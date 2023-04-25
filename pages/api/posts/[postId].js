require('dotenv').config();

const mongodb = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster-us-east.r8dna1m.mongodb.net/?retryWrites=true&w=majority`;

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect(uri, {
        useNewUrlParser: true
    });

    return client.db('cluster-us-east').collection('posts');
};

async function handleGet(req, res) {
    const posts = await loadPostsCollection();
    const postId = req.query.postId;

    res.send(await posts.findOne({_id: new mongodb.ObjectId(postId)}));
};

async function handlePost(req, res) {
    const posts = await loadPostsCollection();
    const postId = req.query.postId;

    const post = {
        user: req.body.user,
        title: req.body.title,
        body: req.body.body,
        time: new Date()
    };

    await posts.updateOne(
        {_id: new mongodb.ObjectId(postId)},
        {$set: post}
    );
};

async function handleDelete(req, res) {
    const posts = await loadPostsCollection();
    const postId = req.query.postId;

    await posts.deleteOne({
        _id: new mongodb.ObjectId(postId)
    });

    res.status(200).send();
};

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            handleGet(req, res); // GET
            break;
        case 'POST':
            handlePost(req, res); // POST
            break;
        case 'DELETE':
            handleDelete(req, res); // DELETE
            break;
        default:
            res.status(405).end(); // method not allowed
            break;
    }
};