import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as Fuse from "fuse.js";

const RecordRow = (props) => {
  return (
    <div className="grid grid-cols-4 bg-gray-100 w-full mb-1 mt-1 p-3 cursor-pointer hover:bg-gray-300">
      <div>{props.item.id}</div>
      <div>{props.item.amount}</div>
      <div>{props.item.time}</div>
      <div>{props.item.size}</div>
    </div>
  );
};

const gridHeaderValues = {
  id: "ID",
  amount: "Amount",
  time: "Time",
  size: "Size",
};

const options = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.2,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: true,
  // ignoreFieldNorm: false,
  keys: ["id", "amount", "size", "method", "time"],
};

const RecordList = () => {
  const recordList = useSelector((state) => state.recordReducer);
  const [filteredList, setFilteredList] = useState([]);
  const filterInput = useSelector((state) => state.filterInputReducer);
  const tags = useSelector((state) => state.tagReducer);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setFilteredList(recordList);
  }, []);

  const getValue = (value) =>
    typeof value === "string" ? value.toUpperCase() : value;

  //Master filter
  const filterPlainArray = (array, filters) => {
    const filterKeys = Object.keys(filters);
    return array.filter((item) => {
      // validates all filter criteria
      return filterKeys.every((key) => {
        // ignores an empty filter
        if (!filters[key].length) return true;
        return filters[key].find(
          (filter) => getValue(filter) === getValue(item[key])
        );
      });
    });
  };

  useEffect(() => {
    let temp = [];
    for (var i = 0; i < tags.length; i++) {
      if (tags[i].value == true) {
        temp.push(tags[i].keyword);
      }
    }
    setFilters(temp);
    // console.log(temp);

    let newList = filterPlainArray(recordList, { size: temp });
    console.log(filterInput);

    var fuse = new Fuse(newList, options);

    if (filterInput != "") {
      newList = fuse.search(filterInput);
      console.log(newList);
    }

    setFilteredList(newList);
  }, [tags, filterInput]);

  useEffect(() => {
    // Retrieve and dispatch to redux on landing
  }, []);
  return (
    <div className="p-8 w-full">
      <RecordRow item={gridHeaderValues} />
      {filteredList.map((record) => (
        <RecordRow item={record} />
      ))}
    </div>
  );
};

export default RecordList;
