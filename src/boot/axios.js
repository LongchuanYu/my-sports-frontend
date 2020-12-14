import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:5000/'
axios.defaults.timeout = 5000
Vue.prototype.$axios = axios
