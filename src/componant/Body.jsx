import React from "react";
import RestaurantCard from "./RestaurantCard.jsx";
import { useState, useEffect } from "react";
import Shimmer from "./shimmar.jsx";
import Category from "./Category.jsx";
import { RESTAURANT_LIST_URL } from "../utils/Constant.js";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
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
  return (
    <>
      <Category />
      <div className="res-filter">
        <button
          className="res-filter-btn"
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
        <div className="search-bar">
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
            className="search-btn"
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
          <div className="res-container">
            {filteredRestaurants.map((restaurant) => {
              return (
                <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                  <RestaurantCard
                    key={restaurant.info.id}
                    resList={restaurant.info}
                  />
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
