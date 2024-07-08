import { ScryfallCard } from "@scryfall/api-types";


exports.BuildCommander = async(req,res)=>{
    try {
        const randoComander = await randomCM(); // get a random commander
        res.send(await buildDeck(randoComander));
        
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

async function buildDeck(commander){
  try {
    const {color_identity}=commander;//get his info
    const ci = color_identity.toString().replace(',','');
    const url = `https://api.scryfall.com/cards/search?order=cmc&unique&q=commander%3A${ci}+%28game%3Apaper%29`;
    const cardlist = await getCards(url);
    const deck = await setDeck(cardlist);
    deck.push(commander);
    return deck;
  } catch (error) {
    console.log(error)
    return error;
  }
};


async function getCards(url){
  try {
    const response = await fetch(url);
    const cardsSearch: ScryfallCard.Any = await response.json();
    const cardsList = []
    if(!cardsSearch["next_page"]){
      cardsList.push(cardsSearch["data"]);
      return cardsList;
    }
    else{      
      let temp = await getCards(cardsSearch["next_page"]);
      const cardsListN = cardsSearch["data"].concat(temp);
      return cardsListN;
    }
  } catch (error) {
    console.log(error);
    return;
  } 
}


async function getRandomNumber(num) {
  return Math.floor(Math.random() * num) + 0;
}


async function setDeck(cardlist,size = 99) {
  const deck =[];
  for(let i= 0;i < size;i++){
    let temp = await getRandomNumber(cardlist.length);
    deck.push(cardlist[temp]);
  }
  return deck;

}
