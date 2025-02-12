<script>
    import { createEventDispatcher } from 'svelte';

    // Das zentrale Tier wird von `Game.svelte` gesetzt
    export let centralAnimal;

    // Hinweise aus den Feldern extrahieren
    let hints = [];

    let currentHintIndex = 0;

    // Event-Dispatcher erstellen
    const dispatch = createEventDispatcher();

    // Reaktionsblock, um das hints-Array zu aktualisieren, wenn sich centralAnimal ändert
    $: hints = [
        centralAnimal?.Paw || "Kein Hinweis verfügbar",
        centralAnimal?.hint_1 || "Kein Hinweis verfügbar",
        centralAnimal?.hint_2 || "Kein Hinweis verfügbar",
        centralAnimal?.hint_3 || "Kein Hinweis verfügbar"
    ];

    // Funktionen zum Wechseln der Hinweise
    function nextHint() {
        currentHintIndex = (currentHintIndex + 1) % hints.length;
        dispatch('useHint'); // Event auslösen, wenn ein Hinweis verwendet wird
    }

    function previousHint() {
        currentHintIndex = (currentHintIndex - 1 + hints.length) % hints.length;
        dispatch('useHint'); // Event auslösen, wenn ein Hinweis verwendet wird
    }

    // Debugging, um sicherzustellen, dass `centralAnimal` richtig ankommt
    console.log("🐾 CentralAnimal geladen:", centralAnimal, hints);
</script>

<div class="central-container">
    <!-- Zentrales Symbol mit Bild -->
    <div class="central-icon">
        <img src={`/images/footprint-images/${centralAnimal?.name_german}-Faehrte.png`} alt="{centralAnimal?.name_german}" />
    </div>

    <!-- Hinweis-Container -->
    <div class="hint">
        <button on:click={previousHint}>
            <img src={"/svgs/chevron-left.svg"} alt="Previous Hint" />
        </button>
        <p>{hints[currentHintIndex]}</p>
        <button on:click={nextHint}>
            <img src="/svgs/chevron-right.svg" alt="Next Hint" />
        </button>
    </div>
</div>

<style>
    .central-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
    }

    .central-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 7rem;
        height: 7rem;
        background: #e0e0e0;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    .central-icon img {
        width: 70%;
        height: auto;
        border-radius: 1rem;
    }

    .hint {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 800px;
        color: white;
        text-align: center;
        background: rgba(5, 21, 5, 0.9);
        border-radius: 1rem;
        padding: 1rem;
    }

    .hint p {
        margin: 0 1rem;
        font-size: 1.2rem;
    }

    .hint button {
        font-size: 1.5rem;
        padding: 0.5rem;
        cursor: pointer;
        background: none;
        border: none;
        display: flex;
        align-items: center;
    }

    .hint button img {
        width: 1.5rem;
        height: 1.5rem;
    }

    /* Media Queries für mobile Geräte */
    @media (max-width: 768px) {
        .central-container {
            margin-top: 10rem;
            width: 50%;
            padding: 0 1rem;
        }

        .central-icon {
            width: 5rem;
            height: 5rem;
        }

        .hint {
            width: 100%;
            max-width: 100%;
            padding: 0.5rem;
        }

        .hint p {
            font-size: 1rem;
        }

        .hint button {
            font-size: 1.2rem;
            padding: 0.3rem;
        }

        .hint button img {
            width: 1.2rem;
            height: 1.2rem;
        }
    }

    @media (max-width: 480px) {
        .central-container {
            margin-top: 35rem;
            width: 60%;
            padding: 0 1rem;
        }

        .central-icon {
            width: 6rem;
            height: 6rem;
        }

        .hint {
            width: 100%;
            max-width: 100%;
            padding: 0.5rem;
        }

        .hint p {
            font-size: 0.9rem;
        }

        .hint button {
            font-size: 1rem;
            padding: 0.3rem;
        }

        .hint button img {
            width: 1rem;
            height: 1rem;
        }
    }
</style>
