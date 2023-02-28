import axios from "axios";

const axiosDefault = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "https://forexsniper.net/" : "/",
  // transformRequest: function (body) {
  //   let formData = new FormData();
  //   for (const key in body) {
  //     formData.append(key, body[key]);
  //   }
  //   return formData;
  // },
});

// Add a request interceptor
// axiosDefault.interceptors.request.use(
//   function (config) {
// Do something before request is sent
// set the headers for the request
// config.headers.Authorization = decodedToken() || "";
// config.headers.tk = localStorage?.getItem("fcm-t")
// ? localStorage?.getItem("fcm-t")
// : localStorage?.getItem("tk-b");
// config.headers.ln = "en";
// config.headers.ty = "";
// config.headers.vc =
//   process.env.NODE_ENV === "development" ||
//   window.location.host.split(".")[2] === "work"
//     ? `${process.env.REACT_APP_VERSION_CONTROL_DEVELOPMENT}`
//     : `${process.env.REACT_APP_VERSION_CONTROL_PRODUCTION}`;
//   return config;
// },
// function (error) {
// Do something with request error
//     return Promise.reject(error);
//   }
// );

// Add a response interceptor
// axiosDefault.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data

//     return response;
//   },
//   function (error) {
//     return Promise.reject(console.log(error));
//   }
// );

export default axiosDefault;
