import { UserType } from "../HW8";
interface IAction {
  type: "sort" | "check";
  payload: "up" | "down" | number;
}
export const homeWorkReducer = (
  state: UserType[],
  action: IAction
): UserType[] => {
  switch (action.type) {
    case "sort": {
      if (action.payload === "up") {
        const newState = [...state];
        return newState.sort((a, b) => (a.name > b.name ? 1 : -1));
      }
      if (action.payload === "down") {
        const newState = [...state];
        return newState.sort((a, b) => (a.name < b.name ? 1 : -1));
      }
      return state;
    }
    case "check": {
      return state.filter((user) => user.age > action.payload);
    }
    default:
      return state;
  }
};
