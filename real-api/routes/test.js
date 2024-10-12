const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

// ---------------------------------------------

const PRE_MONGO_URL = process.env.PRE_MONGO_URL;
const DB_NAME = process.env.DB_NAME;
const POST_MONGO_URL = process.env.POST_MONGO_URL;

const mg = require("mongoose");
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
mg.connect(PRE_MONGO_URL + DB_NAME + POST_MONGO_URL, clientOptions).then(() => {
    console.log(PRE_MONGO_URL + DB_NAME + POST_MONGO_URL);
});

const users = require("../models/user.js");

// ---------------------------------------------

router.get("/db", async (request, response) => {
    const userCollection = await users.find();
    response.json(userCollection);
})

router.post("/db", async (request, response) => {
    const newUser = new users(request.body);
    await newUser.save();
})

module.exports = router;