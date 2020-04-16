/**
 * ************************************
 *
 * @module  userActions.js
 * @author ratemylandlord
 * @date 04/16/2020
 * @description Action Creators for userReducer
 *
 * ************************************
 */

// import actionType constants
import axios from 'axios';
import * as types from '../constants/actionTypes';

export const verifyLogin = ({currView}) => (dispatch) => {
  let view;
  if (currView === 'login') {
    view = '/login';
  } else if (currView === 'signup') {
    view = '/signup';
  }
  axios
    .get(view)
    .then(({ data }) => {
      // if (!data.isLoggedIn) {
      //   return dispatch({
      //     type: types.USER_LOGOUT,
      //     payload: data
      //   });
      // }
      return dispatch({
        type: types.USER_LOGIN,
        payload: data
      });
    })
    .catch((err) => console.log(err));
};
