<script>
	import data from "../js/animaldata.js";
	import Card from "../components/Card.svelte";
	import CentralAnimal from "../components/CentralAnimal.svelte";

	let animals = data;

	// WICHTIG: `centralAnimal` nur EINMAL festlegen und nicht überschreiben!
	let centralAnimal = animals[Math.floor(Math.random() * animals.length)];
	console.log("🔍 Central Animal beim Start:", centralAnimal);

	let visibleAnimals = animals.map(a => ({ ...a, isClicked: false })); // Kopie für Spielverwaltung
	let showPopup = false;
	let isCorrectSelection = false;
	let lastAnimal = null;

	// Funktion wird von `Card.svelte` aufgerufen, um Status zu aktualisieren
	function handleToggle(animal, isClicked) {
		// Update den Status des jeweiligen Tieres
		visibleAnimals = visibleAnimals.map(a =>
			a.name === animal.name ? { ...a, isClicked } : a
		);

		// Prüfe, wie viele noch sichtbar sind
		let remaining = visibleAnimals.filter(a => !a.isClicked);

		if (remaining.length === 1) {
			lastAnimal = remaining[0];
			checkSelection();
		}
	}

	// Vergleichs-Funktion: Stimmt das letzte Tier mit dem zentralen Tier überein?
	function checkSelection() {
		console.log("🔍 Letztes verbliebenes Tier:", lastAnimal);
		console.log("🆚 Vergleich mit Central Animal:", centralAnimal);

		// Sicherstellen, dass der Vergleich richtig läuft
		isCorrectSelection = lastAnimal.name.trim().toLowerCase() === centralAnimal.name.trim().toLowerCase();
		showPopup = true; // Zeige das Ergebnis
	}

	// Spiel zurücksetzen
	function resetGame() {
		showPopup = false;
		centralAnimal = animals[Math.floor(Math.random() * animals.length)]; // NEU setzen
		console.log("🔄 Neues Spiel gestartet. Neues Central Animal:", centralAnimal);

		visibleAnimals = animals.map(a => ({ ...a, isClicked: false }));
	}
</script>

<div class="game-container">
	<!-- Zentrales Tier -->
	<CentralAnimal centralAnimal={centralAnimal} />

	<!-- Grid mit den Tieren -->
	<div class="grid-container">
		{#each visibleAnimals as animal}
			<Card animal={animal} onToggle={handleToggle} />
		{/each}
	</div>

	<!-- Popup-Fenster für Ergebnis -->
	{#if showPopup}
		<div class="popup">
			<div class="popup-content">
				<h2>{isCorrectSelection ? "✅ Richtig!" : "❌ Falsch!"}</h2>
				<p>
					{isCorrectSelection
						? "Du hast das richtige Tier gefunden! 🎉"
						: "Leider falsch! Versuche es nochmal! 😢"}
				</p>
				<button on:click={resetGame}>Neues Spiel</button>
			</div>
		</div>
	{/if}
</div>



<style>
	.game-container {
		overflow: hidden;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.grid-container {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 1rem;
		max-width: 800px;
	}

	/* Popup-Fenster */
	.popup {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.popup-content {
		background: white;
		padding: 2rem;
		border-radius: 1rem;
		text-align: center;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
	}

	.popup-content h2 {
		margin-bottom: 1rem;
	}

	.popup-content button {
		background: #007bff;
		color: white;
		border: none;
		padding: 0.7rem 1.5rem;
		border-radius: 0.5rem;
		cursor: pointer;
		margin-top: 1rem;
	}
</style>
