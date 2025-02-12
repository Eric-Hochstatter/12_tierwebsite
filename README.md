# Fährtenlesen - Tierwebsite

## Überblick

Dieses Projekt ist eine interaktive Webseite, die den Benutzern hilft, Tierspuren zu erkennen und zu lernen. Die Webseite bietet ein Spiel, bei dem die Benutzer Hinweise verwenden können, um das richtige Tier zu erraten. Je weniger Hinweise verwendet werden, desto mehr Punkte erhält der Benutzer.

## Technologien

-   **Svelte**: Ein modernes Frontend-Framework, das für die Erstellung der Benutzeroberfläche verwendet wird.
-   **Vite**: Ein schneller Build-Tool, das für die Entwicklung und das Builden des Projekts verwendet wird.
-   **svelte-spa-router**: Ein Router für Single-Page-Anwendungen in Svelte.
-   **Axios**: Eine Bibliothek für HTTP-Anfragen, die verwendet wird, um Wikipedia-Artikel abzurufen.

## Installation

1. Klone das Repository:

    ```bash
    git clone <repository-url>

    ```

2. Navigiere in das Projektverzeichnis:
   cd 12_tierwebsite

3. Installiere die Abhängigkeiten:
   npm install

4. Starte die Entwicklungsumgebung:
   npm run dev

# Projektstruktur

src: Enthält den Quellcode der Anwendung.
assets: Enthält statische Dateien wie Bilder und Schriftarten.
components: Enthält wiederverwendbare Svelte-Komponenten.
js: Enthält JavaScript-Dateien für Daten und Funktionen.
pages: Enthält die Seiten der Anwendung.
App.svelte: Die Hauptkomponente der Anwendung.
main.js: Der Einstiegspunkt der Anwendung.

# Seiten und Komponenten

## Seiten

1. LandingPage.svelte:
   Die Startseite der Anwendung. Sie enthält eine kurze Erklärung der Webseite und einen Button, um das Spiel zu starten.

2. Game.svelte:
   Die Spielseite, auf der die Benutzer Hinweise verwenden können, um das richtige Tier zu erraten. Der Score wird basierend auf der Anzahl der verwendeten Hinweise berechnet.

3. Information.svelte:
   Eine Informationsseite, die Tipps zum Fährtenlesen und Informationen über Tierspuren bietet. Die Seite verwendet die Wikipedia-API, um zusätzliche Informationen abzurufen.

## Komponenten

1. Card.svelte:
   Eine Komponente, die eine Karte für jedes Tier darstellt. Die Karte kann umgeschaltet werden, um anzuzeigen, ob das Tier ausgewählt wurde.

2. CentralAnimal.svelte:
   Eine Komponente, die das zentrale Tier und die Hinweise anzeigt. Die Benutzer können durch die Hinweise blättern, und jedes Mal, wenn ein Hinweis verwendet wird, wird ein Event ausgelöst.

## APIs

Wikipedia API: Die Anwendung verwendet die Wikipedia-API, um zusätzliche Informationen über Tierspuren abzurufen. Die Funktion fetchWikipediaArticle in functions.js wird verwendet, um die Daten von Wikipedia abzurufen.

## Besonderheiten

Punktesystem: Das Spiel enthält ein Punktesystem, bei dem die Benutzer basierend auf der Anzahl der verwendeten Hinweise Punkte erhalten. Je weniger Hinweise verwendet werden, desto mehr Punkte erhält der Benutzer.
Responsive Design: Die Anwendung ist für verschiedene Bildschirmgrößen optimiert und verwendet Media Queries, um sicherzustellen, dass sie auf mobilen Geräten gut aussieht.
Event-Handling: Die Anwendung verwendet Svelte's Event-Dispatcher, um Events auszulösen und zu behandeln, z.B. wenn ein Hinweis verwendet wird.
