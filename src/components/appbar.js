import React, { useState, useEffect } from "react";
import Modal from "react-modal";

// Styles
import "../styles/tailwind.css";

// Redux
import { useSelector } from "react-redux";

const Appbar = (props) => {
  const foodState = useSelector((state) => state.foodReducer);
  const [localData, setLocalData] = useState({ count: 0, price: 0 });

  useEffect(() => {
    let price = 0;
    let count = 0;

    for (var i = 0; i < foodState.length; i++) {
      if (foodState[i].count > 0) {
        count = count + foodState[i].count;
        price = price + foodState[i].count * foodState[i].price;
      }
    }
    console.log(foodState);

    setLocalData({ count, price });
  }, [foodState]);

  return (
    <div className="flex items-center flex-row p-8 shadow-md">
      <div className="text-2xl mr-8">Resto Name</div>
      <div className="flex flex-col">
        <div>Items: {localData.count}</div>
        <div>Price: {localData.price}</div>
      </div>
      <div className="ml-5 cursor-pointer">Checkout</div>
    </div>
  );
};

export default Appbar;
