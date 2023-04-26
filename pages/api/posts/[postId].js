require("dotenv").config();

import Utils from "../utils";

const mongodb = require("mongodb");

const uri = Utils.getDatabaseURI(process.env.MONGODB_USER, process.env.MONGODB_PASS, process.env.MONGODB_DB);

async function getClient() {
    const client = await mongodb.MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    return client;
}

async function handleGet(req, res) {
    const client = await getClient();
    const posts = client.db().collection("posts");

    const result = await posts.findOne({ _id: new mongodb.ObjectId(req.query.postId) });

    if (result == null) {
        res.status(400).json({ error: "Post not found" });
        return;
    }

    res.status(200).json(result);

    client.close();
};

async function handlePut(req, res) {
    const client = await getClient();
    const posts = client.db().collection("posts");

    if (req.body.user.length == 0) {
        res.status(400).json({ error: "Bad request, user can't be empty" });
        return;
    }

    const result = await posts.findOne({ _id: new mongodb.ObjectId(req.query.postId) });

    if (result == null) {
        res.status(400).json({ error: "Post not found" });
        return;
    }

    switch (req.body.action) {
        case "like":
            if (result.likedBy.includes(req.body.user)) {
                res.status(400).json({ error: "Post already liked" });
                return;
            }

            await posts.updateOne({ _id: new mongodb.ObjectId(req.query.postId) }, { $inc: { likes: 1 }, $push: { likedBy: req.body.user } });
            break;
        case "unlike":
            if (!result.likedBy.includes(req.body.user)) {
                res.status(400).json({ error: "Post already not liked" });
                return;
            }

            await posts.updateOne({ _id: new mongodb.ObjectId(req.query.postId) }, { $inc: { likes: -1}, $pull: { likedBy: req.body.user } });
            break;
        default:
            res.status(400).json({ error: "Bad request, action must be like or unlike" });
            return;
    }

    res.status(200).json({ status: "ok" });

    client.close();
};

async function handleDelete(req, res) {
    const client = await getClient();
    const posts = client.db().collection("posts");

    const result = await posts.deleteOne({ _id: new mongodb.ObjectId(req.query.postId) });

    if (result.deletedCount == 0) {
        res.status(400).json({ error: "Post not found" });
        return;
    }

    res.status(200).json({ status: "ok" });

    client.close();
};

export default function handler(req, res) {
    switch (req.method) {
        case "GET":
            handleGet(req, res); // GET
            break;
        case "PUT":
            handlePut(req, res); // POST
            break;
        case "DELETE":
            handleDelete(req, res); // DELETE
            break;
        default:
            res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
            res.status(405).end(); // method not allowed
            break;
    }
};