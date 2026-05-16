const { CDN_URL } = require("../utils/Constant.js");
const RestaurantCard = (props) => {
    const { name, cuisines, avgRatingString, cloudinaryImageId, sla} = props.resList;
   const imageUrl = CDN_URL + cloudinaryImageId;
  return (
    <div className="restaurant-card">
      <img src={imageUrl} alt="Restaurant" style={styleCard} />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>Rating: {avgRatingString}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

const styleCard = {
  padding: "10px",
  height: "200px",
  width: "286px",
};

export default RestaurantCard;