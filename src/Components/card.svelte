<script>
	let isclicked = false;
	function toggleItemColor(){
		isclicked = !isclicked;
	}
</script>

<div
	class="grid-item"
	on:click={() => toggleItemColor()}
	style="background: {isclicked ? '#000' : '#fff'};"
></div>

<style>
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
