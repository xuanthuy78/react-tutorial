// 4.import constant
import * as types from "./../constants/ActionType";

export const listPosts = (data) => {
  return {
    type: types.LIST_POST,
    data,
  };
};
