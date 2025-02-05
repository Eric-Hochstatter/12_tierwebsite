<script>
	import data from "../js/animaldata.js";
	import Card from "../components/Card.svelte";
	// let hints = [
	// 	"Hier soll später ein Hinweis stehen, der einem die Fährte erklärt",
	// 	"Dies ist der zweite Hinweis",
	// 	"Dies ist der dritte Hinweis",
	// ];

	let animals = data;
	let currentHintIndex = 0;
	let hintChanged = false;

	// Ein zufälliges Tier für das zentrale Symbol wählen
	let centralAnimal = animals[Math.floor(Math.random() * animals.length)];

	// Die Hinweise für das zentrale Tier setzen
	let hints = [
    centralAnimal.hint_1 || "Kein Hinweis verfügbar",
    centralAnimal.hint_2 || "Kein Hinweis verfügbar",
    centralAnimal.hint_3 || "Kein Hinweis verfügbar"
];

	// Funktion zum Ändern der Hinweise
	function nextHint() {
		currentHintIndex = (currentHintIndex + 1) % hints.length;
		hintChanged = true;
	}

	function previousHint() {
		currentHintIndex = (currentHintIndex - 1 + hints.length) % hints.length;
	}

	// Funktion, um das zentrale Tier zu wechseln, wenn auf eine Kachel geklickt wird
	function setCentralAnimal(animal) {
    centralAnimal = animal;
    hints = [
        animal.hint_1 || "Kein Hinweis verfügbar",
        animal.hint_2 || "Kein Hinweis verfügbar",
        animal.hint_3 || "Kein Hinweis verfügbar"
    ];
    currentHintIndex = 0;
}

	let items = Array(18);

	// Falls du dynamische Daten später hinzufügen möchtest, kannst du sie hier definieren
</script>

<div class="game-container">
	<!-- Oberes Symbol -->
	<div class="central-icon">
		<img src={`/images/footprint-images/${centralAnimal.name_german}-Faehrte.png`} alt="{centralAnimal.name_german}" />
	</div>

	<!-- Hinweis-Container -->
	<div class="hint">
		<button on:click={previousHint}>&lt;</button>
		<p>{hints[currentHintIndex]}</p>
		<button on:click={nextHint}>&gt;</button>
	</div>

	<!-- Raster mit Kacheln -->
	<div class="grid-container">
		{#each animals as animal, index}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<Card animal={animal}></Card>
		{/each}
	</div>
</div>

<style>
	/* Hauptcontainer für die Ansicht */
	.game-container {
		height: 100vh; /* Höhe abzüglich Header */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* background: url('titlescreen.jpg') no-repeat center center/cover; */
		padding: 1rem;
	}

	/* Zentrales Symbol */
	.central-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 10rem;
		height: 10rem;
		background: #e0e0e0;
		border-radius: 1rem;
		margin-bottom: 2rem;
	}

	.central-icon img {
		width: 60%;
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
		margin-bottom: 2rem;
		padding: 0.5rem;
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

	/* Rastercontainer */
	.grid-container {
		display: grid;
		grid-template-columns: repeat(6, 1fr); /* 2 Spalten */
		gap: 1rem;
		/* width: 100%; */
		max-width: 800px;
	}
	/* .grid-item button {
    display: none;
  } */
</style>
