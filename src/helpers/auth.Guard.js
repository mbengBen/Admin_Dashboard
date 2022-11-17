import router from '@/router'

export function authGuard(to){
    let token = localStorage.getItem('id_token');
    // console.log(token);

    if(token){
        return true
    }else{
        localStorage.removeItem('id_token');
        // router.push('/');
    }

   
}