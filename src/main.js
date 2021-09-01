import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//公共css
import "./assets/base/index.css";
// iconfont
import './assets/iconFont/iconfont.css'

createApp(App).use(store).use(router).mount('#app')
