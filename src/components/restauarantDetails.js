import {useEffect,useState}  from "react";
import Shimmer from "./shimmer";
import { MENU_URL } from "../utilities/links";
import { MENU2_URL } from "../utilities/links";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {

    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        restauarantInfo();
    },[]);

    const restauarantInfo = async () => {
        try {
            const data = await fetch(MENU_URL + resId + MENU2_URL);
            const json = await data.json();
            console.log(json);
            setResInfo(json.data);
        } catch (error) {
            console.error("Failed to fetch restaurant data", error);
        }

    };

    if(!resInfo){
        return <Shimmer/>;
    }

    const restaurantCards = resInfo?.cards.find((card)=> card?.card?.card?.info);
    const itemCardsWidtget = resInfo?.cards.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)?.groupedCard?.cardGroupMap?.REGULAR?.cards.find((card)=>card?.card?.card?.itemCards);
    // we have to  use find method here because find method will return the first element which satisfies the condition and filter method will return all the elements which satisfies the condition.
    // we have to use optional chaining here because if any property is not there it will not give error but undefined.
    // because we are working on live api so the data can be changed anytime so to avoid error we use optional chaining.
    console.log(restaurantCards);
    console.log(itemCardsWidtget);

    const{name,cuisines = [],costForTwoMessage} = restaurantCards?.card?.card?.info|| {};
    const itemCards = itemCardsWidtget?.card?.card?.itemCards || []; 
    console.log(itemCards);
    
    return (
        <div className="restaurant-details">
            <h1>
                {name}
            </h1>
            <h2>{cuisines.join(", ") + " - " + costForTwoMessage}</h2>
            <ul>
                {itemCards.map ((item) =>(
                    <li key={item.card.info.id}>
                        {item.card.info.name} - Rs.{(item.card.info.price !== undefined ? item.card.info.price : item.card.info.defaultPrice) / 100}
                    </li>
                ))
             }

            </ul>
            
        </div>
    );
};
   
export default RestaurantDetails;