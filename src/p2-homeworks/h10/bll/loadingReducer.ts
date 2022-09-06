const initState = {
  isLoading: false,
};
export type stateType = typeof initState;

export const loadingReducer = (
  state: stateType = initState,
  action: ActionType
): stateType => {
  switch (action.type) {
    case "SET-LOADING": {
      return { ...state, isLoading: !state.isLoading };
    }
    default:
      return state;
  }
};
type ActionType = ReturnType<typeof loadingAC>;
export const loadingAC = () => {
  return {
    type: "SET-LOADING",
  } as const;
};
