
import { UPDATE_SUBPAGE_ID } from '../actions/types';

const initialState = {
  routes: {
    home: 0,
    web_dev: 0
  }
}

export default (state = initialState, action) => {
  switch(action.type){

    case UPDATE_SUBPAGE_ID:
      return{
        ...state,
        routes: action.payload
      }



    default:
      return state;
  }
}