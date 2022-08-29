import { UserType } from "../HW8";

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  switch (action.type) {
    case "sort": {
      const copyState: UserType[] = JSON.parse(JSON.stringify(state));
      if (action.payload === "up") {
        copyState.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        copyState.sort((a, b) => b.name.localeCompare(a.name));
      }
      return copyState;
    }
    case "check": {
      return state.filter((el) => el.age >= action.payload);
    }
    default:
      return state;
  }
};

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };
