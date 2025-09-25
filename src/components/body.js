import Cards from "./Cards";
import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import  "../../index.css";
// import { useEffect } from "react";
// import { restaurantData } from "../utilities/cardData";


const Body = () =>{

    const [filteredData,setfilteredData] = useState([]);
    const [allData,setallData] = useState([]);
    // searchText is a local state variable and setsearchText is a function to update the value of searchText
    // searchText is by default an empty string

    const[searchText,setsearchText] = useState("");

    useEffect(()=> {
        fetchData();
    },[]);  

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57590&lng=77.33450&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            
            // A safer, more dynamic way to find the restaurant cards
            const restaurantCards = json?.data?.cards?.find(
              (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            if (restaurantCards) {
                setfilteredData(restaurantCards);
                setallData(restaurantCards);
            }
        } catch (error) {
            console.error("Failed to fetch restaurant data", error);
        }
    };
    
    // if(filteredData.length === 0){
    //     return <>{shimmer()}</>;
    // }

    // we can use a ternary operator also here instead of if condition
    return filteredData.length === 0 ? ( 
    <Shimmer/>
    ) : (
        <div className ="app-body">
            <div className ="Search">
                 
                {/*  In React (JSX), the for attribute is a reserved keyword, so JSX uses htmlFor to avoid conflicts. */}
                <input type="text" placeholder="Search for your favourite food -" id="search" value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value);
                }}/>
                <button className="search-btn" onClick={()=>{
                    const restauarantSearch = filteredData.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        
                    );
                    setallData(restauarantSearch);
                }}>Search</button>

                <button className="filter-btn" onClick={()=>{
                    const filterList = filteredData.filter(
                        (res) => res.info.avgRating > 4.3
                    );
                    setallData(filterList);
                }}
                > Top Rated Restaurant </button>
            </div>
           <div className="resturant-card">

                
                {allData.map((restaurant) => (
                    <Link key={restaurant.info.id} className="link"
                    to={"/restaurant/" + restaurant.info.id}><Cards  restData={restaurant} /> </Link>
                ))}
             

                
           </div>
        </div> 
    );
};

export default Body;