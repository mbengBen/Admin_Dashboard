import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/modules/auth'

import "./styles.css"// css file

/* 
Font Awesome  Icons
*/
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"


/* 
 bootstrap  CSS , JS
*/
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";



const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');

// App.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     next();
//   }); To be inserted in the app.js folder 
