import { createApp } from 'vue'
import './styles.css'
import App from './App.vue'
import VueGtag from 'vue-gtag'

createApp(App)
    .use(VueGtag, {
        config: { id: 'G-Z8HTMY8RP8' },
    })
    .mount('#app')
