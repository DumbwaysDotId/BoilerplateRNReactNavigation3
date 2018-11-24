const initialValue = {
  number: 1
}

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'INC':
      return {
        number: action.payload
      };

    default:
      return state;
  }
}
