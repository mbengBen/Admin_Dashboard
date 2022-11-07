import { createStore } from 'vuex';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default createStore({
  namespaced: true,
  state() {
    
    return{
       name: 'State Connect',
    };
  },

  getters,
  mutations,
  actions,
  
})
