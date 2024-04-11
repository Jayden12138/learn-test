import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from './router'
import { createPinia } from 'pinia'
;(async function setupApp() {
	const app = createApp(App).use(createPinia())
	await setupRouter(app)

	app.mount('#app')
})()
