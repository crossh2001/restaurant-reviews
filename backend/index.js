import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const MongoClient = mongodb.MongoClient;

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI
    );
