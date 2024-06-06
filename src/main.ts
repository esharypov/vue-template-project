import './assets/scss/_style.scss'

import './assets/js/common'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// импорт компонентов
import HelloWorld from '@/components/HelloWorld.vue'
import PageHeader from '@/components/PageHeader.vue'

const app = createApp({})

// регистрация компонентов
app.component('HelloWorld', HelloWorld)
app.component('PageHeader', PageHeader)

app.use(createPinia())

app.mount('#app')
