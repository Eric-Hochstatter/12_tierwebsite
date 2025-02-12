<script>
    import Router from "svelte-spa-router";
    import LandingPage from "./pages/LandingPage.svelte";
    import Game from "./pages/Game.svelte";
    import Information from "./pages/Information.svelte";

    const routes = {
        "/": LandingPage,
        "/game": Game,
        "/informationen": Information,
    };

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
if (isMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }

    function goToLandingPage() {
        window.location.href = "#/";
    }
</script>

<div class="container-background"></div>
<header>
    <div class="container">
        <!-- Header mit Links -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div class="header" class:openHeader={isMenuOpen}>

            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="logo" on:click={goToLandingPage} style="cursor: pointer;">
                <img
                    src="Tierlogo.png"
                    alt="Logo"
                    width="30"
                    style="vertical-align: middle;"
                />
            </div>
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="hamburger" on:click={toggleMenu}>
                &#9776;
            </div>
            <nav class:open={isMenuOpen}>
                <a href="#/" on:click={toggleMenu}>Home</a>
                <a href="#/game" on:click={toggleMenu}>Fährtenlesen</a>
                <a href="#/informationen" on:click={toggleMenu}>Informationen</a>
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

    .header {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
		background: linear-gradient(to bottom, rgb(16, 23, 17), rgba(0, 0, 0, 0));
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        color: white;
        height: 5rem;
transition: background-color 0.3s ease;
    }

    .logo {
        grid-column: 1 / span 1;
    }

    .hamburger {
        display: none;
        font-size: 2rem;
        cursor: pointer;
        grid-column: 10 / span 1;
        text-align: right;
    }

    nav {
        grid-column: 7 / span 5;
        display: flex;
        justify-content: flex-end;
    }

    .header a {
        text-decoration: none;
        color: white;
        margin: 0 1rem;
        font-size: 1.2rem;
    }

    .header a:hover {
        text-decoration: underline;
    }

    .container-background {
        position: absolute;
        background: url("titlescreen.jpg") no-repeat center center/cover;
        filter: brightness(0.5); /* Abdunkeln auf 50% Helligkeit */
        height: 100vh;
        width: 100vw;
        z-index: -1;
    }

    /* Media Queries für mobile Geräte */
    @media (max-width: 768px) {
        .header {
            grid-template-columns: 1fr 1fr;
            height: auto;
            padding: 1rem;
        }

		.openHeader {
			background-color: rgba(16, 23, 17, 0.9);
		}

        .logo {
            grid-column: 1 / span 1;
            text-align: left;
        }

        .hamburger {
            display: block;
        }

        nav {
            grid-column: 1 / -1;
            display: none;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        nav.open {
            display: flex;
        }

        .header a {
            margin: 0.5rem 0;
            font-size: 1rem;
        }

        /* Hintergrundfarbe ändern, wenn Menü geöffnet ist */
    }

    @media (max-width: 480px) {
        .header a {
            font-size: 0.9rem;
        }
    }
</style>
