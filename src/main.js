import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/routes"
import store from "./store/pizza-store"

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')

import './assets/fa/css/fontawesome.min.css'
import './assets/css/mat-icons.css'
import './assets/css/material-dashboard.css?v=2.1.2'
import './assets/demo/demo.css'
// import "./assets/js/core/jquery.min.js"
// import "./assets/js/core/popper.min.js"
// import "./assets/js/core/bootstrap-material-design.min.js"
// import "./assets/js/plugins/perfect-scrollbar.jquery.min.js"
// import "./assets/js/plugins/moment.min.js"
// import "./assets/js/plugins/sweetalert2.js"
// import "./assets/js/plugins/jquery.validate.min.js"
// import "./assets/js/plugins/jquery.bootstrap-wizard.js"
// import "./assets/js/plugins/bootstrap-selectpicker.js"
// import "./assets/js/plugins/bootstrap-datetimepicker.min.js"
// import "./assets/js/plugins/jquery.dataTables.min.js"
// import "./assets/js/plugins/bootstrap-tagsinput.js"
// import "./assets/js/plugins/jasny-bootstrap.min.js"
// import "./assets/js/plugins/fullcalendar.min.js"
// import "./assets/js/plugins/jquery-jvectormap.js"
// import "./assets/js/plugins/nouislider.min.js"
// import "./assets/js/plugins/arrive.min.js"
// import "./assets/js/plugins/chartist.min.js"
// import "./assets/js/plugins/bootstrap-notify.js"
// import "./assets/js/material-dashboard.js?v=2.1.2"
// import "./assets/demo/demo.js"