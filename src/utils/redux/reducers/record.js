const mockRecord = [
  {
    id: 1847394,
    amount: 81.24,
    items: [{ burger: 1 }, { sandwich: 1 }, { soup: 1 }],
    size: "medium",
  },
  {
    id: 2674833,
    amount: 14.23,
    items: [{ sandwich: 1 }],
    size: "small",
  },
];

const SET_TAGS = (payload) => {
  return { type: "SET_TAGS", tags: payload };
};

const tagReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_TAGS":
      return action.tags;
    default:
      return state;
  }
};

const recordReducer = (state = mockRecord, action) => {
  switch (action.type) {
    case "ADD_RECORD":
      return [...state, action.record];
    case "DELETE_RECORD":
      // takes in recordID
      return state;
    default:
      return state;
  }
};

export { recordReducer, SET_TAGS, tagReducer };
