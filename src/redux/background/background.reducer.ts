// setColor
import backgroundActionTypes from "./background.types";
const INITIAL_STATE = {
  color: "white",
};
const ColorReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case backgroundActionTypes.SET_COLOR:
      return { ...state, color: action.payload };

    default:
      return state;
  }
};

export default ColorReducer;
