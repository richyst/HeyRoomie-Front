import * as actionTypes from '../actions/loginActionTypes';


const initialState = {
  // user: localStorage.getItem('user') ? localStorage.getItem('user') : null , 
  // access: localStorage.getItem('access') ? localStorage.getItem('access') : null
    user: '3cd93ef9-245b-4a86-838a-b61b6b1ff63e',
    access: 'blalbalblalbalbalsvlsdfñwfc'
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case (actionTypes.LOGIN):
      localStorage.setItem('user', action.user.user);
      localStorage.setItem('access', action.user.access);
      return {
        ...state,
        user: action.user.user,
        access:  action.user.access
      };
    case(actionTypes.LOGOUT):
      localStorage.removeItem('user');
      localStorage.removeItem('access');
      return {
        ...state,
        user: null,
        access: null
      };
    default:
      return state;
  }
}
export default reducer;