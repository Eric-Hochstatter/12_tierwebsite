<script>
	import { scale } from "svelte/transition";
	import { fetchWikipediaArticle } from "../js/functions";
	import "ldrs/ring";

	let result = null;
	let showInitialPopup = true; // Initiales Popup anzeigen

	async function handleOnClick() {
		result = fetchWikipediaArticle("Fährtenlesen");
		console.log(result);
	}

	// Initiales Popup schließen
	function closeInitialPopup() {
		showInitialPopup = false;
	}
</script>

<!-- Hauptinhalt -->
<div class="main-content">
	<!-- <div class="central-icon">
		<img src="/assets/track-icon.png" alt="Tierspuren" />
	</div> -->

	<div class="content-grid">
		<!-- Karte 1 -->
		<div class="card">
			<h2>Tipps zum Fährtenlesen</h2>
			<h3>Schau dir die Form an 🧐</h3>
						<p>
							Sind die Spuren rund oder eher länglich? Haben sie
							Krallen oder nicht? Zum Beispiel haben Hundespuren
							Krallen, Katzenspuren aber nicht!
						</p>
						<h3>Zähle die Zehen 🐾</h3>
						<p>
							Manche Tiere haben vier Zehen (wie Füchse und
							Hunde), andere fünf (wie Dachs oder Waschbär).
						</p>
		</div>

		<!-- Karte 2 -->
		<div class="card">
			<h2>Was sind Fährten?</h2>

			{#if result !== null}
				{#await result}
					<div
						style="display: grid; place-content: center;"
						out:scale={{ duration: 300 }}
					>
						<l-ring
							size="40"
							stroke="5"
							bg-opacity="0"
							speed="2"
							color="white"
						></l-ring>
					</div>
				{:then value}
					<p in:scale={{ duration: 300, delay: 300 }}>
						{@html value.data.extract}
					</p>
				{:catch error}
					<p>An error occurred: {error.message}</p>
				{/await}
			{:else}
				<p>
					Hier erfährst du, um was es sich bei Tierfährten handelt.
					Klicke den Button um mehr zu erfahren.
				</p>
			{/if}

			<button on:click={handleOnClick}> Informationen zu Fährten </button>

			<!-- Initiales Popup-Fenster -->
			{#if showInitialPopup}
				<div class="popup">
					<div class="popup-content">
						<h2>Tierspuren lesen – So geht's!</h2>
						<p>
							Hast du schon einmal Fußabdrücke im Schnee, Matsch
							oder Sand gesehen? Das sind Tierspuren! Mit ein
							bisschen Übung kannst du herausfinden, welches Tier
							dort entlanggelaufen ist.
						</p>
						<p>Viel Erfolg!</p>
						<button on:click={closeInitialPopup}
							>Schließen</button
						>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	/* Grundlegende Stile */
	/* body {
    margin: 0;
    font-family: Arial, sans-serif;
  }

  .container {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
    background-size: cover;
    color: #fff;
  } */

	/* Hauptbereich */
	.main-content {
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		grid-template-rows: repeat(6, 1fr);
		justify-content: center;
		/* align-items: center; */
		padding: 2rem;
		/* gap: 2rem; */
		height: 90vh;
	}

	.content-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column: 2 / span 8;
		grid-row: 3 / span 2;
		grid-gap: 2rem;
		/* width: 80%; */
		max-width: 1200px;
	}

	.card {
		background-color: rgba(13, 21, 13, 0.9);
		padding: 1.5rem;
		border-radius: 10px;
		text-align: center;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		font-family: Merriweather, sans-serif;
		color: #fff;
	}

	.card h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.card p {
		font-size: 1rem;
	}

	button {
		background: #93421e;
		color: white;
		border: none;
		padding: 0.7rem 1.5rem;
		border-radius: 0.5rem;
		cursor: pointer;
		margin-top: 1rem;
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
		color: white;
		background: rgba(13, 21, 13);
		padding: 2rem;
		border-radius: 1rem;
		text-align: center;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
		width: 35%;
	}

	.popup-content h2 {
		margin-bottom: 1rem;
	}

	.popup-content button {
		background: #93421e;
		color: white;
		border: none;
		padding: 0.7rem 1.5rem;
		border-radius: 0.5rem;
		cursor: pointer;
		margin-top: 1rem;
	}

	/* Media Queries für mobile Geräte */
	@media (max-width: 768px) {
		.main-content {
			grid-template-columns: 1fr;
			grid-template-rows: auto;
			padding: 1rem;
			height: auto;
		}

		.content-grid {
			grid-template-columns: 1fr;
			grid-column: 1 / -1;
			grid-row: auto;
			grid-gap: 1rem;
		 	justify-content: center;
            align-items: center;
            margin-top: 10rem; /* Abstand zum oberen Bildschirmrand */
        }

		.card {
			padding: 1rem;
		}

		.popup-content {
			width: 75%;
			padding: 1rem;
		}
	}

	@media (max-width: 480px) {
		.card h2 {
			font-size: 1.2rem;
		}

		.card p {
			font-size: 0.9rem;
		}

		button {
			padding: 0.5rem 1rem;
			font-size: 0.9rem;
		}

		.popup-content {
			width: 75%;
			padding: 0.5rem;
		}
	}
</style>
