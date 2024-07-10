import { ScryfallCard } from "@scryfall/api-types";
import { Request, Response } from "express";

//testing Fetching a card
exports.test = async (req : Request, res : Response)=>{
    try {
      const response = await fetch("https://api.scryfall.com/cards/iko/275");
      const godzilla: ScryfallCard.Any = await response.json();
      res.status(200).send(godzilla);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: error.message });
    }
};

//Fetching a random card
exports.random = async (req : Request, res : Response)=>{
  try {
    const response = await fetch("https://api.scryfall.com/cards/random");
    const random: ScryfallCard.Any = await response.json();
    res.status(200).send(random);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

//Fetching a random comander card
exports.randomCM = async (req : Request, res : Response)=>{
  try {
    const response = await fetch("https://api.scryfall.com/cards/random?q=is%3Acommander");
    const randomCM: ScryfallCard.Any = await response.json();
    res.status(200).send(randomCM);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};