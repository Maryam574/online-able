import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/online-able-b17bc/us-central1/api'
});

export default instance;