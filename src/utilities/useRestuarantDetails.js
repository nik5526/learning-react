import { useEffect,useState } from "react";
import { MENU_URL } from "../utilities/links";
import { MENU2_URL } from "../utilities/links";

const useRestuarantData = (resId) =>{

    const[resInfo,setResInfo]  = useState(null);

    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        try {
        const data = await fetch(MENU_URL + resId + MENU2_URL);
        const json = await data.json();

        setResInfo(json.data);
        } catch (error){
            console.error("Failed to fetch restaurant data", error);
        }
    };
    return resInfo;
}

export default useRestuarantData;