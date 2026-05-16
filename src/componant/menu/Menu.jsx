import React, { use } from "react";
import { useEffect, useState } from "react";
import Shimmer from "../shimmar";
import { MenuList } from "../../utils/restList";
import { RESTAURANT_MENU_URL } from "../../utils/Constant";
const RestaurantMenu = () => {
    const [resMenu, setResMenu] = useState([]);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => { 
        try {
            const response = await fetch(RESTAURANT_MENU_URL+21001);
            if(response.status !== 200){
                setTimeout(() => {
                    setResMenu(MenuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards || []);
                }, 2000);
            }else if(response.status === 200){   
                const jsonData = await response.json();
                const data = jsonData?.data?.cards[2]?.card?.card?.itemCards || [];
                setResMenu(data);
            }
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    return (
        resMenu.length === 0 ? (
            <Shimmer />
        ) : (
            <div>
                <h1>Restaurant Menu</h1>
                <ul>
                    {resMenu?.map((item) => (
                        <li key={item.card.info.id}>
                            <h4>{item.card.info.name}</h4>
                            <p>Price: INR: {item.card.info.defaultPrice ? (item.card.info.defaultPrice / 100) : (item.card.info.price / 100)}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )       
            
    );
};

export default RestaurantMenu;