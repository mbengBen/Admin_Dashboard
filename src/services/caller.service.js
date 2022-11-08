/*****************************/
/*** Import du module nécessires ***/

import axios from 'axios'
import { auth } from "../services/auth"
import router from '@/router'

const Axios = axios.create({
    baseURL: 'http://194.163.172.123:8080/api'
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
    return response
    }, error => {
        console.log(error.response.status);
        if(error.response.status == 401){
            auth.logout;
            router.push('/login')
        }
})

export default Axios;