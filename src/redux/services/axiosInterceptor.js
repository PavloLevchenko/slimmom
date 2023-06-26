import axios from 'axios';

export const axiosInterceptor = store => {
  const handleError = async error => {
    const status = error.response ? error.response.status : null;

    const originalRequest = error.config;

    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (401 === error.response.status) {
        const state = store.getState();
        const persistedToken = state.auth.token;

        const refresh = await axios.get('/api/auth/refresh', {
          headers: { Authorization: `Bearer ${persistedToken}` },
        });

        if (200 === refresh.status) {
          return axios.request(originalRequest);
        }
      }
    }
    return await Promise.reject(error);
  };
  const handleRequest = config => {
    const state = store.getState();
    const persistedToken = state.auth.token;

    if (
      persistedToken === null &&
      !['login', 'registration'].some(element => config.url.includes(element))
    ) {
      return store.rejectWithValue('Unable to access');
    }

    return config;
  };
  axios.interceptors.request.use(handleRequest);
  axios.interceptors.response.use(response => response, handleError);
};
