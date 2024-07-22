import { ScryfallCard } from "@scryfall/api-types";

exports.searchCardsColor = async (color)=>{
    try {
        return (await getCardsList(color));
    } catch (error) {
      console.log(error);
      return({ message: error.message });
    }
}

async function getCardsList(color){
    try {
      const url = `https://api.scryfall.com/cards/search?order=cmc&unique&q=commander%3A${color}+%28game%3Apaper%29`;
      const cardlist = await getCards(url);
      return cardlist;
    } catch (error) {
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
      return error;
    } 
  }
  