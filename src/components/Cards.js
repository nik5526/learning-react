import { IMAGE_URL } from "../utilities/links";

const Cards = (props) =>{
    const {restData} = props;

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = restData?.info;
    // if we have to take the properties from data in the restData then we will have to chaining ex restData?.data . ? while using this we can do chaining and if any property is not there it will not give error but undefined but if we do not use ? then it will give error if any property is not there.
    return (
        <div className="card"> 
            <div className="card-image"> 
                <img src={IMAGE_URL + cloudinaryImageId} alt={restData.name} />
            </div>
            <div className="rest-name">
                <h3>{name}</h3>
            </div>
            <div className="details">
                <p> {cuisines.join(" . ")} </p>
            </div>
            <div className="rating">
                <p>{avgRating}⭐</p>
                <p>.</p>
                <p>{restData.info.sla.deliveryTime} MINS</p>
                <p>.</p>
                <p>{costForTwo}</p>
            </div>
        </div>
    );
};

export default Cards;  