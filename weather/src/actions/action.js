import axios from "axios";
import fetch from 'cross-fetch';

export const REQUEST_POST = 'REQUEST_POST';
export function requestPost() {
  return {
    type: REQUEST_POST
  }
}

export const SUCCESS_POST = 'SUCCESS_POST';
export function successPost(weather) {
  return {
    type: SUCCESS_POST,
    weather
  }
}

export const FAILED_POST = 'FAILED_POST';
export function failedPost(error) {
  return {
    type: FAILED_POST,
    error
  }
}


export function fetchPost(code) {
  return (dispatch) => {
    dispatch(requestPost);

    const url = 'http://www.weather.com.cn/data/sk/101010100.html';
    return fetch(url)
    .then((response) => {
      console.log('response====', response);
      return response => response.json()
    })
    .then(json => dispatch(successPost(json)))
    .catch(err => dispatch(failedPost(err)));
  }
}


const API_KEY = "6a78596d062df78380eff5944c4e5567";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  var instance = axios.create({
    baseURL:"http://www.weather.com.cn/data/sk/101010100.html",
    timeout:1000,
    method: 'get',
    headers: {'Access-Control-Allow-Origin':'*'}
  });

  console.log('instance====', instance())
  const url = 'http://www.weather.com.cn/data/sk/101010100.html';
  const request = axios({
    url,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
