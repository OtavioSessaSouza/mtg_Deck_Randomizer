import { ScryfallCard } from "@scryfall/api-types";

//testing Fetching a card
exports.test = async (req,res)=>{
    try {
      const response = await fetch("https://api.scryfall.com/cards/iko/275");
      const godzilla: ScryfallCard.Any = await response.json();
      res.send(godzilla);
    } catch (error) {
      res.send('Error');
      console.log(error);
    }
};

//Fetching a random card
exports.random = async (req,res)=>{
  try {
    const response = await fetch("https://api.scryfall.com/cards/random");
    const random: ScryfallCard.Any = await response.json();
    res.send(random);
  } catch (error) {
    res.send('Error');
    console.log(error);
  }
};

//Fetching a random comander card
exports.randomCM = async (req,res)=>{
  try {
    const response = await fetch("https://api.scryfall.com/cards/random?q=is%3Acommander");
    const randomCM: ScryfallCard.Any = await response.json();
    res.send(randomCM);
  } catch (error) {
    res.send('Error');
    console.log(error)
  }
};