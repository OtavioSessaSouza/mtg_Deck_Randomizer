Creating a api to get random cads to a commander in MTG.

this is possible usuing the scryfall api.
https://github.com/scryfall/api-types
https://scryfall.com/


scryfall dont suport this project.
i doing this for fun.


at the moment the api only give a list of 100 cards that can be played with the commander(last in the list).

requirements:
    have node and npm.

To run the api:
    make sure to run the commands in the backend folder
    install the node modules running command: npm i
    to run use the command: npm run dev
    the api some times is slow, maybe take up to 3 minutes to get the cards back



to do list:
    Frontend:
        make the design
        start frontend
            make it connect to the backend
            make it show data

        homepage
            show initial data (first commander)
            make look ok
            make change dynamically
            make show the cards
        


    Backend:
        make a tetst route for a card(done) 
        make a route from backend send a randon commander(done)
        Get cards from a commander user give.
        Change the number of cards the api gets at random.
        make a Front end
