import {Router} from "express";
import {store} from "../controllers/deck.controller.js";

export const router = Router();


router.post('/decks', store)