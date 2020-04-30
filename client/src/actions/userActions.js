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

export const verifyLogin = () => (dispatch) => {
  // // const body = JSON.stringify({ user });
  // fetch('/login', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'Application/JSON',
  //     Accept: 'Application/JSON'
  //   },
  //   body: JSON.stringify()
  // })
  //   .then((res) => {
  //     // res.json();
  //     console.log('ressssss', res);
  //     // console.log('jsoonnnn', res.json());
  //   })
  //   .then((data) => {
  //     console.log('checking datttaaa', data);
  //     if (!data) {
  //       // remove user from local storage to log user out
  //       localStorage.removeItem('user');
  //       return dispatch({
  //         type: types.USER_LOGOUT,
  //         payload: data
  //       });
  //     }
  //     return dispatch({
  //       type: types.USER_LOGIN,
  //       payload: data
  //     });
  //   })
  //   .catch((err) => console.log(err));

  axios
    .post('/login')
    .then(({ data }) => {
      console.log('checking datttaaa', data);
      if (!data.isLoggedIn) {
        // remove user from local storage to log user out
        localStorage.removeItem('isLoggedIn');
        return dispatch({
          type: types.USER_LOGOUT,
          payload: data
        });
      }
      localStorage.getItem('isLoggedIn');
      return dispatch({
        type: types.USER_LOGIN,
        payload: data
      });
    })
    .catch((err) => console.log(err));
};
