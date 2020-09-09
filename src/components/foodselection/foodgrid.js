import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Styles
import "../../styles/tailwind.css";

// Components
import Foodcard from "./foodcard";
import Foodmodal from "./foodmodal";

const Foodgrid = () => {
  const selectedNavstate = useSelector((state) => state.NavselectReducer);
  const foodList = useSelector((state) => state.foodReducer).filter(
    (item) => item.type == selectedNavstate
  );
  return (
    <div className="w-full p-8">
      <div className="grid grid-cols-3 gap-4">
        {foodList.map((foodItem) => (
          <Foodmodal item={foodItem} />
        ))}
      </div>
    </div>
  );
};

export default Foodgrid;
