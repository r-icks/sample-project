import {
  HELLO_WORLD_BEGIN,
  HELLO_WORLD_SUCCESS,
  HELLO_WORLD_FAILURE,
} from "./actions";
import { initialState } from "./appContext";

const reducer = (state, action) => {
  switch (action.type) {
    case HELLO_WORLD_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case HELLO_WORLD_SUCCESS:
      return {
        ...state,
        loading: false,
        helloWorld: action.payload.message,
      };
    case HELLO_WORLD_FAILURE:
      return {
        ...state,
        loading: false,
        helloWorld: "Error fetching data",
      };
    default:
      throw new Error(`no such action: ${action.type}`);
  }
};

export default reducer;
