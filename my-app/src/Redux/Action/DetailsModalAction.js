let isOpenDetails = (id) => {
  return {
    type: "detailsModal/open",
    payload: parseInt(id),
  };
};

let isCloseDetails = () => {
  return {
    type: "detailsModal/close",
  };
};

export { isOpenDetails, isCloseDetails };
