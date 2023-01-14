import * as mongoose from "mongoose";

const deckSchema = new mongoose.Schema({
    name: String,
})

const Deck = mongoose.model("Deck", deckSchema);
export default Deck;