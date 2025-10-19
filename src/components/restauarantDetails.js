import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantData from "../utilities/useRestuarantDetails";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const {resInfo,error} = useRestaurantData(resId);
  console.log(resInfo);

  if (error) {
    return <div>Error: {error}</div>;
  } 

  if (!resInfo) {
    return <Shimmer />;
  }

  const restaurantCards = resInfo?.cards.find((card) => card?.card?.card?.info);
  const itemCardsWidtget = resInfo?.cards
    .find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
      (card) => card?.card?.card?.itemCards
    );

  // console.log(restaurantCards);
  // console.log(itemCardsWidtget);
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  // we have to  use find method here because find method will return the first element which satisfies the condition and filter method will return all the elements which satisfies the condition.
  // we have to use optional chaining here because if any property is not there it will not give error but undefined.
  // because we are working on live api so the data can be changed anytime so to avoid error we use optional chaining.

  const[expandItems,setExpandItems] = useState(0);

  const {
    name,
    cuisines = [],
    costForTwoMessage,
    avgRating,
    totalRatings,
    sla: { maxDeliveryTime,minDeliveryTime } = {},
    areaName,
  } = restaurantCards?.card?.card?.info || {};
  console.log(restaurantCards);
  const itemCards = itemCardsWidtget?.card?.card?.itemCards || [];

  const menuCards = resInfo?.cards
    .find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(menuCards);

  //restaurant details self made.
  return (
    <div className="max-w-4xl mx-auto px-4 gap-3">
      <div className="flex flex-col max-w-4xl mx-auto px-6 py-4 gap-2 shadow-lg cursor-pointer bg-gray-50 border border-gray-200 rounded-2xl">
        <h1 className="text-xl font-bold font-sans">{name}</h1>
        <p className="text-sm font-semibold flex items-center gap-2 border-b border-dashed border-gray-300 pb-3">
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-green-700 text-white font-bold text-xs p-2">
            ★
          </span>
          {avgRating}{" "}
          <span className="font-normal text-gray-500">
            ({totalRatings} ratings)
          </span>
          <span className="mx-1 font-extrabold text-sm">•</span>
          <span className="font-semibold text-gray-700">
            {costForTwoMessage} for two
          </span>
        </p>
        <p className="text-sm text-gray-500 font-medium cursor-pointer w-max">
          {cuisines.slice(0, 2).join(", ")}
        </p>
        <div className="flex items-start gap-3 pt-3">
          {/* Smaller route structure */}
          <div className="flex flex-col items-center">
            <span className="block w-1 h-1 bg-gray-500 rounded-full"></span>
            <span className="block w-0.5 h-6 bg-gray-500"></span>
            <span className="block w-1 h-1 bg-gray-500 rounded-full"></span>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-500">
              Outlet{" "}
              <span className="font-normal text-gray-700 ml-2">{areaName}</span>
            </p>
            <p className="text-base font-bold mt-2">
              {minDeliveryTime}-{maxDeliveryTime} mins
            </p>
          </div>
        </div>
      </div>

        <div className=" shadow-lg my-6 border-0">
             {menuCards.map((category,index) => ( 
                <RestaurantMenu key={category?.card?.card?.categoryId} 
                menu={category?.card?.card} 
                value={index === 0 && true}
                setExpandItems = {()=> setExpandItems(index)}/>
             ))}
        </div>
    </div>
  );
};

export default RestaurantDetails;
