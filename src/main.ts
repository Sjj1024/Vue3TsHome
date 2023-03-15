import { createApp } from 'vue'
import './styles.css'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { createPinia } from 'pinia'
import VueGtag from 'vue-gtag'

createApp(App)
    .use(Antd)
    .use(VueGtag, {
        config: { id: 'G-Z8HTMY8RP8' },
    })
    .use(createPinia())
    .mount('#app')
