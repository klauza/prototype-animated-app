
import { UPDATE_SUBPAGE_ID, UPDATE_ANIMATION_DIRECTION_ID, UPDATE_SUBPAGE_SCROLL, UPDATE_TOOL_BOOLEAN } from './types';

// ?: method for updating vertical page location (which is non-router applicable)
// how it works: components read it's ID and position the horizontal container
// vars: data = routes: {home, about, ...}
export const update_Subpage_Id = (data) => async dispatch => {
  dispatch({
    type: UPDATE_SUBPAGE_ID,
    payload: data
  })
}

export const update_subpage_scroll = (data) => async dispatch => {
  dispatch({
    type: UPDATE_SUBPAGE_SCROLL,
    payload: data
  })
}

// ?: for updating the current direction of application movement, whether its right-left or up-down
// how it works: the method is passing the direction info to animate components
// vars: data = animationDirection="direction"
export const updt_animation_direction = (data) => async dispatch => {
  dispatch({
    type: UPDATE_ANIMATION_DIRECTION_ID,
    payload: data
  })
}

export const update_tool_bool = (data) => async dispatch => {
  dispatch({
    type: UPDATE_TOOL_BOOLEAN,
    payload: data
  })
}