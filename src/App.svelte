<script>
	import Header from './Header.svelte';
	import Splash from './Splash.svelte';
	import Location from './Location.svelte';

	export let mapReady;
</script>

<svelte:head>
	<script defer async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9cvHmfCYWeRZMlQan51MfegqW9nsW5Bc&callback=initMap"></script>
</svelte:head>


<Header/>
<Splash/>

{ #if mapReady }
	<Location/>
{ /if }
