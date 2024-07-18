//create reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;

    case "DEC":
      return state - 1;

    case "RESET":
      return 0;

    case "SET":
      return 200;

    default:
      return state;
  }
};

//export
export default counterReducer;
