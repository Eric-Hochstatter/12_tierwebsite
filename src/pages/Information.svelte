<script>
	import { scale } from "svelte/transition";
	import { fetchWikipediaArticle } from "../js/functions";
	import "ldrs/ring";

	let result = null;

	async function handleOnClick() {
		result = fetchWikipediaArticle("Fährtenlesen");
		console.log(result);
	}
</script>

<!-- Hauptinhalt -->
<div class="main-content">
	<div class="central-icon">
		<img src="/assets/track-icon.png" alt="Tierspuren" />
	</div>

	<div class="content-grid">
		<!-- Karte 1 -->
		<div class="card">
			<h2>Um welche Fährte handelt es sich?</h2>
			<p>Hier stehen jetzt voll die nützlichen Hinweise zu dem Thema</p>
		</div>

		<!-- Karte 2 -->
		<div class="card">
			<h2>Tipps</h2>

			<!-- {#if result !== null}
				<p>{@html result.data.extract}</p>
			{:else}
				<p>
					Hier soll die API eingebunden werden, die nützliche Hinweise
					liefern soll
				</p>
			{/if} -->

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
		background-color: rgba(0, 0, 0, 0.7);
		padding: 1.5rem;
		border-radius: 10px;
		text-align: center;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		font-family: Arial, sans-serif;
		color: #fff;
	}

	.card h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.card p {
		font-size: 1rem;
	}

	.central-icon {
		grid-row: 2;
		grid-column: 5 / span 2;
		justify-self: center;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 10rem;
		height: 10rem;
		background: rgba(0, 0, 0, 0.8);
		border-radius: 1rem;
		margin-bottom: 2rem;
	}
</style>
