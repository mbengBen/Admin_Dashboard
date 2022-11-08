import {createStore} from 'vuex';
import { authModule } from '../store/modules/auth/index';


const store = createStore({
    modules: {
        authModule,
    },
})

export default store;