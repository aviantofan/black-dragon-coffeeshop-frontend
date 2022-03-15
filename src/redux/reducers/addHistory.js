const intialState = {
  results: {},
  isLoading: false,
  isError: false
};

const addHistory = (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_HISTORY_PENDING': {
      state.isError = false;
      state.isLoading = true;
      state.results = {};
      return { ...state };
    }
    case 'ADD_HISTORY_FULFILLED': {
      const { data } = action.payload;
      state.isError = false;
      state.isLoading = false;
      state.results = data.result;
      return { ...state };
    }
    case 'ADD_HISTORY_REJECTED': {
      state.isLoading = false;
      state.isError = true;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default addHistory;
