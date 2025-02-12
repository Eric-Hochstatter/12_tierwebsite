# **Fährtenlesen - Tierwebsite**

## **Überblick**

Dieses Projekt ist eine interaktive Webseite, die den Benutzern hilft, Tierspuren zu erkennen und zu lernen.  
Die Webseite bietet ein **Spiel**, bei dem die Benutzer Hinweise verwenden können, um das richtige Tier zu erraten.  
Je weniger Hinweise verwendet werden, desto mehr Punkte erhält der Benutzer.

Zusätzlich bietet die Webseite **Informationen über das Fährtenlesen**, einschließlich einer **Wikipedia-Integration**, um weiterführende Inhalte abzurufen.

---

## **Technologien**

-   **Svelte** – Ein modernes Frontend-Framework für die Benutzeroberfläche.
-   **Vite** – Ein schneller Build-Tool für die Entwicklung.
-   **svelte-spa-router** – Ein Router für Single-Page-Anwendungen in Svelte.
-   **Axios** – Eine Bibliothek für HTTP-Anfragen, die verwendet wird, um Wikipedia-Artikel abzurufen.
-   **Svelte Transitions & Animationen** – Für flüssige Benutzerinteraktionen.
-   **Media Queries & Responsive Design** – Um die Webseite für mobile Geräte zu optimieren.

---

## **Installation**

1. **Klone das Repository:**  
   git clone <repository-url>

2. **Navigiere in das Projektverzeichnis:**  
   cd 12_tierwebsite

3. **Installiere die Abhängigkeiten:**  
   npm install

4. **Installiere den Ladebalken:**  
   npm install ldrs

5. **Starte die Entwicklungsumgebung:**  
   npm run dev

---

## **Projektstruktur**

-   **src/** → Enthält den Quellcode der Anwendung.
-   **assets/** → Enthält statische Dateien wie Bilder und Schriftarten.
-   **components/** → Enthält wiederverwendbare Svelte-Komponenten.
-   **js/** → Enthält JavaScript-Dateien für Datenverarbeitung und API-Funktionen.
-   **pages/** → Enthält die Hauptseiten der Anwendung.
-   **App.svelte** → Die Hauptkomponente der Anwendung.
-   **main.js** → Der Einstiegspunkt der Anwendung.

---

## **Seiten und Komponenten**

### **Seiten**

1. **LandingPage.svelte**

    - Die Startseite der Anwendung.
    - Enthält eine kurze Einführung und einen Button, um das Spiel zu starten.

2. **Game.svelte**

    - Die Spielseite, auf der die Benutzer Hinweise verwenden können, um das richtige Tier zu erraten.
    - Das **Punktesystem** berechnet die Punkte basierend auf der Anzahl der verwendeten Hinweise.

3. **Information.svelte**
    - Eine Informationsseite mit **Tipps zum Fährtenlesen** und Fakten über Tierspuren.
    - Verwendet die **Wikipedia-API**, um zusätzliche Informationen abzurufen.

### **Komponenten**

1. **Card.svelte**

    - Eine Komponente, die eine Karte für jedes Tier darstellt.
    - Karten können umgeschaltet werden, um anzuzeigen, ob das Tier ausgewählt wurde.

2. **CentralAnimal.svelte**
    - Zeigt das **zentrale Tier und die Hinweise** an.
    - Benutzer können durch die Hinweise blättern.
    - Löst Events aus, wenn ein Hinweis verwendet wird.

---

## **APIs**

-   **Wikipedia API**
    -   Die Anwendung nutzt die Wikipedia-API, um weiterführende Informationen über Tierspuren abzurufen.
    -   Die Funktion `fetchWikipediaArticle()` in `functions.js` wird verwendet, um die Daten abzurufen.

---

## **Besonderheiten**

-   **🎯 Punktesystem**

    -   Je weniger Hinweise ein Spieler verwendet, desto mehr Punkte erhält er.

-   **📱 Responsive Design**

    -   Die Anwendung ist für verschiedene Bildschirmgrößen optimiert.
    -   **Media Queries** sorgen für eine **optimale Darstellung auf mobilen Geräten**.

-   **📡 Live-API-Anbindung**

    -   Dynamische Daten werden von **Wikipedia** geladen und als HTML-Content angezeigt.

-   **⚡ Event-Handling mit Svelte**
    -   Nutzt **Svelte’s Event-Dispatcher**, um Events auszulösen und zu verwalten.

---

🚀 Viel Spaß beim **Fährtenlesen!** 🐾
