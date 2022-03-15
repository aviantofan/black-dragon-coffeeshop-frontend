const intialState = {
  results: []
};

const addCharts = (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_CHARTS': {
      const { data } = action.payload;
      state.results = [...state.results, data];
      return { ...state };
    }
    case 'DELETE_RESULTS': {
      state.results = [];
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default addCharts;
