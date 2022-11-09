import { ENV } from "./env";
import axios from "axios";
import store from '../store/store.js';
import Vue from 'vue';

const Axios = axios.create({
    baseURL : ENV.baseLocal.apiUrl,
    headers: {
        "Content-type": "application/json",
        "Accept": "/",
    },
});

export default Axios;

