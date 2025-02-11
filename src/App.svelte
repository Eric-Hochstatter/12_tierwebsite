<script>
	import Router from "svelte-spa-router";
	import LandingPage from "./pages/LandingPage.svelte";
	import Game from "./pages/Game.svelte";
	import Information from "./pages/Information.svelte";
	import Impressum from "./pages/Impressum.svelte";

	// import CardOverview from "./pages/CardOverview.svelte";
	
	const routes = {
		"/": LandingPage,
		"/game": Game,
		"/informationen": Information,
		"/impressum": Impressum,
		// '/cards': CardOverview,
	};
</script>

<div class="container-background"></div>
<header>
	<div class="container">
		<!-- Header mit Links -->
		<div class="header">
			<div class="logo">
				<img
					src="Tierlogo.png"
					alt="Logo"
					width="30"
					style="vertical-align: middle;"
				/>
			</div>
			<nav>
				<a href="#/">Home</a>
				<a href="#/game">Fährtenlesen</a>
				<a href="#/informationen">Informationen</a>
				<a href="#/impressum">Impressum</a>
			</nav>
		</div>
	</div>
</header>

<main>
	
	<Router {routes} />
</main>

<footer></footer>

<style>
 
	/* Box-Sizing auf border-box setzen */
	* {
		box-sizing: border-box;
		font-family: 'Merriweather', sans-serif;
	}


    /* body {
    margin: 0;
	font-family: 'Merriweather';
    background: #252525;
  } */
	.header {
		/* font-family: 'Merriweather', sans-serif; */
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background:  rgba(13, 21, 13, 0.9);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		color: white;
		height: 5rem;
	}

	.logo {
		grid-column: 1 / span 1;
	}

	nav {
		grid-column: 7 / span 5;
		display: flex;
		justify-content: flex-end;
	}

	.header a {
		/* grid-column: 6 / span 1; */
		text-decoration: none;
		color: white;
		margin: 0 1rem;
		font-size: 1.2rem;
	}

	.header a:hover {
		text-decoration: underline;
	}

	/* body {
    margin: 0;
    padding: 0;
  } */

	.container-background {
		position: absolute;
		background: url("titlescreen.jpg") no-repeat center center/cover;
		filter: brightness(0.5); /* Abdunkeln auf 50% Helligkeit */
		height: 100vh;
		width: 100vw;
		z-index: -1;
	}
	/* .container {
    height: 100vh;
    background: url('.assets//titlescreen.jpg') no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    color: black;
  } */
</style>
