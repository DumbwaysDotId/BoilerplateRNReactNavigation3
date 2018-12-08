const initialValue = {
  data: [
    {
      name: 'Hamdan',
      address: 'Cirebon'
    },
    {
      name: 'Diki',
      address: 'Tuban'
    },
    {
      name: 'Arif',
      address: 'Tegal'
    },
    {
      name: 'Tama',
      address: 'Tangerang'
    },
    {
      name: 'Rifki',
      address: 'Pekalongan'
    }
  ],
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

    case 'CREATE_CONTACT': 
      return {
        ...state,
        data: [
          ...state.data,
          action.payload
        ]
      }

    default:
      return state;
  }
}
