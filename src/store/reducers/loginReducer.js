import * as actionTypes from '../actions/loginActionTypes';


const initialState = {
  // user: localStorage.getItem('user') ? localStorage.getItem('user') : null , 
  // access: localStorage.getItem('access') ? localStorage.getItem('access') : null
    user: '6d84fcdc-fe5a-4b93-977c-c22ba3aadf56',
    access: 'blalbalblalbalbalsvlsdfñwfc'
}

const reducer = (state = initialState, action) => {
  
  switch(action.type){
    case (actionTypes.LOGIN):
      localStorage.setItem('user', action.user.user);
      return {
        ...state
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