import Shimmer from "../shimmar";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const restId = useParams();
  const restInfo = useRestaurantMenu(restId);
  if (restInfo === null) return <Shimmer />;

  return restInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restaurant Menu</h1>
      <ul>
        {restInfo?.map((item) => (
          <li key={item.card.info.id}>
            <h4>{item.card.info.name}</h4>
            <p>
              Price: INR:{" "}
              {item.card.info.defaultPrice
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
