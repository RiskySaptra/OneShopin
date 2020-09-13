export const initialState = {
  user: null,
  authenticated: false,
  loading: true,
  errorStatus: false,
  errorMsg: null,
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        loading: false,
        error: false,
        errorMsg: null,
      };
    case "SET_NO_AUTH":
      return {
        ...state,
        user: action.payload,
        authenticated: false,
        loading: false,
        error: false,
        errorMsg: null,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload.errorStatus,
        errorMsg: action.payload.errorMsg,
      };
    default:
      return state;
  }
};
