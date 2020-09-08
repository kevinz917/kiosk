import { Foodmaster } from "../../data/foodmaster";

const foodReducer = (state = Foodmaster, action) => {
  let index = -1;
  switch (action.type) {
    case "ADD_TO_CART":
      index = -1;

      for (var i = 0; i < state.length; i++) {
        if (state[i].name == action.item.name) {
          index = i;
        }
      }

      console.log(index);

      if (index == -1) {
        return [...state, { ...action.item, count: 1 }];
      }

      //   already in array
      return state.map((item, i) => {
        if (i !== index) {
          // This isn't the item we care about - keep it as-is
          return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          count: state[index].count + 1,
        };
      });

    case "REMOVE_FROM_CART":
      index = -1;

      for (var i = 0; i < state.length; i++) {
        if (state[i].name == action.item.name) {
          index = i;
        }
      }

      console.log(index);

      if (index == -1) {
        return state;
      }

      return state.map((item, i) => {
        if (i !== index) {
          // This isn't the item we care about - keep it as-is
          return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          count: state[index].count - 1,
        };
      });

    default:
      return state;
  }
};

export { foodReducer };
