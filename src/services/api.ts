import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:1337",
});

// api.interceptors.response.use(
//   (response) => {
//     response
//   },

//   (error) => {
//     console.log("kjnnjnjnj")

//     return Promise.reject(error);
//   }
// );

export default api;
//https://stormy-mesa-07638.herokuapp.com
