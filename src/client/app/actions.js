export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export function addTodo(text, id) {
  return {
    type: ADD_TODO,
    text: text,
    id: id
  };
};

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id: id
  };
};

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  };
};
