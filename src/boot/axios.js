import Vue from 'vue'
import axios from 'axios'
let debug = false;


if(debug){
	axios.defaults.baseURL = 'http://127.0.0.1:5000/'
}else{
	axios.defaults.baseURL = 'http://49.235.109.170:5000/'
}
axios.defaults.timeout = 5000
Vue.prototype.$axios = axios
