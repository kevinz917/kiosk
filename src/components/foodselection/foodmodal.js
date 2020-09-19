import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

// Redux
import { useDispatch } from "react-redux";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../../utils/redux/actions/cartAction";

// Styles
import "../../styles/tailwind.css";

// Functions

const customStyles = {
  content: {
    width: "70%",
    height: "50%",
    margin: "auto",
    border: "solid",
    borderRadius: "20px",
    borderColor: "grey",
  },
};

const Foodmodal = (props) => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // Redux
  const dispatch = useDispatch();

  //   Modal control
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="cursor-pointer">
      <div
        className="p-4 shadow-md border-4 border-gray-500 rounded-lg"
        onClick={openModal}
      >
        <div className="h-64">
          <img className="h-full rounded-lg" src={props.item.image} />
        </div>
        {props.item.count != 0 ? (
          <div className="float-right p-2 bg-gray-300">{props.item.count}</div>
        ) : null}
        <br />
        <div className="text-2xl font-bold">{props.item.name}</div>
        <div>{props.item.price} </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="h-64">
          <img className="h-full rounded-lg" src={props.item.image} />
        </div>
        <div className="text-2xl font-bold">{props.item.name}</div>
        <div className="text-xl">{props.item.price}</div>
        <div className="flex flex-row">
          <button onClick={closeModal}>close</button>
          {props.item.count == 0 ? (
            <button
              onClick={() => dispatch(ADD_TO_CART(props.item))}
              className="p-4 bg-purple-400 text-white font-semibold text-xl"
            >
              Add to cart
            </button>
          ) : (
            <div className="flex flex-row items-center">
              <button
                className="p-4 bg-gray-200"
                onClick={() => dispatch(REMOVE_FROM_CART(props.item))}
              >
                -
              </button>
              <div className="p-4 bg-gray-200">{props.item.count}</div>
              <button
                className="p-4 bg-gray-200"
                onClick={() => dispatch(ADD_TO_CART(props.item))}
              >
                +
              </button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Foodmodal;
