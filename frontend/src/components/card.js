
const Cards = (id, name , imgSmall) => {    
    return (
        <div className="cards">
                <div className="card-view">
                    <p>{id}</p>
                    <p>{name}</p>
                    <p>{imgSmall}</p>
                </div>
        </div>    
    );
}
 
export default Cards;