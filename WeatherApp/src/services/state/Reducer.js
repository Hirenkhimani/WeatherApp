export const actions = {
  SET_FORCAST: 'set_forcast',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_FORCAST:
      return {
        ...state,
        forcast: action.payload,
      };
    default:
      return state;
  }
};