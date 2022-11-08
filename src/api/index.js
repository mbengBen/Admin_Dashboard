import { ENV } from "./env";
import axios from "axios";
import store from '../store/store.js';
import Vue from 'vue';

const Axios = axios.create({
    baseURL : ENV.baseProd.apiUrl,
    headers: {
        "Content-type": "application/json",
    },
});

export default Axios;

