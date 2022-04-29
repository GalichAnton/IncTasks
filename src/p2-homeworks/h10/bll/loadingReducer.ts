export interface IState {
  loading: boolean;
}
const initState = {
  loading: false,
};
export interface LoadingActionType {
  type: "CHANGE_STATUS";
}
export const loadingReducer = (
  state: IState = initState,
  action: LoadingActionType
): IState => {
  // fix any
  switch (action.type) {
    case "CHANGE_STATUS": {
      return { ...state, loading: !state.loading };
    }

    default:
      return state;
  }
};

export const loadingAC = (): LoadingActionType => {
  return { type: "CHANGE_STATUS" };
}; // fix any
