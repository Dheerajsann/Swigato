import { React } from "react";
import "./restaurantcard.css";
import { IMG_CDN_URI } from "./configList";

export default function FoodItem({ imageId, name, category, price }) {


  return (
    <div className="card">
      <img src={IMG_CDN_URI + imageId} />
      <h3>{name}</h3>
      <h5>{category}</h5>
      <h6>Rs.{price / 100}</h6>
    </div>
  );
}
