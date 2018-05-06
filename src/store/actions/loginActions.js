import * as actionTypes from './loginActionTypes';

export const login = ( user ) => {
  return {
    type: actionTypes.LOGIN,
    user: user
  }
}

export const logout = () => {
  return {
    type: actionTypes.LOGOUT
  }
}