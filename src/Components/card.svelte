<script>
	export let animal;
	export let onToggle; // Neue Funktion als Prop, um das Umschalten mitzuteilen
	let isClicked = false;

	function toggleCard() {
		isClicked = !isClicked;
		onToggle(animal, isClicked); // Informiere die Hauptkomponente
	}

	export function makeCardVisible() {
		isClicked = false;
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="grid-item {isClicked ? 'blackout' : ''}" on:click={toggleCard}>
	{#if !isClicked}
		<img src={`/images/card-images/${animal.name_german}.png`} alt="{animal.name_german}" />
		<p>{animal.name_german}</p>
	{/if}
</div>

<style>
	.grid-item {
		display: grid;
		align-content: center;
		align-items: center;
		/* flex-direction: column; */
		grid-template-rows: 4fr 1fr;
		width: 6rem;
		height: 6.5rem;
		border-radius: 0.5rem;
		cursor: pointer;
		background: #e0e0e0;
		transition: background 0.3s ease-in-out;

	}

	.grid-item img {
		display: flex;
		justify-self: center;
        width: 80%;
        height: auto;
        max-height: 4rem; /* Damit das Bild nicht zu groß wird */
        object-fit: contain;
        border-radius: 0.25rem;
    }
    .grid-item p {
		display: flex;
		justify-self: center;
        margin: 0 0 0;
        font-size: 0.9rem;
        color: black;
        font-weight: regular;
		padding: 0.25rem;}

	/* Wenn die Karte geklickt wurde, wird sie komplett schwarz */
	.grid-item.blackout {
		background:  rgba(13, 21, 13, 0.9);
	}

	.grid-item.blackout img,
	.grid-item.blackout p {
		display: none;
	}
</style>
