require("dotenv").config();

import Utils from "../utils";

const mongodb = require("mongodb");

const uri = Utils.getDatabaseURI(process.env.MONGODB_USER, process.env.MONGODB_PASS, process.env.MONGODB_DB);

async function getPostsCollection() {
    const client = await mongodb.MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db().collection("posts");
}

async function handlePost(req, res) {
    const post = {
        user: req.body.user,
        title: req.body.title,
        body: req.body.body,
        likes: 0
    }

    if (post.user.length == 0 || post.title.length == 0 || post.body.length == 0) {
        res.status(400).json({ error: "Bad request, user, title, and body can't be empty" });
        return;
    }

    if (post.likes != 0) {
        res.status(400).json({ error: "Likes must be zero" });
        return;
    }

    post.date = new Date();

    const posts = await getPostsCollection();

    const result = await posts.insertOne(post);

    res.status(200).json({ id: result.insertedId });
};

async function handleGet(req, res) {
    const posts = await getPostsCollection();

    const result = await posts.find({})
                          .sort({ date: -1 })
                          .limit(100)
                          .toArray();

    res.status(200).json(result);
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