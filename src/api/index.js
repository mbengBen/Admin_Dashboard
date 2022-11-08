import { ENV } from "./env";
import axios from "axios";
import store from '../store/store.js';
// import Vue from 'vue';

const Axios = axios.create({
    baseURL : ENV.baseProd.apiUrl,
    headers: {
        "Content-type": "application/json",
    },
});

export default Axios;

export async function makeApiRequest(args, object, token = "", successCallback = {}, errorCallback = {}, errorMessages = {}, hasFile = false) {
    let method = object.method;
    let urlSuffix = object.url;
    let finalUrlSuffix = "";

    // Adjust API url
    if (Object.keys(args).length === 0 && args.constructor === Object) {
        finalUrlSuffix = urlSuffix;
    } else {
        Object.keys(args).forEach(function(key) {
            finalUrlSuffix = urlSuffix.replace(`:${key}`, args[key]);
            urlSuffix = finalUrlSuffix;
        })
    }

    // Set headers
    let customHeaders = {};
    customHeaders["headers"] = {};

    // Set token in request header if necessary
    if (token != "") {
        customHeaders["headers"]["Authorization"] = "Bearer " + token;
    }

    // Set request content type
    if (hasFile) {
        customHeaders["headers"]["Content-Type"] = "multipart/form-data";
    }

    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        if (
            !config.url.includes('api/medicament/search')
            && !(/api\/suivi\/*[a-zA-Z]*/.test(config.url))
        ){
            store.dispatch('setLoading', {loading : true});
        }

        return config;
    }, function (error) {
        // Do something with request error
        store.dispatch('setLoading', {loading : false});
        return Promise.reject(error);
    });
    axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        store.dispatch('setLoading', {loading : false});
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        store.dispatch('setLoading', {loading : false});
        return Promise.reject(error);
    });


    let response;
    let self = this;

    switch (method) {
        case "POST":
            try {
                response = await Vue.axios.post(baseURL + finalUrlSuffix.trim(), args, customHeaders)
                    .then(successCallback)
                    .catch(error => {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            store.dispatch('record', {errors : error.response.data.error});
                            if (error.response.data.hasOwnProperty('message')){
                                if (error.response.data.message == 'Unauthenticated.' || error.response.data.message ==  "vous devez vous authentifier"){
                                    localStorage.removeItem('ms-token');
                                    router.push({ name: 'login' });
                                }
                            }

                            Vue.swal({
                                type: 'error',
                                title: error.response.data.message
                            });

                        } else if (error.request) {
                            // The request was made but no response was received
                            // 'error.request' is an isntance of XMLHttpRequest in the browser and an instance of
                            // http.ClientRequest in node.js
                            console.log("Request error", error.request);

                            Vue.swal({
                                type: 'error',
                                title: self.errorMessages.generic
                            });
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            if (!_.isUndefined(error.message)){
                                if(error.message == "vous devez vous authentifier"){
                                    localStorage.removeItem('ms-token');
                                    router.push({ name: 'login' });
                                }

                            Vue.swal({
                                type: 'error',
                                title: error.message
                            });
                        }
                            console.log("Config error:", error.config);
                        }
                    });
            } catch (error) {console.log("Error:", error);
                store.dispatch('record', {errors : error.response.data.error});
                Vue.swal({
                    type: 'error',
                    title: self.errorMessages.generic
                });
            }

            break;

        case "GET":
            try {
                response = await Vue.axios.get(baseURL + finalUrlSuffix.trim(), { params: args, headers: customHeaders["headers"] })
                    .then(successCallback)
                    .catch(error => {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            store.dispatch('record', {errors : error.response.data.error});
                            if (error.response.data.hasOwnProperty('message')){
                                if ((error.response.data.message == 'Unauthenticated.') || (error.response.data.message ==  "vous devez vous authentifier")){
                                    console.log("Data :", error.response.data);
                                    console.log("Status:", error.response.status);
                                    console.log("Headers:", error.response.headers);
                                    console.log("error.response.data.message:", error.response.data.message);
                                    localStorage.removeItem('ms-token');
                                    router.push({ name: 'login' });
                                }
                            }
                            Vue.swal({
                                type: 'error',
                                title: error.response.data.message
                            });
                        } else if (error.request) {
                            // The request was made but no response was received
                            // 'error.request' is an isntance of XMLHttpRequest in the browser and an instance of
                            // http.ClientRequest in node.js
                            console.log("Request error", error.request);

                            Vue.swal({
                                type: 'error',
                                title: self.errorMessages.generic
                            });
                        } else if(error.message == "vous devez vous authentifier"){
                            localStorage.removeItem('ms-token');
                            router.push({ name: 'login' });
                            Vue.swal({
                                type: 'error',
                                title: error.message
                            });

                        } else {
                            // Something happened in setting up the request that triggered an Error

                            Vue.swal({
                                type: 'error',
                                title: error.message
                            });
                        }

                        console.log("Config error:", error.config);
                    });
            } catch (error) {
                Vue.swal({
                    type: 'error',
                    title: errorMessages.generic
                });
            }

            break;

        case "PUT":
            try {
                response = await Vue.axios.put(baseURL + finalUrlSuffix.trim(), args, customHeaders)
                    .then(successCallback)
                    .catch(error => {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log("Data:", error.response.data);
                            console.log("Status:", error.response.status);
                            console.log("Headers:", error.response.headers);
                            store.dispatch('record', {errors : error.response.data.error});
                            if (error.response.data.hasOwnProperty('message')){
                                if (error.response.data.message == 'Unauthenticated.'  || error.response.data.message ==  "vous devez vous authentifier"){
                                    localStorage.removeItem('ms-token');
                                    router.push({ name: 'login' });
                                }
                            }
                            Vue.swal({
                                type: 'error',
                                title: error.response.data.message
                            });
                        } else if (error.request) {
                            // The request was made but no response was received
                            // 'error.request' is an isntance of XMLHttpRequest in the browser and an instance of
                            // http.ClientRequest in node.js
                            console.log("Request error", error.request);

                            Vue.swal({
                                type: 'error',
                                title: self.errorMessages.generic
                            });
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            if(error.message == "vous devez vous authentifier"){
                                localStorage.removeItem('ms-token');
                                router.push({ name: 'login' });
                            } 

                            Vue.swal({
                                type: 'error',
                                title: error.message
                            });
                        }

                        console.log("Config error:", error.config);
                    });
            } catch (error) {
                Vue.swal({
                    type: 'error',
                    title: errorMessages.generic
                });
            }

            break;

        case "DELETE":
            try {
                response = await Vue.axios.delete(baseURL + finalUrlSuffix.trim(), customHeaders)
                    .then(successCallback)
                    .catch(error => {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log("Data:", error.response.data);
                            console.log("Status:", error.response.status);
                            console.log("Headers:", error.response.headers);
                            store.dispatch('record', {errors : error.response.data.error});
                            if (error.response.data.hasOwnProperty('message')){
                                if (error.response.data.message == 'Unauthenticated.' || error.response.data.message ==  "vous devez vous authentifier"){
                                    localStorage.removeItem('ms-token');
                                    router.push({ name: 'login' });
                                }
                            }
                            Vue.swal({
                                type: 'error',
                                title: error.response.data.message
                            });
                        } else if (error.request) {
                            // The request was made but no response was received
                            // 'error.request' is an isntance of XMLHttpRequest in the browser and an instance of
                            // http.ClientRequest in node.js
                            console.log("Request error", error.request);

                            Vue.swal({
                                type: 'error',
                                title: self.errorMessages.generic
                            });
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            if(error.message == "vous devez vous authentifier"){
                                localStorage.removeItem('ms-token');
                                router.push({ name: 'login' });
                            } 

                            Vue.swal({
                                type: 'error',
                                title: error.message
                            });
                        }

                        console.log("Config error:", error.config);
                    });
            } catch (error) {
                Vue.swal({
                    type: 'error',
                    title: self.errorMessages.generic
                });
            }

            break;
    }
}
