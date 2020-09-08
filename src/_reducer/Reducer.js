export const initialState = {
  user: null,
  authenticated: false,
  loading: true,
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        loading: false,
      };
    case "SET_NO_AUTH":
      return {
        ...state,
        user: action.payload,
        authenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};
