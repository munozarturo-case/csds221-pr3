require("dotenv").config();

import Utils from "../utils";

const uri = Utils.getDatabaseURI(process.env.MONGODB_USER, process.env.MONGODB_PASS);

export default async function handler(req, res) {
    res.setHeader("Allow", ["GET", "POST", "DELETE"]);
    res.status(405).end(); // method not allowed
};