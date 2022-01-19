import * as types from "./../constants/ActionType";

var initialState = {
  listPost: [],
};

const posts = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case types.LIST_POST:
      console.log("vao");
      return {
        ...state,
        listPost: action.data,
      };
    default:
      return { ...state };
  }
};

export default posts;
