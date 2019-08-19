import * as redux from "redux";

//actions we are using
export const C_INC = "counter/inc";
export const D_INC = "counter/dec";

// js reduce a array
// input as state and action
const intialState = {
  count: 0
};
const reducer = (state = intialState, action) => {
  // type was *
  switch (action.type) {
    case C_INC: {
      return { ...state, count: state.count + 1 };
      //break;
    }
    case D_INC: {
      return { ...state, count: state.count - 1 };
      //break;
    }
    default: {
      return state;
    }
  }
};

// store was created
const store = redux.createStore(reducer);

export default store;
