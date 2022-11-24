// import {getBussines} from '../../Screens/SigIn/Api/getBussines';
import {getToken} from '../../utils/storage/getTokenAndBussines';
import {GET_TOKEN} from '../actionTypes/actionTypesGlobal';
// import {GET_TOKEN} from '../actionsTypes/actionTypesGlobal';

export const fetchToken = dispatch => {
  return async () => {
    const data = await getToken();
    dispatch({type: GET_TOKEN, payload: data});
  };
};

export const setToken = dispatch => {
  return async token => {
    dispatch({type: GET_TOKEN, payload: token});
  };
};

// export const getBussinesAction = dispatch => {
//   return async () => {
//    //  const data = await getBussines();
//     const arrayParamUrl = [];
//     data.forEach(element => {
//       const point = element.link.split('').findIndex(e => e === '.');
//       const word = element.link.slice(8, point);
//       arrayParamUrl.push(word);
//     });
//   };
// };
