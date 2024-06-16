import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: tag => tag.startsWith('a-'),
				},
			},
		}),
		mkcert(),
		{
			handlehotupdate({ server, file }) {
				// stops a-frame complaining about scripts already loaded
				if (file.toLower().includes("vr")) {
					// send full-reload command
					server.ws.send({
						type: 'full-reload'
					})
					// to stop the hmr
					return []
				}
			}
		}
	],

})
