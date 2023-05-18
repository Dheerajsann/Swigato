import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URI } from "./body/configList";
import Loader from "./Loader";
import { FETCH_MENU_URI } from "./body/configList";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

export default function RestaurantMenu() {
  const { id } = useParams();

  const [restro, setRestro] = useState();
  const [restroItems, setRestroItems] = useState([]);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(FETCH_MENU_URI + id);
    const json = await data.json();
    console.log(json.data?.cards);
    setRestro(json.data.cards[0]?.card?.card?.info);
    setRestroItems(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  const dispatch = useDispatch();


  const addFoodItem = (item) => {
    dispatch(addItem(item));
  }

  return !restro ? (
    <Loader />
  ) : (
    <div style={{ display: "flex"}}>
      <div style={{padding: '10px'}}>
        <h1>{restro?.name}</h1>
        <img src={IMG_CDN_URI + restro?.cloudinaryImageId} />
        <h2>{restro?.city}</h2>
        <h4>{restro?.areaName}</h4>
        <h5>{restro?.avgRating} stars</h5>
      </div>

      <div style={{ marginLeft: "100px", marginTop: "55px" }}>
        <h2>MENU</h2>
        <ol>
          {restroItems?.map((item) => (
            <li style={{ fontSize: "18px", fontWeight: "bold" }} key={item.id}>
              {item.card?.info?.name}   <button onClick={() => addFoodItem(item)}>add</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
