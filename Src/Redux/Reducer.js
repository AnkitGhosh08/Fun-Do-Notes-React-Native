const initialState = {
  toggle: false,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        toggle: !state.toggle,
      };
    default:
      return state;
  }
};
