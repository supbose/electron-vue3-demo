import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
// import './assets/scss/theme.scss';
import Register from './components/register'

const app=createApp(App)
// Register.registerComponents()

Register(app)
// import Aside from './Aside'
// import Frame from './Frame'
// import Film from './Film'
// import Play from './Play'
// import Star from './Star'
// import Setting from './Setting'
// import Detail from './Detail'
// import Share from './Share'
// import History from './History'
// import EditSites from './EditSites'
// import IPTV from './IPTV'
// import Recommendation from './Recommendation'

// Vue.component('Aside', Aside)
    // Vue.component('Frame', Frame)
    // Vue.component('Film', Film)
    // Vue.component('Play', Play)
    // Vue.component('Star', Star)
    // Vue.component('Setting', Setting)
    // Vue.component('Detail', Detail)
    // Vue.component('Share', Share)
    // Vue.component('History', History)
    // Vue.component('EditSites', EditSites)
    // Vue.component('IPTV', IPTV)
    // Vue.component('Recommendation', Recommendation)

// createApp(App).use(ElementPlus).use(store).use(router).mount('#app')



app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
