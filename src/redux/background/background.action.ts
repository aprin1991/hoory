import backgroundActionTypes from "./background.types";

export const setColor = (color: string) => {
  return {
    type: backgroundActionTypes.SET_COLOR,
    payload: color,
  };
};
