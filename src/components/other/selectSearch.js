import React, { useState, useEffect } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const inputSetting = "p-3 bg-gray-200 rounded-md mb-1 w-full";
const inputSmall = "p-3 bg-gray-200 rounded-md mb-4";

const foodList = [
  { name: "Sushi", price: 14.23 },
  { name: "Steak", price: 23.24 },
  { name: "Chips", price: 1.99 },
  { name: "Coke", price: 42.32 },
];

const SelectSearch = (props) => {
  const [input, setInput] = useState("");
  const [itemList, setItemList] = useState(foodList);
  const [price, setPrice] = useState(0);
  const [filteredList, setFilteredList] = useState(foodList);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setFilteredList(
      itemList.filter((item) =>
        item.name.toLowerCase().includes(input.toLowerCase())
      )
    );
  }, [input]);

  //   Sum useEffect
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < itemList.length; i++) {
      if (selectedItems.includes(itemList[i].name)) {
        sum = sum + itemList[i].price;
      }
    }

    setPrice(sum);
  }, [selectedItems]);

  const onSelectItem = (item) => {
    let bool = true;
    if (selectedItems.includes(item.name) == false) {
      setSelectedItems([...selectedItems, item.name]);
    }
  };

  const onDeleteItem = (item) => {
    console.log(item.name);
    let idx = selectedItems.indexOf(item.name);
    let temp = selectedItems.slice();
    temp.splice(idx, 1);
    setSelectedItems(temp);
  };

  const inputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className>
      <input
        className={inputSetting}
        placeholder="Choose items"
        value={input}
        onChange={(e) => inputChange(e)}
      />
      <div
        className="overflow-scroll bg-gray-200 rounded-md mb-4 w-full shadow-md"
        style={{ height: "200px" }}
      >
        {filteredList.map((item) => (
          <div
            className="flex flex-row p-3 mb-2 mt-2 hover:bg-gray-400"
            key={item.name}
          >
            <div>
              <img
                className="rounded-lg mr-3"
                src="https://source.unsplash.com/random"
                style={{ height: "30px", width: "30px" }}
              />
            </div>
            <div className="mr-3">{item.name}</div>
            <div>
              {selectedItems.includes(item.name) ? (
                <div
                  className="p-1 bg-gray-300 rounded-lg"
                  onClick={() => onDeleteItem(item)}
                >
                  <FiMinus />
                </div>
              ) : (
                <div
                  className="p-1 bg-gray-300 rounded-lg"
                  onClick={() => onSelectItem(item)}
                >
                  <FiPlus />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="text-xl font-bold">Selected items</div>
      <div className="flex flex-row mb-4">
        {selectedItems.map((item) => (
          <div className="p-2 mr-3 bg-gray-200 font-semibold flex flex-row items-center">
            <div className="mr-3">{item}</div>
            <div
              className="rounded-lg bg-gray-400 p-1"
              onClick={() => onDeleteItem(item)}
            >
              <FiMinus />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row">
        <div className={inputSmall} style={{ width: "47%" }}>
          Total: {price}
        </div>
        <div className="w-2/12" style={{ width: "6%" }} />
        <input
          className={inputSmall}
          style={{ width: "47%" }}
          placeHolder="Discounted Price"
          value={props.discountedPrice}
          type="number"
          onChange={(e) => props.discountedPriceChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SelectSearch;
