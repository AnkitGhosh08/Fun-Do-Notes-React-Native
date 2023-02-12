const initialState = {
  toggle: false,
  newLabel: [],
  localization: false,
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

    case 'LOCALIZATION':
      return {
        localization: !state.localization,
      };

    default:
      return state;
  }
};
