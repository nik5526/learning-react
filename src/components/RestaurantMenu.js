import MenuDetails from "./menuDetails";
import {useState} from "react";

const RestaurantMenu = ({menu,expandItems,setExpandItems })=>{

    const handleClick =()=>{
        setExpandItems();
        // expandItems ? setExpandItems(false) : setExpandItems(true);
        //             //or
        // setExpandItems(!expandItems );
    }

    return(
        <div>
            {/* header and the use of Accordion */}
            <div className="flex w-full my-3 shadow-lg justify-between font-bold text-lg p-4 cursor-pointer bg-gray-50 rounded-t-lg " onClick={handleClick}>
                <span>{menu?.title} ({menu?.itemCards?.length})</span>
                <span className="text-2xl"> ⌄ </span>
            </div>
            {/*Items*/}
            <div className="border-0 border-solid border-black  shadow-lg mb-6 rounded-b-lg">
                {expandItems && <MenuDetails items={menu?.itemCards}/>}
            </div>
        </div>
    );
}
export default RestaurantMenu;