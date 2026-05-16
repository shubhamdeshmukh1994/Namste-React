import { useEffect, useState } from "react";
import { MenuList } from "./restList";
import { RESTAURANT_MENU_URL } from "./Constant";

const useRestaurantMenu = (restId) => {
  const [resMenu, setResMenu] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(RESTAURANT_MENU_URL + restId);
      if (response.status !== 200) {
        setTimeout(() => {
          setResMenu(
            MenuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards[2].card?.card?.itemCards || [],
          );
        }, 1000);
      } else if (response.status === 200) {
        const jsonData = await response.json();
        const data = jsonData?.data?.cards[2]?.card?.card?.itemCards || [];
        setResMenu(data);
      }
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };
  return resMenu;
};

export default useRestaurantMenu;
