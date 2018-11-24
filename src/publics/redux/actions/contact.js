export const inc = (number) => {
  return {
    type: 'INC',
    payload: number
  }
}