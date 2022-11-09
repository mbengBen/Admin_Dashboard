import { auth } from "../../../services/auth.js"

export const authModule = {
    state: () => ({
        user: {},
        getError: false,
        getMessage: ''
    }),
    actions: {
        //LOGIN
        LOGIN(context, user) {
          auth.login(user)
            .then(res => {
                context.commit("SET_USER", res.data); 
                   if(res.data.id_token){
                      //sav token
                    localStorage.setItem("id_token", res.data.id_token)
                }
            })

        },
    },
    mutations: {
      SET_USER(state, payload) {
            state.user = payload;
        },

        displayError(state, payload){
           state.getError = payload.dis;
           state.getMessage = payload.message
        }
    },
    getters: {
        getUser(user){
            return state.user;
        },

        getError(state){
            return state.getError;
        },

        getMessage(state){
            return state.getMessage;
        }
    },
}