require("dotenv").config();

const mongodb = require("mongodb");

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster-us-east.r8dna1m.mongodb.net/?retryWrites=true&w=majority`;

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect(uri, {
        useNewUrlParser: true
    });

    return client.db("cluster-us-east").collection("posts");
};

async function handleGet(req, res) {
    const posts = await loadPostsCollection();

    res.send(await posts.find({}).toArray());
};

async function handlePost(req, res) {
    const posts = await loadPostsCollection();

    const post = {
        user: req.body.user,
        title: req.body.title,
        body: req.body.body,
        time: new Date()
    };

    await posts.insertOne(post);

    res.status(201).send();
};

export default function handler(req, res) {
    switch (req.method) {
        case "GET":
            handleGet(req, res); // GET
            break;
        case "POST":
            handlePost(req, res); // POST 
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(); // method not allowed
            break;
    }
};