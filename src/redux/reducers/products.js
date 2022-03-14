const productDetailState = {
  results: {},
  isLoading: false,
  isError: false
};

export const productDetail = (state = productDetailState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_DETAIL_PENDING': {
      state.isError = false;
      state.isLoading = true;
      state.results = {};
      return { ...state };
    }
    case 'GET_PRODUCT_DETAIL_FULFILLED': {
      const { data } = action.payload;
      state.isError = false;
      state.isLoading = false;
      state.results = data.result;
      return { ...state };
    }
    case 'GET_PRODUCT_DETAIL_REJECTED': {
      state.isError = true;
      state.isLoading = false;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
