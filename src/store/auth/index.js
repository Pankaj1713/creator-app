import { toast } from "react-toastify";
import { LOGOUT_SUCCESS, SIGNUP_SUCCESS } from "./actions";

const initialState = {
  accessToken: "",
  profileCompleted: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return { ...state, ...action.payload };
    case LOGOUT_SUCCESS:
      toast.error("Logout success!");
      return initialState;
    default:
      return state;
  }
};
