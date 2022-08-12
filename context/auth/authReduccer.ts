import { AuthState } from "./";
import { IUser } from "../../interfaces/user";
type AuthActionType = { type: "[Auth]-Login"; payload: IUser } | { type: "[Auth]-Logout" };

export const authReduccer = (state: AuthState, action: AuthActionType): AuthState => {
  switch (action.type) {
    case "[Auth]-Login":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case "[Auth]-Logout":
      return {
        ...state,
        user: undefined,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
