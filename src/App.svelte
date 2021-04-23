<script>
	import Header from './Header.svelte';
	import Splash from './Splash.svelte';
	import Location from './Location.svelte';
	import Section from './Section.svelte';

	export let mapReady;
</script>

<svelte:head>
	<script defer async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9cvHmfCYWeRZMlQan51MfegqW9nsW5Bc&callback=initMap"></script>
</svelte:head>


<Header/>
<Splash/>

<Section title="Visit Us">
	{ #if mapReady }
		<Location/>
	{ /if }
</Section>

