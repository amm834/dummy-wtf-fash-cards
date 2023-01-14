import {Router} from "express";
import {index, store} from "../controllers/deck.controller.js";

export const router: Router = Router();


router
    .get("/decks", index)
    .post('/decks', store)
