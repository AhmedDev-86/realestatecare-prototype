# RealEstateCare – Inspectie Dashboard (Prototype)

Dit project is een functionerend front-end prototype voor de case RealEstateCare.  
De applicatie is gebouwd met React (Vite) en bevat een responsive interface met HTML en CSS.

## Live demo
https://realestatecare-prototype.netlify.app/login

## Source code
https://github.com/AhmedDev-86/realestatecare-prototype

## Functionaliteiten

Het prototype bevat onder andere:

- Inlogscherm met gesimuleerde authenticatie (gebruikersnaam + wachtwoord + verificatie).
- Overzicht van openstaande inspecties.
- Overzicht van uitgevoerde inspecties.
- Pagina Instellingen.
- Pagina Kennisbank.
- Routing tussen pagina’s.
- State management met Redux Toolkit.
- JSON-data voor inspecties, instellingen en kennisbank.
- Data wordt opgehaald vanuit JSON-bestanden in /public/data.

## Technische stack

- Framework: React (Vite)
- Routing: React Router
- State management: Redux Toolkit
- Styling: Custom CSS
- Data: JSON-bestanden in de map /public/data
- Authenticatie (gesimuleerd):
  - Gebruikersnaam: inspector
  - Wachtwoord: 2023

## Installatie

1. Installeer dependencies  
   npm install

2. Start de development server  
   npm run dev

3. Maak een productie build  
   npm run build

## Projectstructuur

src  
- pages (alle pagina’s)  
- services (data services)  
- store (Redux store en slices)  
- styles.css  
- App.jsx  
- main.jsx  

public  
- data (JSON-bestanden)

## Auteur
AhmedDev-86  

## Verantwoording
Tijdens het bouwen van dit prototype heb ik keuzes gemaakt op basis van de eisen uit de opdracht, de beschikbare technologieën en de praktische toepasbaarheid binnen een moderne front-end workflow. Hieronder licht ik toe hoe ik ben omgegaan met beveiliging, toegankelijkheid, usability en best practices.

### Beveiliging
Hoewel het prototype geen echte backend bevat, heb ik binnen de front-end een aantal beveiligingsprincipes toegepast. De login werkt met een gesimuleerde 2-weg authenticatie waarbij de gebruiker een extra code moet invoeren. De ProtectedRoute-component voorkomt dat niet-ingelogde gebruikers toegang krijgen tot de inhoud van de applicatie. Verder worden er geen gevoelige gegevens in localStorage geplaatst en wordt er enkel met mock-data gewerkt. Dit sluit aan bij de opdracht, waarin de focus ligt op structuur in plaats van een volledig beveiligde omgeving.

### Toegankelijkheid (WCAG 2.1 – niveau A)
Tijdens het ontwerpen en implementeren heb ik rekening gehouden met basisrichtlijnen uit WCAG 2.1 niveau A. Voorbeelden hiervan zijn:
- Duidelijke contrasten gebaseerd op de huisstijl.
- Labels bij alle invoervelden.
- Semantische HTML-structuur binnen de React-componenten.
- Navigatie die consistent is op alle schermen.
- Knoppen die ook via toetsenbord gebruikt kunnen worden.

Het prototype voldoet aan de belangrijkste eisen van niveau A, maar voor AA of AAA zouden extra aria-attributen en uitgebreidere contrastanalyse nodig zijn.

### Usability (Nielsen Heuristieken)
De applicatie volgt meerdere heuristieken van Jakob Nielsen:
- Consistency & standards: alle pagina’s hebben dezelfde navigatiebalk en structuur.
- Visibility of system status: de login geeft duidelijke feedback, net als de actieve navigatie-items.
- User control & freedom: gebruikers kunnen altijd terug naar een andere pagina via de navigatie.
- Recognition rather than recall: duidelijke namen voor menu-items en herkenbare iconen.

De interface is eenvoudig opgezet zodat gebruikers niet onnodig belast worden.

### Styling & Best Practices
De huisstijl uit de meegeleverde bestanden is verwerkt in kleuren, logo en algemene vormgeving. Er is gebruikgemaakt van een component-gebaseerde structuur, services voor datalogica, Redux Toolkit voor state management en een overzichtelijke projectindeling. De code is geschreven met aandacht voor leesbaarheid en uitbreidbaarheid.

### Conclusie
Het prototype voldoet aan de gevraagde functionaliteiten en laat zien hoe de toepassing er in de praktijk kan uitzien. De focus lag op structuur, toegankelijkheid en consistentie. Hoewel het geen productierijp systeem is, vormt het een solide basis voor verdere ontwikkeling.
