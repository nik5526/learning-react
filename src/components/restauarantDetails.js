
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestuarantData from "../utilities/useRestuarantDetails";

const RestaurantDetails = () => {


    const {resId} = useParams();
    const resInfo = useRestuarantData(resId);


    if(!resInfo){
        return <Shimmer/>;
    }

    const restaurantCards = resInfo?.cards.find((card)=> card?.card?.card?.info);
    const itemCardsWidtget = resInfo?.cards.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)?.groupedCard?.cardGroupMap?.REGULAR?.cards.find((card)=>card?.card?.card?.itemCards);

    console.log(restaurantCards);
    console.log(itemCardsWidtget);
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    // we have to  use find method here because find method will return the first element which satisfies the condition and filter method will return all the elements which satisfies the condition.
    // we have to use optional chaining here because if any property is not there it will not give error but undefined.
    // because we are working on live api so the data can be changed anytime so to avoid error we use optional chaining.

    const{name,cuisines = [],costForTwoMessage} = restaurantCards?.card?.card?.info|| {};
    const itemCards = itemCardsWidtget?.card?.card?.itemCards || []; 
    console.log(itemCards);
    
    return (
        <div className="flex flex-col gap-5 font-serif items-center border-1 rounded-xl bg-[whitesmoke] ">
            <h1 className="text-2xl font-bold ">
                {name}
            </h1>
            <h2>{cuisines.join(", ") + " - " + costForTwoMessage}</h2>
            <ul>
                {itemCards.map ((item) =>(
                    <li className="border-b py-2" key={item.card.info.id}>
                        {item.card.info.name} - Rs.{(item.card.info.price !== undefined ? item.card.info.price : item.card.info.defaultPrice) / 100}
                    </li>
                ))
             }

            </ul>
            
        </div>
    );
};
   
export default RestaurantDetails;