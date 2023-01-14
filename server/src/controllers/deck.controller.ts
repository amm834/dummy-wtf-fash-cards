import type {Request, Response} from "express";
import Deck from "../models/deck.model.js";

export const store = async (req: Request, res: Response) => {
    const {name} = req.body
    if (!name) {
        return res.status(400).json({message: "Title is required"})
    }

    const deck = await Deck.create({name})

    res.status(201).json({deck})
}
