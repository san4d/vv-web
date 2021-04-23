<script>
    import { onMount } from 'svelte';

	let container;
	let map;
	let zoom = 12;
    const albionLoc = {
        lat: 43.248379199694845, 
        lng: -78.19383469513551
    }
    const medinaLoc = {
        lat: 43.22147179398745, 
        lng: -78.38672849304945
    }
    
    const center = {
        lat: (albionLoc.lat + medinaLoc.lat) / 2,
        lng: (albionLoc.lng + medinaLoc.lng) / 2
    };

    const addMarker = location => new google.maps.Marker({
          position: location,
          map: map,
        });

	onMount(async () => {
		map = new google.maps.Map(container, {zoom, center});
        addMarker(albionLoc);
        addMarker(medinaLoc);
	});
</script>

<style>
    .full-screen {
        width: 100%;
        height: 600px;
    }
</style>

<div class="full-screen" bind:this={container}></div>
