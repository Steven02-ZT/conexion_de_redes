import {
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  GET_TOKEN_AUTHENTICATION_REQUEST,
  GET_TOKEN_AUTHENTICATION_SUCCESS,
  GET_USERINFO_REQUEST,
  GET_USERINFO_SUCCESS,
  ERROR,
} from "../Constants/User_constants";

import axios from "axios";

const host = 'https://0ftufth33a.execute-api.us-east-2.amazonaws.com/developer'

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT_REQUEST });
    const {data} = await axios.post(`${host}/auth/logout`)
    const url = JSON.parse(data['body']).url

    localStorage.removeItem("userInfo");
    localStorage.removeItem("tokens");

    dispatch({
      type: USER_LOGOUT_SUCCESS,
      payload: "Close session success",
    });

    window.location.href = url;
  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload: error.message,
    });
  }
};

export const handleTokenExchange = (authorizationCode) => async (dispatch) => {
  try {
    const tokenExchange = async () => {
      dispatch({ type: GET_TOKEN_AUTHENTICATION_REQUEST });

      let jsondata = { code: authorizationCode };
      let url =
        `${host}/auth/token`;
      const { data } = await axios.post(url, jsondata,{
        "headers":{
          "Content-Type": "application/json"
        }
      });

      dispatch({
        type: GET_TOKEN_AUTHENTICATION_SUCCESS,
        payload:JSON.parse(data["body"]),
      });

      var date = new Date()
      var tokens = JSON.parse(data["body"])
      tokens['login_date'] = date
      tokens['hour_time'] = `${date.getHours()}:${date.getMinutes()}`;
      localStorage.setItem("tokens", JSON.stringify(tokens));
      info(tokens.access_token, tokens.id_token);
    };

    const info = async (token, idtoken) => {
      dispatch({ type: GET_USERINFO_REQUEST });
      let jsondata = { token: token };
      let url =
        `${host}/auth/info`;
      const { data } = await axios.post(url, jsondata,{
        "headers":{
          "Authorization":idtoken,
          "Content-Type": "application/json"
        }
      });

      dispatch({
        type: GET_USERINFO_SUCCESS,
        payload: data["body"],
      });

      if (data['body']) {
        localStorage.setItem("userInfo", data["body"]);
      }
    };

    tokenExchange()
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message ? error.message : error,
    });
  }
};

export const updateTokens = async() => {
  try {

      var refresh = JSON.parse(localStorage.getItem('tokens')).refresh_token
      var first_log = JSON.parse(localStorage.getItem('tokens')).login_date
      var date = new Date()
      
      
      let jsondata = { "body":{
        "refresh_token": refresh
      } };
      const { data } = await axios.post(`${host}/auth/update`, jsondata,{
        "headers":{
          "Content-Type": "application/json"
        }
      });

      var tokens_updated = JSON.parse(data["body"])
      tokens_updated['refresh_token'] = refresh
      tokens_updated['login_date'] = first_log
      tokens_updated['hour_time'] = `${date.getHours()}:${date.getMinutes()}`;
      localStorage.setItem("tokens", JSON.stringify(tokens_updated));
  }catch (error) {
    console.log(error)
  }
};

export const hasPassedOneMonth = () => {
  try {
    const tokens = JSON.parse(localStorage.getItem('tokens')); // los tokens desde el almacenamiento

  if (tokens && tokens.login_date) {
    const firstLoginTimestamp = new Date(tokens.login_date);
    const currentTimestamp = new Date();
    const millisecondsInAMonth = 30 * 24 * 60 * 60 * 1000; // Aproximadamente un mes en milisegundos

    const timeDifference = currentTimestamp - firstLoginTimestamp;
    const comparation = timeDifference >= millisecondsInAMonth ? true : false
    console.log(comparation)
    return comparation;
  }

    return true;
  } catch (error) {
    console.log(error)
  }
}


export const hasPassedAHour = () => {
  try {
    const tokens = JSON.parse(localStorage.getItem('tokens'));

  if (tokens && tokens.hour_time){
    const latestHour = tokens.hour_time.split(':');
    const latest_date = new Date()
    latest_date.setHours(parseInt(latestHour[0]))
    latest_date.setMinutes(parseInt(latestHour[1]))

    const current_date = new Date();
    const hour_comparation = current_date > latest_date ? true : false

    // Verificar si ha pasado una hora o más
    if (hour_comparation) {
      // Ha pasado una hora o más
      return true;
    } else {
      // No ha pasado una hora
      return false;
    }
  }

  return false;
  } catch (error) {
    console.log(error)
  }
}