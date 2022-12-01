import { states } from "./initialStates";
import * as CONST from './constants';

const reducer = (state = states, action) => {
  const { type, payload } = action;

  switch(type){
    case CONST.SET_COLOR:
      return {
        ...state.users,
        blue: payload.blue,
        red: payload.red,
        purple: payload.purple,
        green: payload.green,
        datas: payload.datas
      }
    default: 
      return state;
  }
}

export default reducer;