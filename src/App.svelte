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

<Section title="About Us">
	<p>
		Vintage Vineyards Lighting and Custom Furniture is run by Scott and Julie Sanford, two life-long 
		western New York natives. Their home, which serves as the base of operations, is the former site 
		of the family-owned "Vineyards Farms". Althouogh the farm no longer grows grapes, the craftsmanship
		lives on in the vintage heirlooms Scott and Julie create. 
	</p>
	<p>
		Scott is a retired Professor of Automotive Technology, and Julie works locally as a social worker. 
		Together, they share a life-long passion for preserving history and upcycling. They enjoy hunting 
		for interesting items and figuring out the best way to cast antiques in a new light. Over the years, 
		they have reclaimed thouosands of treasures heading to the junkyard!
	</p>
	<p>
		Vintage Vineyards is committed to bringing items of meaning into your home. They specialize in transforming
		vintage items into one-of-a-kind pieces, blending art and funcitonality. Custom orders are always
		encouraged! Scott and Julie will work with you to come up the ideal way to feature your piece.
	</p>
</Section>

<Section title="Visit Us">
	{ #if mapReady }
		<Location/>
	{ /if }
</Section>

