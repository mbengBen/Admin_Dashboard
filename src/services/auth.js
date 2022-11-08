/**
 * Importation des modules nécessaires
 */
 import Axios from '../api';
 import routes from '@/api/route';
import Auth from '@/models/auth';

 class AuthServvice {

    login() {
        return Axios.post(routes.Auth.Login);
    }

    register(){
        return Axios.post(routes.Auth.Register);
    }

}

export default new AuthServvice();

