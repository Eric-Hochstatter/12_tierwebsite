<script>
	// Props für das Tier-Array
	export let animals = [];

	// Zufälliges Start-Tier wählen
	let centralAnimal = animals[Math.floor(Math.random() * animals.length)];

	// Hinweise aus den Feldern extrahieren
	let hints = [
		centralAnimal.hint_1 || "Kein Hinweis verfügbar",
		centralAnimal.hint_2 || "Kein Hinweis verfügbar",
		centralAnimal.hint_3 || "Kein Hinweis verfügbar"
	];

	let currentHintIndex = 0;

	// Funktionen zum Wechseln der Hinweise
	function nextHint() {
		currentHintIndex = (currentHintIndex + 1) % hints.length;
	}

	function previousHint() {
		currentHintIndex = (currentHintIndex - 1 + hints.length) % hints.length;
	}

	// Funktion zum Ändern des zentralen Tieres (per Event nach außen geben)
	function setCentralAnimal(animal) {
		centralAnimal = animal;
		hints = [
			animal.hint_1 || "Kein Hinweis verfügbar",
			animal.hint_2 || "Kein Hinweis verfügbar",
			animal.hint_3 || "Kein Hinweis verfügbar"
		];
		currentHintIndex = 0;

		// Event an übergeordnete Komponente senden
		dispatch("update", { centralAnimal });
	}

	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();
</script>

<div class="central-container">
	<!-- Zentrales Symbol mit Bild -->
	<div class="central-icon">
		<img src={`/images/footprint-images/${centralAnimal.name_german}-Faehrte.png`} alt="{centralAnimal.name_german}" />
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
		background: rgba(0, 0, 0, 0.8);
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