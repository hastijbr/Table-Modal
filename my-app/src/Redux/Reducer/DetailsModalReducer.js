const initialState = {
  isOpen: false,
  id: 0,
};

export default function DetailsModalReducer(state = initialState, action) {
  if (action.type === "detailsModal/open") {
    return {
      ...state,
      isOpen: true,
      id: action.payload,
    };
  } else if (action.type === "detailsModal/close") {
    return {
      ...state,
      isOpen: false,
      id: 0,
    };
  }
  return state;
}
