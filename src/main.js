import '@/assets/css/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AppLayout from '@/components/Layouts/AppLayout.vue';
import Icon from "@/components/Icon.vue"

import VueLazyload from "vue-lazyload";
import errorImg from "@/assets/img/error.svg"
import loadingImg from "@/assets/img/loding.svg"

import App from './App.vue'
import router from './router'
import { createToaster } from "@meforma/vue-toaster";
window.$toast = createToaster({
    position: 'bottom'
});
const app = createApp(App)
app.use(createPinia())
    .use(router)
    .use(VueLazyload, {
        preLoad:1.3,
        error: errorImg,
        loading: loadingImg,
        attempt: 1
    })
    .component('Icon', Icon)
    .component('AppLayout', AppLayout)
    .mount('#app')