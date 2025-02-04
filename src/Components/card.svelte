<script>
	// Hier kannst du später Routing oder Interaktivität hinzufügen
	let visibleItems = Array(18).fill(true);
	let blackItems = Array(18).fill(false);

	function toggleItemColor(index) {
		if (blackItems.filter(Boolean).length < blackItems.length - 1) {
			blackItems[index] = !blackItems[index];
		}
	}
</script>

<!-- Raster mit Kacheln -->
<div class="grid-container">
	{#each visibleItems as visible, index}
		{#if visible}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="grid-item"
				on:click={() => toggleItemColor(index)}
				style="background: {blackItems[index] ? '#000' : '#fff'};"
			></div>
		{/if}
	{/each}
</div>

<style>
	/* Rastercontainer */
	.grid-container {
		display: grid;
		grid-template-columns: repeat(6, 1fr); /* 2 Spalten */
		gap: 1rem;
		/* width: 100%; */
		max-width: 800px;
	}

	/* Einzelne Kachel */
	.grid-item {
		background: #e0e0e0;
		border-radius: 0.5rem;
		height: 6rem;
		width: 6rem;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: background 0.3s ease;
	}

	.grid-item:hover {
		background: #000;
	}
</style>
