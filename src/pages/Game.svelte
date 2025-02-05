<script>
	import data from "../js/animaldata.js";
	import Card from "../components/Card.svelte";
	import CentralAnimal from "../components/CentralAnimal.svelte";

	let animals = data;
	let centralAnimal = animals[Math.floor(Math.random() * animals.length)];

	// Funktion, um das zentrale Tier zu aktualisieren, wenn eine Kachel geklickt wird
	function updateCentralAnimal(event) {
		centralAnimal = event.detail.centralAnimal;
	}
</script>

<div class="game-container">
	<!-- Einbindung der CentralAnimal-Komponente -->
	<CentralAnimal animals={animals} on:update={updateCentralAnimal} />

	<!-- Raster mit Kacheln -->
	<div class="grid-container">
		{#each animals as animal}
			<Card animal={animal} on:click={() => updateCentralAnimal({ detail: { centralAnimal: animal } })} />
		{/each}
	</div>
</div>

<style>
	.game-container {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}

	.grid-container {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 1rem;
		max-width: 800px;
	}
</style>