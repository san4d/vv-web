<div class="social-header">
	<div id="company-name">Vintage Vineyards</div>
	<div id="company-icons">
		<div>
			<a href="https://www.facebook.com/VintageVineyardLights/">
				<div>
					<i class="fab fa-facebook"></i>
				</div>
			</a>
		</div>
		<div>
			<a href="https://www.instagram.com/vintage_vineyards/">
				<div>
					<i class="fab fa-instagram"></i>
				</div>
			</a>
		</div>
	</div>
</div>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.social-header {
		font-weight: bold;
		color: antiquewhite;
		background-color: rgba(0, 0, 0, .7);
		padding: 1em;
		display: flex;
		flex-direction: column;
	}
	
	#company-name {
		text-align: center;
		align-content: center;
	}

	#company-icons {
		text-align: center;
		align-content: center;
		display: flex;
		flex-direction: row;
		margin: auto;
	}

	#company-icons > div {
		margin: .5em .5em;
		margin-bottom: 0em;
	}

	i {
		color: antiquewhite;
	}
</style>