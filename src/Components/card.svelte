<script>
	export let animal;
	let isclicked = false;
	function toggleItemColor(){
		isclicked = !isclicked;
	}
	let imageUrl = `/images/card-images/${animal.name_german}.png`;
</script>

<div class="grid-item" on:click={toggleItemColor} class:isclicked>
	<img src="{imageUrl}" alt="{animal.name_german}" />
	<p>{animal.name_german}</p>
</div>

<style>
	.grid-item {
		border-radius: 0.5rem;
		height: 6rem;
		width: 6rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: background 0.3s ease;
		background: #e0e0e0;
		text-align: center;
		padding: 0.5rem;
	}

	.grid-item img {
		width: 100%;
		height: auto;
		max-height: 4rem; /* Damit das Bild nicht zu groß wird */
		object-fit: contain;
		border-radius: 0.25rem;
	}
	.grid-item p {
		margin: 0.3rem 0 0;
		font-size: 0.9rem;
		color: black;
		font-weight: bold;
	}

	/* Wenn das Element geklickt wurde */
	.grid-item.isclicked {
		background: black;
		color: white;
	}

	.grid-item.isclicked p {
		color: white;
	}
</style>
