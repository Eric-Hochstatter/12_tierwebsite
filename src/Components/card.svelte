<script>
	export let animal;
	export let onToggle; // Neue Funktion als Prop, um das Umschalten mitzuteilen
	let isClicked = false;

	function toggleCard() {
		isClicked = !isClicked;
		onToggle(animal, isClicked); // Informiere die Hauptkomponente
	}
</script>

<div class="grid-item {isClicked ? 'blackout' : ''}" on:click={toggleCard}>
	{#if !isClicked}
		<img src={`/images/card-images/${animal.name_german}.png`} alt="{animal.name_german}" />
		<p>{animal.name_german}</p>
	{/if}
</div>

<style>
	.grid-item {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 6rem;
		height: 6.5rem;
		border-radius: 0.5rem;
		cursor: pointer;
		background: #e0e0e0;
		transition: background 0.3s ease-in-out;
	}

	.grid-item img {
        width: 80%;
        height: auto;
        max-height: 4rem; /* Damit das Bild nicht zu groß wird */
        object-fit: contain;
        border-radius: 0.25rem;
    }
    .grid-item p {
        margin: 0.7rem 0 0;
        font-size: 0.9rem;
        color: black;
        font-weight: regular;
    }

	/* Wenn die Karte geklickt wurde, wird sie komplett schwarz */
	.grid-item.blackout {
		background: black;
	}

	.grid-item.blackout img,
	.grid-item.blackout p {
		display: none;
	}
</style>
