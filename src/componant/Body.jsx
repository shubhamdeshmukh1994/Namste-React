import React from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard.jsx";
import { useState, useEffect } from "react";
import Shimmer from "./shimmar.jsx";
import Category from "./Category.jsx";
import { RESTAURANT_LIST_URL } from "../utils/Constant.js";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus.jsx";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RESTAURANT_LIST_URL);
      const jsonData = await response.json();

      const data =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurants(data);
      setFilteredRestaurants(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = userOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like your offline, Please check your internet connection</h1>
    );
  }

  return (
    <>
      <Category />
      <div className="filter flex">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setListOfRestaurants(filteredList);
          }}
        >
          {" "}
          Top Rated Restaurants
        </button>
        <div className="border border-solid border-black">
          <input
            className="search"
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="search-btn">
          <button
            className="px-4 py-2 bg-green-50 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>

      {!filteredRestaurants && filteredRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body">
          <div className="flex flex-wrap">
            {filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.info.id}
                  key={restaurant.info.id}
                >
                  {restaurant?.info?.avgRating > 4.5 ? (
                    <RestaurantPromoted resList={restaurant.info} />
                  ) : (
                    <RestaurantCard resList={restaurant.info} />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
