import axios from "axios";
export const routes = {
    //médicament routes
    "Auth" : {
        "Login" : {
            "method" : "POST",
            // "url" : "/login"
            "url" : "/authenticate"
        },
        "Register" : {
            "method" : "POST",
            // "url" : "/login"
            "url" : "/register"
        },
    },
  };
  
  export default routes;
  

  