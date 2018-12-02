const initialValue = {
  data: [],
  isLoading: false,
  isError: false,
  isFinish: false
}

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_CONTACT_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_CONTACT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFinish: true,
        data: action.payload.data
      };

    case 'GET_CONTACT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: 'Error Network'
      };

    default:
      return state;
  }
}
