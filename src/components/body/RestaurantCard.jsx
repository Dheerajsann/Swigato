import {React, useContext} from "react";
import "./restaurantcard.css";
import { IMG_CDN_URI } from "./configList";
import UserContext from "../../utils/UserContext";

export default function RestaurantCard({
  cloudinaryImageId,
  name,
  area,
  lastMileTravelString,
  avgRating,
})

{

const {users, setUsers} = useContext(UserContext);
  return (
    <div className="card">
      <img src={IMG_CDN_URI + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{area}</h5>
      <h6>{lastMileTravelString}</h6>
      <h6>{avgRating} ratings</h6>
      <p>{users.name}</p>
    </div>
  );
}
