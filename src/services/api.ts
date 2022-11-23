import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:1337",
});

api.interceptors.request.use((request) => {
  const access = localStorage.getItem("ACCESS_TOKEN") || "";
  const refresh = localStorage.getItem("REFRESH_TOKEN") || "";

  if (access && refresh) {
    request.headers = {
      "x-access-token": access,
      "x-refresh-token": refresh
    }
  }

  return request
})

api.interceptors.response.use(
  (response) => {
    return response
  },

  async (error) => {
    if (error.response.data.message === "Invalid Token.") {
      const originalRequest = error.config;
      originalRequest.retry = true;

      const response = await api.get("/auth/token");

      localStorage.clear();
      localStorage.setItem("ACCESS_TOKEN", response.data.accessToken);
      localStorage.setItem("REFRESH_TOKEN", response.data.refreshToken);

      return api(originalRequest);
    };

    return Promise.reject(error);
  }
);

export default api;
