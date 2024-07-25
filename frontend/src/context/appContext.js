import { useReducer, useContext, useEffect } from "react";
import React from "react";
import reducer from "./reducer";
import axios from "axios";
import {
  HELLO_WORLD_BEGIN,
  HELLO_WORLD_FAILURE,
  HELLO_WORLD_SUCCESS,
} from "./actions";

export const initialState = {
  loading: false,
  helloWorld: null,
};

const AppContext = React.createContext();
const baseUrl = process.env.REACT_APP_API_URL;

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getHelloWorld = async () => {
    dispatch({ type: HELLO_WORLD_BEGIN });
    try {
      const response = await axios.get(`${baseUrl}/sample/hello-world`);
      const { msg } = response.data;
      dispatch({
        type: HELLO_WORLD_SUCCESS,
        payload: { message: msg },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: HELLO_WORLD_FAILURE,
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getHelloWorld,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
