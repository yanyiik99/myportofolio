import * as CONST from './constants'

export const setColor = (payload) => {
  return {
    type: CONST.SET_COLOR,
    payload: payload,
  }
}


