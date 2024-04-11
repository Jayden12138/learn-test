import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			'/api': {
				target: 'https://jsonplaceholder.typicode.com',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			},
		},
	},
	plugins: [
		vue(),
		UnoCSS(),
		AutoImport({
			imports: [
				'vue',
				{
					'naive-ui': [
						'useDialog',
						'useMessage',
						'useNotification',
						'useLoadingBar',
					],
				},
			],
		}),
		Components({
			resolvers: [NaiveUiResolver()],
		}),
	],
	resolve: {
		alias: {
			'@/': `${path.resolve(__dirname, 'src')}/`,
		},
	},
})
