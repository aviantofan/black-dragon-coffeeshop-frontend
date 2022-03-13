const signupState = {
  results: {},
  token: null,
  email: '',
  isLoading: false,
  isError: false,
  errorMessage: ''
};

const auth = (state = signupState, action) => {
  switch (action.type) {
    case 'AUTH_REGISTER_PENDING': {
      state.results = {};
      state.isLoading = true;
      state.isError = false;
      return { ...state };
    }
    case 'AUTH_REGISTER_FULFILLED': {
      // const { data } = action.payload;
      state.isLoading = false;
      // state.results = { ...data.results };
      state.email = action.email;
      state.isError = false;
      return { ...state };
    }
    case 'AUTH_REGISTER_REJECTED': {
      state.isLoading = false;
      state.isError = true;
      return { ...state };
    }
    case 'AUTH_LOGIN_PENDING': {
      state.results = {};
      state.isLoading = true;
      state.isError = false;
      return { ...state };
    }
    case 'AUTH_LOGIN_FULFILLED': {
      const { data } = action.payload;
      state.token = data.result.token;
      state.isLoading = false;
      state.isError = false;
      window.localStorage.setItem('token', state.token);
      return { ...state };
    }
    case 'AUTH_LOGIN_REJECTED': {
      const { message } = action.payload.response.data;
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = message;
      return { ...state };
    }
    case 'AUTH_USER_PENDING': {
      state.results = {};
      state.isLoading = true;
      state.isError = false;
      return { ...state };
    }
    case 'AUTH_USER_FULFILLED': {
      const { data } = action.payload;
      state.results = data.results;
      state.isLoading = false;
      state.isError = false;
      return { ...state };
    }
    case 'AUTH_USER_REJECTED': {
      state.isError = true;
      state.isLoading = false;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default auth;
