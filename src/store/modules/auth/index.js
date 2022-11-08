import { routes } from "../../../api/route";
import { makeApiRequest } from "../../../api/index";
// 
import { createStore } from 'vuex';
// import Vue from 'vue';
// import router from '../../../router/router';

const state = {
  me: {},
  loggedIn: localStorage.getItem('ms-token') != null
};

const getters = {
  me: state => {
      return state.me
  },

  loggedIn: state => {
      return state.loggedIn
  }
};

const actions = {
  loginHandler(context, payload) {
      function successCallback(response) {
          context.commit('loginHandlerMut', { user: response.data.user, token: response.data.access_token, expiration: response.data.token_expires_at });
      }

      function errorCallback(error) {
          Vue.swal(
              error.message,
              '',
              'error'
          );
      }

      const localToken = "";

      makeApiRequest(payload.args, routes.Auth.Login, localToken, successCallback, errorCallback);
  },
  loginRedirectHandler(context, payload) {
      function successCallback(response) {
          context.commit('loginHandlerMut', { user: response.data.user, token: response.data.access_token, expiration: response.data.token_expires_at });
      }

      function errorCallback(error) {
          Vue.swal(
              error.message,
              '',
              'error'
          );
      }

      const localToken = "";

      makeApiRequest(payload.args, apiModel.Auth.LoginAfterRedirect, localToken, successCallback, errorCallback);
  },
  oAuthLoginHandler(context, payload) {
      function successCallback(response) {
          context.commit('loginHandlerMut', { user: response.data.user, token: response.data.access_token, expiration: response.data.token_expires_at });
      }

      function errorCallback(error) {
          Vue.swal(
              payload.errorMessages.error,
              '',
              'error'
          );
      }

      const localToken = "";

      makeApiRequest(payload.args, apiModel.Auth.Login, localToken, successCallback, errorCallback);
  },

  registerHandler(context, payload) {
      function successCallback(response) {
          context.commit('registerHandlerMut', { user: response.data.user, token: response.data.access_token, expiration: response.data.expires_in });
      }

      function errorCallback(error) {
          Vue.swal(
              error.message,
              '',
              'error'
          );
      }

      const localToken = "";

      makeApiRequest(payload.args, apiModel.Auth.Register, localToken, successCallback, errorCallback, true);
  },

  logoutHandler(context, payload) {
      function successCallback(response) {
          context.commit('logoutHandlerMut');
          context.commit('getMedicalFileHandler', { file: {} });
          context.commit('setselectedInstitutionHandler', { selectedInstitution: {} });
          context.commit('getPatientHandler', { patient: {} });
          context.commit('clearItemsHandler', { items: [] });

      }

      function errorCallback(error) {
          Vue.swal(
              error.message,
              '',
              'error'
          );
      }

      const localToken = localStorage.getItem('ms-token');
      payload.args.time_slug = JSON.parse(localStorage.getItem('user'))['time_slug'];
      makeApiRequest(payload.args, apiModel.Auth.Logout, localToken, successCallback, errorCallback);
  }
};

const mutations = {
  loginHandlerMut(state, { user, token, expiration }) {
      // Update me state
      state.me = user;

      // Update loggedIn state
      state.loggedIn = true;

      // Store user, role and token locally
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('ms-token', token);
      localStorage.setItem('token-expires-at', expiration);
      localStorage.setItem('role', user.roles[0].name);
      router.push("/categories");
  },

  registerHandlerMut(state, { user, token, expiration }) {
      // Update me state
      state.me = user;

      // Update loggedIn state
      state.loggedIn = true;

      // Store user, role and token locally
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('ms-token', token);
      localStorage.setItem('token-expires-at', expiration);
      localStorage.setItem('role', user.roles[0].name);

      // Redirect to dashboard
      router.push("/dashboard");
  },

  logoutHandlerMut(state) {
      // Update me state
      state.me = {};

      // Update loggedIn state
      state.loggedIn = false;

      // Remove locally stored user and token
      localStorage.removeItem('user');
      localStorage.removeItem('ms-token');
      localStorage.removeItem('token-expires-at');
      localStorage.removeItem('dashboardName');
      localStorage.removeItem('dashboardPath');
      localStorage.removeItem('role');

      // Redirect to login view
      router.push("/login");
  }
};


export default {
    state,
    getters,
    actions,
    mutations
}
