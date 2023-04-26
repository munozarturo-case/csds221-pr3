require("dotenv").config();

import Utils from "../utils";

const mongodb = require("mongodb");

const uri = Utils.getDatabaseURI(process.env.MONGODB_USER, process.env.MONGODB_PASS);

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect(uri, {
        useNewUrlParser: true
    });

    return client.db("cluster-us-east").collection("posts");
};

async function handleGet(req, res) {

};

async function handlePost(req, res) {

};

async function handleDelete(req, res) {
    
};

export default function handler(req, res) {
    switch (req.method) {
        case "GET":
            handleGet(req, res); // GET
            break;
        case "POST":
            handlePost(req, res); // POST
            break;
        case "DELETE":
            handleDelete(req, res); // DELETE
            break;
        default:
            res.setHeader("Allow", ["GET", "POST", "DELETE"]);
            res.status(405).end(); // method not allowed
            break;
    }
};