import useFetch from "./useFetcth";
import Cards from "./card";
const Body = () => {
  const {data: data, isPending, error} = useFetch("http://localhost:3080/testcard/");
  
    return (
        <div className="body">
            {error && <div>{error}</div>}
            {isPending && <div>loading...</div>}
            {data && 
                                                    <div className="card-view" key={data.id}>
                                                    <p>{data.id}</p>
                                                    <p>{data.name}</p>
                                                </div>
            
            }
        </div>
    );
}
 
export default Body;