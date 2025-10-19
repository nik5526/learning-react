import { RestaurantDetails_URL } from "../utilities/links";

const MenuDetails = ({ items })=>{

    console.log(items);
    return(
        <div className="m-1 ">
            {items.map((item) =>(
                <div key={item?.card?.info?.id} className="border-b border-gray-300 py-3 flex justify-between px-3 gap-3 items-start">
                    <div className="flex flex-grow flex-col pr-4">
                        <div className="flex flex-col font-semibold text-lg mb-1"> 
                            <span>{item?.card?.info?.name}</span>
                            <span className="text-sm">₹{(item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice/100 : item?.card?.info?.price/100)}</span>
                        </div>
                        <p className="text-sm leading-relaxed">{item?.card?.info?.description}</p>
                    </div>

                    <div className="w-40 h-40 relative flex-shrink-0">
                        <img src={RestaurantDetails_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} className="w-full h-full rounded-xl object-cover"/>
                        <button className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-green-600 px-5 py-1.5 rounded-lg shadow-md font-bold text-xs uppercase border border-gray-300 transform transition-all duration-200 hover:scale-105">ADD</button>
                    </div>
                </div>
            ))}

        </div>
    );
}
export default MenuDetails;