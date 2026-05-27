const { CDN_URL } = require("../utils/Constant.js");
const RestaurantCard = (props) => {
  const { name, cuisines, avgRatingString, cloudinaryImageId, sla } =
    props.resList;
  const imageUrl = CDN_URL + cloudinaryImageId;
  return (
    <div data-testid = "restCard" className="flex-wrap m-2 p-2 w-[280] h-[350] bg-gray-100 rounded-lg hover:bg-green-50">
      <img
        src={imageUrl}
        alt="Restaurant"
        className="items-center w-[260] h-[180] after:rounded-lg"
      />
      <h3 className="font-bold py-4 text-x1">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>Rating: {avgRatingString}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;