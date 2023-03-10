import type {Request, Response} from "express";
import Deck from "../models/deck.model.js";

export const index = async (req: Request, res: Response) => {
    const decks = await Deck.find();
    res.json({decks});
}

export const store = async (req: Request, res: Response) => {
    const {name} = req.body
    if (!name) {
        return res.status(400).json({message: "Title is required"})
    }

    const deck = await Deck.create({name})

    res.status(201).json({deck})
}

export const destroy = async (req: Request, res: Response) => {
    const {id} = req.params
    if (!id)
        return res.status(400).json({message: "Id is required"})

    const deck = await Deck.findByIdAndDelete(id)
    res.status(301).json({deck})
}