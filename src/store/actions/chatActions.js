import * as actionTypes from './chatActionTypes';

export const userClicked = (id) => {
  return {
    type: actionTypes.USER_CLICKED,
    id: id
  }
}
