import axios from 'axios';

const instance = axios.create({
    baseURL: `${import.meta.env.VITE_REACT_APP_BASE_API_URL}`,
    timeout: 120000,
    timeoutErrorMessage: "timeout",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
    },
});

export default instance;
