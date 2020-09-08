import React from "react";

// Styles
import "../styles/tailwind.css";

// Data
import { Categories } from "../utils/data/categories";

const Item = (props) => {
  return <div className="p-8 flex flex-row text-2xl">{props.name}</div>;
};

const Itemlist = (props) => {
  return (
    <div className="w-3/12 shadow-md min-h-screen">
      {Categories.map((item) => (
        <Item name={item} />
      ))}
    </div>
  );
};

export default Itemlist;
