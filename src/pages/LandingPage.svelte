<script>
  import Game from "./Game.svelte";

  const routes = {
        "/game": Game,
    };
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(7, 1fr);
    gap: 1rem;
    height: 100vh;
    text-align: left;
    /* padding: 1rem; */
    /* color: black; */
  }

  h1 {
    line-height: 1.2;
    grid-column: 2 / span 6;
    font-size: 5rem;
    margin: 0;
    margin-top: 15vh;
    font-family: 'Merienda';
    font-weight: 500;
    color: #E5EFD9;
  }

  .description {
    grid-row: 3;
    grid-column: 4 / span 6;
    background: rgba(13, 21, 13, 0.9);
    color: white;
    padding: 1rem;
    border-radius: 1rem;
    font-size: 1.2rem;
    line-height: 1.5;
    margin-top: 2rem;
    text-align: center;
    padding: 2rem;
  }

  /* .button-group {
    display: flex;
    gap: 1rem;
    margin-bottom: 15vh;
  } */

  /* Media Queries für mobile Geräte */
  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
      padding: 1rem;
      text-align: left;
    }

    h1 {
      grid-column: 1 / -1;
      font-size: 3rem;
      margin-top: 5rem;
    }

    .description {
      grid-column: 1 / -1;
      font-size: 1rem;
      padding: 1rem;
      margin-top: 1rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 3rem;
      margin-top: 5rem;
      text-align: left;
    }

    .description {
      grid-column: 1 / -1;
      font-size: 0.9rem;
      padding: 0.5rem;
      margin-top: 1rem;
    }
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
</style>

<div class="container">
  <!-- Haupttitel -->
  <h1>Fährten der Waldtiere</h1>

  <!-- Beschreibung -->
  <div class="description">
    <h2>Erklärung</h2>
    <p>
    Auf dieser Webseite kannst du lernen, wie man Tierspuren liest und erkennt. 
    Du kannst dein Wissen in einem interaktiven Spiel testen und mehr über die verschiedenen Tiere und ihre Spuren erfahren.
    </p> 
    <button on:click={() => window.location.href='#/game'}>Zum Fährtenlesen</button>
  </div>

</div>