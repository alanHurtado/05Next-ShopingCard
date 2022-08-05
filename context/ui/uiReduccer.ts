import { UiState } from '.';
type UiActionType = |{ type: 'UI-ToggleMenu' } 

export const uiReduccer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case 'UI-ToggleMenu':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };
    default:
      return state;
  }
};