<script>
  // Hier kannst du später Routing oder Interaktivität hinzufügen
</script>

<style>
  /* Allgemeines Styling */
  /* body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: #252525;
  } */

  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
    height: 100vh;
    text-align: left;
    padding: 1rem;
    /* color: black; */
  }

  h1 {
    line-height: 1.2;
    grid-column: 2 / span 6;
    font-size: 6rem;
    margin: 0;
    margin-top: 15vh;
    font-family: 'Merienda';
    font-weight: 500;
    color: #E5EFD9;
  }

  .button-group {
    display: flex;
    gap: 1rem;
    margin-bottom: 15vh;
  }

  /* .button-group button {
    background: #a23b00;
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    cursor: pointer;
    margin: 0.5rem;
    border-radius: 5px;
  }

  .button-group button:hover {
    background: #d04e0e;
  } */
   
</style>

<div class="container">
  <!-- Header mit Links -->
  <!-- <div class="header">
    <div class="logo">
      <img src="assets/Tierlogo.svg" alt="Logo" width="30" style="vertical-align: middle;" />
    </div>
    <nav>
      <a href="#faehrtenlesen">Fährtenlesen</a>
      <a href="#informationen">Informationen</a>
      <a href="#impressum">Impressum</a>
    </nav>
  </div> -->

  <!-- Haupttitel -->
  <h1>Fährten der Waldtiere</h1>

  <!-- Buttons -->
  <div class="button-group">
    <!-- <button onclick="window.location.href='#faehrtenlesen'">Zum Fährtenlesen</button>
    <button onclick="window.location.href='#informationen'">Informationen</button>
    <button onclick="window.location.href='#impressum'">Impressum</button> -->
  </div>
</div>