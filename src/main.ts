import './assets/scss/_style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// импорт компонентов
import HelloWorld from '@/components/HelloWorld.vue'

const app = createApp({})

// регистрация компонентов
app.component('HelloWorld', HelloWorld)

app.use(createPinia())

app.mount('#app')
