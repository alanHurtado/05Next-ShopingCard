import { FC, ReactNode, useReducer } from "react";
import { uiReduccer, UiContext } from "./";

export interface UiState {
  isMenuOpen: boolean;
}
interface Props {
  children: ReactNode;
}
const Ui_INITIAL_STATE: UiState = {
  isMenuOpen: false,
};

export const UiProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReduccer, Ui_INITIAL_STATE);

  const toggleSideMenu = () => {
    dispatch({ type: "UI-ToggleMenu" });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,
        //Methods
        toggleSideMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
