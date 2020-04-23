
import { UPDATE_SUBPAGE_ID, UPDATE_SUBPAGE_SCROLL } from '../actions/types';
import { UPDATE_ANIMATION_DIRECTION_ID } from '../actions/types';
import { UPDATE_TOOL_BOOLEAN } from '../actions/types';

const initialState = {
  routes: {
    home: 0,
    about: 0,
    web_dev: 0
  },
  animationDirection: 'to_down',
  scroll: {
    web_projects: 0
  },
  tools: {
    music: false,
    dark_mode: false,
    pc_mouse_move: false
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

    case UPDATE_TOOL_BOOLEAN:
      return{
        ...state,
        tools: action.payload
      }



    default:
      return state;
  }
}