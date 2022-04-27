import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from "@/routes";
import axios from "axios";

loadFonts()
const app = createApp(App)
app.use(router).use(vuetify)
app.mount('#app')
