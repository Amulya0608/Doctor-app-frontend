import axios from "axios";

const api = axios.create({
 baseURL: "https://doctor-app-backend-4mne.onrender.com/"
});

export default api;
