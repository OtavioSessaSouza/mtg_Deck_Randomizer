import { ScryfallList } from "@scryfall/api-types";
import { Request, Response } from "express";


//Fetching the list of sets
exports.test = async(req : Request, res : Response)=>{
    try {
        const response = await fetch("https://api.scryfall.com/sets");
        const sets: ScryfallList.Sets = await response.json();
        res.status(200).send(sets);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: error.message });
    }
};