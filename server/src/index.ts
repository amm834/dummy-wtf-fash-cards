import express from 'express';
import * as mongoose from "mongoose";
import "dotenv/config"
import {router as decksRouter} from "./routes/decks.routes.js";
import bodyParser from "body-parser";
import cors from 'cors';

const port = process?.env?.PORT ?? 8000;

const app = express();
app.use(bodyParser.json());
app.use(cors())


const main = async () => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect("mongodb://localhost:27017/flashcards");
    } catch (e) {
        console.error(`⚡️[server]: Error connecting to database: ${e}`)
    }


    app.use("/", decksRouter);
}

await main();

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});