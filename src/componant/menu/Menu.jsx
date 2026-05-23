import Shimmer from "../shimmar";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Category from "../Category";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const restId = useParams();
  const restInfo = useRestaurantMenu(restId.resId);
  const [showIndex, setShowIndex] = useState(0);
  if (restInfo === null || restInfo.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[2]?.card?.card?.info || {};

  const itemCards =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];

  const categories =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  return restInfo?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
