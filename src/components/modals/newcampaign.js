import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDropzone } from "react-dropzone";
import Dropzone from "../dropzone/dropzone";

const input = "p-3 bg-gray-200 rounded-md mb-4 w-6/12";

const modalSetting = {
  content: {
    width: "600px",
    height: "600px",
    marginTop: "100px",
    marginLeft: "auto",
    marginRight: "auto",
    border: "solid",
    borderWidth: "2px",
    borderRadius: "20px",
    borderColor: null,
    boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.25)",
  },
};

const NewcampaignModal = (props) => {
  const [fields, setFields] = useState({
    eventname: "",
    items: "",
    other: "",
    price: "",
  });

  const [eventname, setEventname] = useState("");
  const [other, setOther] = useState("");
  const [price, setPrice] = useState("");

  //   General hook function
  const onChange = (event, changeFunction) => {
    changeFunction(event.target.value);
  };

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onAfterOpen={props.afterOpenModal}
      onRequestClose={props.closeModal}
      style={modalSetting}
      contentLabel="Example Modal"
    >
      <div className="relative flex flex-col h-full">
        <div className="font-bold text-2xl mb-3">
          Create bulk order campaign
        </div>
        <input
          className={input}
          placeholder="Event name"
          value={eventname}
          onChange={(event) => onChange(event, setEventname)}
        />
        <input className={input} placeholder="Items" />
        <input
          className={input}
          placeholder="Other"
          value={other}
          onChange={(event) => onChange(event, setOther)}
        />
        <input
          className={input}
          placeholder="Price"
          value={price}
          onChange={(event) => onChange(event, setPrice)}
        />
        <Dropzone width="100%" height="200px" text="Upload campaign image" />
        <div className="flex flex-row absolute bottom-0 left-0">
          <button
            className="p-3 bg-gray-200 rounded-md mr-3"
            onClick={props.closeModal}
            style={{ width: "150px" }}
          >
            Close
          </button>
        </div>
        <div className="absolute bottom-0 right-0">
          <button
            className="p-3 bg-green-400 rounded-md font-bold text-white"
            onClick={props.closeModal}
            style={{ width: "150px" }}
          >
            Create
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default NewcampaignModal;
