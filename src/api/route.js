const ROUTES = {
    //médicament routes
    "Auth" : {
        "Login" : {
            "method" : "POST",
            // "url" : "/login"
            "url" : "/oauth/token"
        },
        "LoginAfterRedirect" : {
            "method" : "POST",
            // "url" : "/login"
            "url" : "/oauth/redirect/token"
        },
        "Email" : {
            "method" : "POST",
            // "url" : "/login"
            "url" : "/password/emailVersion"
        },

        "SmsReset" : {
            "method" : "POST",
            // "url" : "/login"
            "url" : "/password/smsVersion"
        },

        "SecretReset" : {
            "method" : "PUT",
            "url" : "/secretReset/:user_id"
        },

        "Reset" : {
            "method" : "POST",
            // "url" : "/login"
            "url" : "/password/reset"
        },

        "Register" : {
            "method" : "POST",
            "url" : "/register"
        },

        "Logout" : {
            "method" : "POST",
            "url" : "/logout"
        },

        "UpdatePassword" : {
            "method" : "POST",
            "url" : "/update-password"
        }
    },
  
    //recommandation routes
  };
  
  export default ROUTES;
  
  