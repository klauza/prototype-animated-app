
import { UPDATE_SUBPAGE_ID } from './types';

export const update_Subpage_Id = (data) => async dispatch => {
  
  dispatch({
    type: UPDATE_SUBPAGE_ID,
    payload: data
  })
}