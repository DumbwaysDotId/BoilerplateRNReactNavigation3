export const inc = (number) => {
  return {
    type: 'INC',
    payload: number
  }
}

export const dec = (number) => {
  return {
    type: 'DEC',
    payload: number
  }
}