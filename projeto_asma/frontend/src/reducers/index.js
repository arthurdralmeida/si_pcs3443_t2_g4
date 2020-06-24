import auth from './auth'; // added

export default combineReducers({
  auth
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_SUCCESS) {
      state = undefined;
    }
    return appReducer(state, action);
  };
  
  export default rootReducer;
