const mockRecord = [
  {
    id: 1847394,
    amount: 81.24,
    items: [{ burger: 1 }, { sandwich: 1 }, { soup: 1 }],
    size: "medium",
    method: "Credit",
    time: "09/17/2020/5:20pm",
  },
  {
    id: 2674833,
    amount: 14.23,
    items: [{ sandwich: 1 }],
    size: "small",
    method: "Cash",
    time: "09/17/2020/3:20pm",
  },
  {
    id: 18950374,
    amount: 124.23,
    items: [{ sandwich: 1 }],
    size: "small",
    method: "Cash",
    time: "09/17/2020/3:20pm",
  },
  {
    id: 2674833,
    amount: 14.23,
    items: [{ sandwich: 1 }],
    size: "small",
    method: "Cash",
    time: "09/17/2020/3:20pm",
  },
  {
    id: 18950374,
    amount: 124.23,
    items: [{ sandwich: 1 }],
    size: "small",
    method: "Cash",
    time: "09/17/2020/3:20pm",
  },
  {
    id: 2674833,
    amount: 14.23,
    items: [{ sandwich: 1 }],
    size: "small",
    method: "Cash",
    time: "09/17/2020/3:20pm",
  },
  {
    id: 18950374,
    amount: 124.23,
    items: [{ sandwich: 1 }],
    size: "small",
    method: "Cash",
    time: "09/17/2020/3:20pm",
  },
];

const SET_TAGS = (payload) => {
  return { type: "SET_TAGS", tags: payload };
};

const SET_FILTER_INPUT = (payload) => {
  return { type: "SET_FILTER_INPUT", input: payload };
};

const filterTags = [
  { keyword: "small", value: false },
  { keyword: "medium", value: false },
  { keyword: "large", value: false },
];

const tagReducer = (state = filterTags, action) => {
  switch (action.type) {
    case "SET_TAGS":
      return action.tags;
    default:
      return state;
  }
};

const filterInputReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_FILTER_INPUT":
      return action.input;
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

export {
  recordReducer,
  SET_TAGS,
  tagReducer,
  filterInputReducer,
  SET_FILTER_INPUT,
};
