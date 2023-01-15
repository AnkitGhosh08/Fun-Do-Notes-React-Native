const initialState = {
  toggle: false,
  newLabel: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        toggle: !state.toggle,
      };

    case 'LABELDATA':
      return {
        ...state,
        newLabel: action.payload,
      };
    default:
      return state;
  }
};
