import React from "react";
import { useSelector } from "react-redux";

const RecordRow = (props) => {
  return (
    <div className="grid grid-cols-4 bg-gray-200 w-full mb-1 mt-1 p-3 cursor-pointer">
      <div>{props.item.id}</div>
      <div>{props.item.amount}</div>
    </div>
  );
};

const RecordList = () => {
  const filteredHistory = useSelector((state) => state.recordReducer);
  console.log(filteredHistory);
  return (
    <div className="p-8 w-full">
      {filteredHistory.map((record) => (
        <RecordRow item={record} />
      ))}
    </div>
  );
};

export default RecordList;
