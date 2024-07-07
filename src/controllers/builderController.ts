import { ScryfallCard } from "@scryfall/api-types";


exports.BuildCommander = async(req,res)=>{
    try {
        const randoComander = await randomCM(); // get a random commander
        const {name,scryfall_uri,mana_cost,color_identity}=randoComander;//get his info
        res.send({
            name,
            scryfall_uri,
            mana_cost,
            color_identity});
        
    } catch (error) {
        res.send('Error');
        console.log(error);
    }
}



//Fetching random comander card
async function randomCM(){
    try {
      const response = await fetch("https://api.scryfall.com/cards/random?q=is%3Acommander");
      const randomCM: ScryfallCard.Any = await response.json();
      return(randomCM);
    } catch (error) {
      console.log(error)
      return error;
    }
};

//build deck

async function buildDeck(){
  try {
    const response = await fetch("https://api.scryfall.com/cards/random?q=is%3Acommander");
    const randomCM: ScryfallCard.Any = await response.json();
    return(randomCM);
  } catch (error) {
    console.log(error)
    return error;
  }
};