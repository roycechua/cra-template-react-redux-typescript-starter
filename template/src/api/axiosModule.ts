import axios, { AxiosRequestConfig } from "axios";
import { API_METHODS } from '../common/enums';
// import { store } from "../in dex";
// import { SET_ERROR } from "../actions/types";

const axiosRequest = axios.create({
  baseURL: process.env.REACT_APP_API,
  //   Authorization: `Bearer ${window.localStorage.getItem(
  //     "EBOOK_READER_AUTH_TOKEN"
  //   )}`,
  //   timeout: 20000,
  // headers: { "X-Custom-Header": "foobar" }
});

// Add a request interceptor
axiosRequest.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // console.log(window.localStorage.getItem("inteligente_token"));
    const token = window.localStorage.getItem("AUTH_TOKEN");
    config.headers = {
      ...config.headers,
      Accept: "application/json",
      "Access-Key": token,
    };

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// RESPONSE
// Add a response interceptor
axiosRequest.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Do something with response error
    // store.dispatch({ type: SET_ERROR, payload: error.response.data });
    return Promise.reject(error);
  }
);


const makeRequest = async (method : API_METHODS, url : string, params : Map<string, any>, config : AxiosRequestConfig) => {
  switch (method) {
    case API_METHODS.POST: {
      return await axiosRequest.post(url, params, config);
    }
    case API_METHODS.PUT: {
      return await axiosRequest.put(url, params, config);
    }
    case API_METHODS.GET: {
      return await axiosRequest.get(url, config);
    }
    default: {
    }
  }

  //   return request;
};

export { makeRequest };
