<script>
	import Card from "../components/Card.svelte";
	let hints = [
		"Hier soll später ein Hinweis stehen, der einem die Fährte erklärt",
		"Dies ist der zweite Hinweis",
		"Dies ist der dritte Hinweis",
	];

	let currentHintIndex = 0;
	let hintChanged = false;

	function nextHint() {
		currentHintIndex = (currentHintIndex + 1) % hints.length;
		hintChanged = true;
	}

	function previousHint() {
		currentHintIndex = (currentHintIndex - 1 + hints.length) % hints.length;
	}

	let items = Array(18);

	// Falls du dynamische Daten später hinzufügen möchtest, kannst du sie hier definieren
</script>

<div class="game-container">
	<!-- Oberes Symbol -->
	<div class="central-icon">
		<img src="/assets/track-icon.png" alt="Tierspuren" />
	</div>

	<!-- Hinweis-Container -->
	<div class="hint">
		{#if hintChanged}
			<button on:click={previousHint}>&lt;</button>
		{/if}
		<p>{hints[currentHintIndex]}</p>
		<button on:click={nextHint}>&gt;</button>
	</div>

	<!-- Raster mit Kacheln -->
	<div class="grid-container">
		{#each items as item, index}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<Card></Card>
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
		background: rgba(0, 0, 0, 0.8);
		border-radius: 1rem;
		margin-bottom: 2rem;
	}

	.central-icon img {
		width: 60%;
		height: auto;
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
	}
	.hint p {
		margin-right: 1rem;
	}

	.hint button {
		font-size: 1.5rem;
		padding: 0.5rem;
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
