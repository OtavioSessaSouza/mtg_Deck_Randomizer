import { ScryfallList } from "@scryfall/api-types";


//Fetching the list of sets
exports.test = async(req,res)=>{
    try {
        const response = await fetch("https://api.scryfall.com/sets");
        const sets: ScryfallList.Sets = await response.json();
        res.send(sets);
    } catch (error) {
      res.send('Hello World!');
      console.log(error)
    }
};