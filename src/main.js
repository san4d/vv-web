import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		mapReady: false,
	}
});

window.initMap = function ready() {
	app.$set({ mapReady: true });
}

export default app;