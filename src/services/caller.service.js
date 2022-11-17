/*****************************/
/*** Import du module nécessires ***/

import axios from 'axios'
import { ENV } from "../api/env";
import { auth } from "../services/auth"
import router from '@/router'
import store from "../store/store"

const Axios = axios.create({
    baseURL: ENV.baseLocal.apiUrl,
    headers: {
        "Content-Type": "application/json",
        "Accept": '*/*',
    },
})


/**
 * interceptor pour injection token
 */
Axios.interceptors.request.use(request => {

    //Si connectee on ajoute le token dans l'entete
    if(auth.isLogged()){
        request.headers.Authorization = 'Bearer '+auth.getToken() 
    }
    // console.log(request);

    return request
})

/**
 * interceptor des reponse de l'api
 */
Axios.interceptors.response.use(response => {
    // console.log(response);
    store.commit('displayError', {
        dis: true,
        message: response.statusText

    })
    // return response
    }, error => {
        if(!error.response){
            store.commit('displayError', {
                dis: true,
                message: error.message
            })
        }else{
            if(error.response.status == 401){
                auth.logout;
            }
            store.commit('displayError', {
                dis: true,
                message: error.response.data.title
            })
        }
})

export default Axios;