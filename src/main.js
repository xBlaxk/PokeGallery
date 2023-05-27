import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import httpMethods from './plugins/api/rest'
// import VueAxios from 'vue-axios'
console.log(await httpMethods.GET({ url: 'https://pokeapi.co/api/v2/pokemon/ditto' }))

createApp(App).mount('#app')
