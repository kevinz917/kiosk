import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as Fuse from "fuse.js";
import RecordRow from "../components/table/recordRow";
import { filterPlainArray, compareValues } from "../utils/other/array";

const gridHeaderValues = {
  id: "ID",
  amount: "Amount",
  time: "Time",
  size: "Size",
};

const options = {
  threshold: 0.2,
  keys: ["id", "amount", "size", "method", "time"],
};

let keys = ["id", "amount", "size", "method", "time"];

const RecordList = () => {
  const recordList = useSelector((state) => state.recordReducer);
  const [filteredList, setFilteredList] = useState([]);
  const filterInput = useSelector((state) => state.filterInputReducer);
  const tags = useSelector((state) => state.tagReducer);
  const [filters, setFilters] = useState([]);
  const rangeValue = useSelector((state) => state.priceRangeReducer);

  const [sortArray, setSortArray] = useState([0, 0, 0, 0]);

  const SetSorting = (index) => {
    let newArray = [0, 0, 0, 0];
    newArray[index] = (sortArray[index] + 1) % 3;
    setSortArray(newArray);
    console.log(newArray);
  };

  useEffect(() => {
    setFilteredList(recordList);
  }, []);

  useEffect(() => {
    let temp = [];
    for (var i = 0; i < tags.length; i++) {
      if (tags[i].value == true) {
        temp.push(tags[i].keyword);
      }
    }
    setFilters(temp);

    let newList = filterPlainArray(recordList, { size: temp });
    console.log(filterInput);

    var fuse = new Fuse(newList, options);
    if (filterInput != "") {
      newList = fuse.search(filterInput);
      console.log(newList);
    }

    if (sortArray.includes(1)) {
      let idx = sortArray.indexOf(1);
      newList.sort(compareValues(keys[idx], "asc"));
    } else if (sortArray.includes(2)) {
      let idx = sortArray.indexOf(2);
      newList.sort(compareValues(keys[idx], "desc"));
    }

    // Filter range value
    setFilteredList(newList.filter((item) => item.amount < rangeValue));

    // setFilteredList(newList);
  }, [tags, filterInput, sortArray, rangeValue]);

  useEffect(() => {
    // Retrieve and dispatch to redux on landing
  }, []);

  const symbolRotate = (index) => {
    let state = sortArray[index];
    return (
      <div>{state == 1 ? <div> +</div> : state == 2 ? <div>-</div> : null}</div>
    );
  };

  return (
    <div className="p-8 w-full">
      <div className="grid grid-cols-5 bg-gray-100 w-full mb-1 mt-1 p-3 cursor-pointer">
        <div onClick={() => SetSorting(0)} className="flex flex-row">
          ID {symbolRotate(0)}
        </div>
        <div onClick={() => SetSorting(1)} className="flex flex-row">
          Amount {symbolRotate(1)}
        </div>
        <div onClick={() => SetSorting(2)} className="flex flex-row">
          Time {symbolRotate(2)}
        </div>
        <div onClick={() => SetSorting(3)} className="flex flex-row">
          Size {symbolRotate(3)}
        </div>
        <div>Status</div>
      </div>
      {filteredList.map((record) => (
        <RecordRow item={record} id={record.id} />
      ))}
    </div>
  );
};

// <RecordRow item={gridHeaderValues} />
export default RecordList;
