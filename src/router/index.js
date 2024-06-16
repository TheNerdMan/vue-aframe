import { createRouter, createWebHistory } from "vue-router";
import VR from '../components/VR/VR.vue';
import HelloWorld from '../components/HelloWorld.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	base: '/',
	routes: [
		{
			path: '/',
			component: HelloWorld,
			props: { msg: "Hello from router" }
		},
		{
			path: '/vr',
			component: VR,
			name: 'VR'
		}
	]
});

export default router;
