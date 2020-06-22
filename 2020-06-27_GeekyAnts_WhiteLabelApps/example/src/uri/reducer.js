import initialState from "./reducer";

export default (state = initialState, {type, ...extras}) => {
  switch (type) {
    default:
      return state;
  }
};
