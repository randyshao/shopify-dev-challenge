export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_NOMINATION':
      return {
        ...state,
        nominations: state.nominations.filter(
          (nomination) => nomination.imdbID !== action.payload
        ),
      };
    case 'ADD_NOMINATION':
      return {
        ...state,
        nominations: [action.payload, ...state.nominations],
      };
    default:
      return state;
  }
};
