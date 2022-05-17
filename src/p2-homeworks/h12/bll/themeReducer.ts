export type ThemeType = "dark" | "red" | "some";
export interface ThemeActionType {
  type: "CHANGE_THEME";
  payload: ThemeType;
}
interface IState {
  theme: ThemeType;
}
const initState: IState = {
  theme: "some",
};

export const themeReducer = (
  state: IState = initState,
  action: ThemeActionType
): IState => {
  // fix any
  switch (action.type) {
    case "CHANGE_THEME": {
      return { ...state, theme: action.payload };
    }
    default:
      return state;
  }
};

export const changeThemeAC = (theme: ThemeType): ThemeActionType => {
  return {
    type: "CHANGE_THEME",
    payload: theme,
  };
}; // fix any
