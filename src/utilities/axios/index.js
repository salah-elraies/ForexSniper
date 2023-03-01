import axios from "./createDefault";

export function Axios({ method = "GET", url, data = {}, headers = {} }) {
  return new Promise((resolve, reject) => {
    axios({
      method: method.toUpperCase(),
      url,
      data,
      headers: headers,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
