
import { UPDATE_SUBPAGE_ID, UPDATE_ANIMATION_DIRECTION_ID } from './types';

export const update_Subpage_Id = (data) => async dispatch => {
  
  dispatch({
    type: UPDATE_SUBPAGE_ID,
    payload: data
  })
}

export const updt_animation_direction = (data) => async dispatch => {
  
  dispatch({
    type: UPDATE_ANIMATION_DIRECTION_ID,
    payload: data
  })
}