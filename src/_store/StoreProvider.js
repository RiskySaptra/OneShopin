import React, { createContext, useReducer } from "react";
import { Reducer, initialState } from "../_reducer/Reducer";

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default StoreProvider;
