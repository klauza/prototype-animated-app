
import { UPDATE_SUBPAGE_ID, UPDATE_SUBPAGE_SCROLL } from '../actions/types';
import { UPDATE_ANIMATION_DIRECTION_ID } from '../actions/types';

const initialState = {
  routes: {
    home: 0,
    about: 0,
    web_dev: 0
  },
  animationDirection: 'to_down',
  scroll: {
    web_projects: 0
  }
}

export default (state = initialState, action) => {
  switch(action.type){

    case UPDATE_SUBPAGE_ID:
      return{
        ...state,
        routes: action.payload
      }

    case UPDATE_SUBPAGE_SCROLL:
      return{
        ...state,
        scroll: action.payload
      }

    case UPDATE_ANIMATION_DIRECTION_ID:
      return{
        ...state,
        animationDirection: action.payload
      }



    default:
      return state;
  }
}