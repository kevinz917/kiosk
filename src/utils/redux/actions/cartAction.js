const ADD_TO_CART = (item) => {
  return {
    type: "ADD_TO_CART",
    item,
  };
};

const REMOVE_FROM_CART = (item) => {
  return {
    type: "REMOVE_FROM_CART",
    item,
  };
};

export { ADD_TO_CART, REMOVE_FROM_CART };
