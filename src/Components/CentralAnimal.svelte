<script>
	// Das zentrale Tier wird von `Game.svelte` gesetzt
	export let centralAnimal;

	// Hinweise aus den Feldern extrahieren
	let hints = [];

	let currentHintIndex = 0;

	// Reaktionsblock, um das hints-Array zu aktualisieren, wenn sich centralAnimal ändert
	$: hints = [
		centralAnimal?.hint_1 || "Kein Hinweis verfügbar",
		centralAnimal?.hint_2 || "Kein Hinweis verfügbar",
		centralAnimal?.hint_3 || "Kein Hinweis verfügbar"
	];

	// Funktionen zum Wechseln der Hinweise
	function nextHint() {
		currentHintIndex = (currentHintIndex + 1) % hints.length;
	}

	function previousHint() {
		currentHintIndex = (currentHintIndex - 1 + hints.length) % hints.length;
	}

	// Debugging, um sicherzustellen, dass `centralAnimal` richtig ankommt
	console.log("🐾 CentralAnimal geladen:", centralAnimal, hints);
</script>

<div class="central-container">
	<!-- Zentrales Symbol mit Bild -->
	<div class="central-icon">
		<img src={`/images/footprint-images/${centralAnimal?.name_german}-Faehrte.png`} alt="{centralAnimal?.name_german}" />
	</div>

	<!-- Hinweis-Container -->
	<div class="hint">
		<button on:click={previousHint}>&lt;</button>
		<p>{hints[currentHintIndex]}</p>
		<button on:click={nextHint}>&gt;</button>
	</div>
</div>

<style>
	.central-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 2rem;
	}

	.central-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 7rem;
		height: 7rem;
		background: #e0e0e0;
		border-radius: 1rem;
		margin-bottom: 2rem;
	}

	.central-icon img {
		width: 70%;
		height: auto;
		border-radius: 1rem;
	}

	.hint {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 800px;
		color: white;
		text-align: center;
		background: rgba(5, 21, 5, 0.9);
		border-radius: 1rem;
		padding: 1rem;
	}

	.hint p {
		margin: 0 1rem;
		font-size: 1.2rem;
	}

	.hint button {
		font-size: 1.5rem;
		padding: 0.5rem;
		cursor: pointer;
	}
</style>
