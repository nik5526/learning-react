import { IMAGE_URL } from "../utilities/links";

const Cards = (props) =>{
    const {restData} = props;

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = restData?.info;
    // if we have to take the properties from data in the restData then we will have to chaining ex restData?.data . ? while using this we can do chaining and if any property is not there it will not give error but undefined but if we do not use ? then it will give error if any property is not there.
    return (
        <div className="border-0 border-solid border-black w-[300px] h-[380px]  m-[20px] p-2 leading-8 rounded-xl bg-[#dadfea] bg-[linear-gradient(-180deg,rgba(255,255,255,0.50) 0%,rgba(0,0,0,0.50) 100%)] bg-blend-lighten transition-all duration-300 ease-linear font-serif hover:scale-[1.03] shadow-black shadow-2xl "> 
            <div className="mb-3"> 
                <img src={IMAGE_URL + cloudinaryImageId} alt={restData.name} className="w-full h-[220px] rounded-xl" />
            </div>
            <div className="name">
                <h2 className="text-lg font-bold">{name}</h2>
            </div>
            <div className=" w-full">
                <p className="w-full truncate"> {cuisines.join(" . ")} </p>
            </div>
            <div className="flex justify-between text-gray-500">
                <p>{avgRating}⭐</p>
                <p>.</p>
                <p>{restData.info.sla.deliveryTime} MINS</p>
                <p>.</p>
                <p>{costForTwo}</p>
            </div>
        </div>
    );
};

//higher order component 
//input - Restaurant cards , output - Promoted restaurant cards
export  const higherOrder = (Cards)=>{
    return() => {
        return <h1>Higher Order Component</h1>;
    };
}

export default Cards;  