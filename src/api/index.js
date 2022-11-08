import { ENV } from "./env";
import axios from "axios";

const Axios = axios.create({
    baseURL : ENV.baseLocal.apiUrl,
    headers: {
        "Content-type": "application/json",
    },
});

export default Axios;
