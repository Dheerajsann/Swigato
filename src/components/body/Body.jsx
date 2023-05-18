import React, { useEffect, useState, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import "./body.css";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import filterData from "../../utils/helper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import UserContext from "../../utils/UserContext";

export default function Body() {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const fetchData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.34991&lng=78.510613&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await fetchData.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴 Offline, Please check the internet connection </h1>;
  }

  const { users, setUsers } = useContext(UserContext);


  return allRestaurants?.length === 0 ? (
    <Loader />
  ) : (
    <div className="body">
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          placeholder="search"
        />
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            className="search-btn"
            onClick={() => {
              const data = filterData(searchTxt, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </Button>
        </Stack>
        <input style={{marginLeft: '15px'}}value={users.name} onChange={e => setUsers({...users,name: e.target.value})} />
        <input style={{marginLeft: '15px'}}value={users.email} onChange={e => setUsers({...users, email: e.target.value})} />
        <h4 style={{marginLeft: '250px'}}>
          {users.name} - {users.email}
        </h4>
      </div>
      <div className="body-restaurant">
        {filteredRestaurants.length === 0 ? (
          <h3>No results found</h3>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link to={"/restaurant/" + restaurant.data.id}>
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
