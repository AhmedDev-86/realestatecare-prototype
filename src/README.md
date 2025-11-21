# RealEstateCare – Inspectie dashboard (prototype)

Dit project is een werkend front-end prototype voor de case **RealEstateCare**.  
De applicatie is gebouwd met **React (Vite)** voor de applicatielaag en een maatwerk **responsive touch UI** met HTML/CSS.

De demo bevat:

- Inlogscherm met gesimuleerde 2-weg authenticatie (username + wachtwoord + verificatiecode).
- Overzicht **Openstaande inspecties**.
- Overzicht **Uitgevoerde inspecties**.
- Pagina **Instellingen**.
- Pagina **Kennisbank**.
- Routing tussen de schermen.
- Eenvoudig state management met **Redux Toolkit**.
- JSON-data die de case weerspiegelt (inspecties, instellingen, kennisbank).
- Ophalen van data via een "web API"-achtige structuur (fetch naar `/data/*.json`).

---

## 1. Technische stack

- **Framework:** React (Vite)
- **Routing:** React Router
- **State management:** Redux Toolkit
- **Styling:** custom CSS gebaseerd op de huisstijl van RealEstateCare
- **Data:** JSON-bestanden in `/public/data`
- **Authenticatie (gesimuleerd):**
  - Gebruikersnaam: `inspector`
  - Wachtwoord: `Real2025!`
  - Verificatiecode: `123456`

---

## 2. Projectstructuur

```text
realestatecare-prototype
├─ public
│  ├─ img
│  │  └─ RealEstate.png           # Logo
│  └─ data
│     ├─ inspections.json         # Open / completed inspecties
│     ├─ settings.json            # Basis instellingen
│     └─ knowledge.json           # Kennisbankartikelen
│
└─ src
   ├─ main.jsx                    # Entry point + Router + Redux Provider
   ├─ App.jsx                     # Route-definitie
   ├─ styles.css                  # Globale styling / huisstijl
   │
   ├─ store
   │  ├─ index.js                 # Redux store configuratie
   │  ├─ authSlice.js             # Login + 2FA state
   │  └─ inspectionsSlice.js      # Inspectie-data state
   │
   ├─ services
   │  └─ api.js                   # Ophalen JSON (fetch)
   │
   ├─ components
   │  ├─ NavBar.jsx               # Top navigatie + logo
   │  ├─ Layout.jsx               # Layout + <Outlet/>
   │  └─ ProtectedRoute.jsx       # Beschermde routes
   │
   └─ pages
      ├─ Login.jsx                # Login + 2FA
      ├─ OpenInspections.jsx      # Openstaande inspecties
      ├─ CompletedInspections.jsx # Uitgevoerde inspecties
      ├─ Settings.jsx             # Instellingen
      └─ KnowledgeBase.jsx        # Kennisbank

## Verantwoording
Verantwoording

Bij het ontwikkelen van dit prototype voor RealEstateCare heb ik bewust keuzes gemaakt op het gebied van beveiliging, bruikbaarheid, toegankelijkheid en codekwaliteit. Omdat het om een front-end prototype gaat, was het doel vooral om een logische en realistische gebruikerservaring te creëren die aansluit bij de case. In deze verantwoording licht ik kort toe welke afwegingen ik heb gemaakt en waarom.

Beveiliging

De applicatie bevat een gesimuleerde inlog- en verificatiestroom. Hoewel er geen echte backend is, heb ik geprobeerd om het proces zo geloofwaardig mogelijk vorm te geven. Inloggegevens en verificatiecodes worden niet extern opgeslagen of verstuurd; ze worden uitsluitend in de front-end gevalideerd. Routes met gevoelige informatie worden afgeschermd via een ProtectedRoute, zodat de gebruiker niet zonder inloggen bij de dashboardpagina’s kan komen.
Een echte productieomgeving zou uiteraard strengere maatregelen vereisen, zoals server-side validatie, tokenbeheer, HTTPS en inputvalidatie, maar voor dit prototype is de opzet bewust eenvoudig gehouden zonder de illusie van een veilige flow te verliezen.

Bruikbaarheid (Nielsen’s heuristieken)

Tijdens het ontwerp heb ik me vooral gefocust op duidelijkheid en voorspelbaarheid. De navigatiebalk is altijd zichtbaar, waardoor gebruikers eenvoudig tussen de vier hoofdschermen kunnen wisselen. Teksten en titels zijn herkenbaar gekozen en sluiten aan op de taal van de case (“Openstaande inspecties”, “Kennisbank”, enzovoort).
Foutmeldingen verschijnen direct boven het formulier en zijn kort en begrijpelijk. In de inspectielijsten wordt informatie in kleine, overzichtelijke kaarten gepresenteerd, wat helpt om cognitieve belasting laag te houden.
Het doel was een applicatie waarin gebruikers niet hoeven te ‘zoeken’ naar functies, maar intuïtief begrijpen waar ze moeten zijn zonder extra uitleg.

Toegankelijkheid (WCAG 2.1 niveau A)

Hoewel dit prototype geen volledige toegankelijkheidsaudit heeft doorlopen, heb ik geprobeerd om basisrichtlijnen toe te passen. De interface gebruikt semantische HTML-elementen waar mogelijk, zoals <section> met aria-labelledby, en alle invoervelden hebben gekoppelde labels. De kleurcontrasten tussen tekst en achtergrond zijn sterk genoeg om ook bij mindere schermkwaliteit leesbaar te blijven.
Verder zijn focusstaten duidelijk zichtbaar, zodat gebruikers met toetsenbordnavigatie weten waar ze zich bevinden. Niet alle WCAG-criteria zijn volledig uitgewerkt, maar de belangrijkste “A-niveau” punten zijn meegenomen tijdens het bouwen.

Stijlgidsen en best practices

De structuur van het project is opgezet met het oog op uitbreidbaarheid. Componenten, pagina’s, services en Redux-slices zijn logisch gescheiden, waardoor het project ook voor andere ontwikkelaars makkelijk te begrijpen blijft. CSS is opgebouwd met variabelen voor kleuren en consistent gebruikte spacing en typografie. Dit maakt het eenvoudig om de huisstijl later aan te passen zonder de hele codebase door te gaan.
Voor de logica heb ik gebruikgemaakt van Redux Toolkit, omdat deze methode boilerplate vermindert en zorgt voor voorspelbaar gedrag van de applicatiestatus. React Router is op een overzichtelijke manier geïntegreerd: elke pagina heeft één duidelijke route en er wordt gebruikgemaakt van nested routing voor de algemene layout.

Samenvatting

Het prototype laat zien hoe de belangrijkste onderdelen van de RealEstateCare-case in een moderne front-end oplossing kunnen worden verwerkt. De keuzes rondom beveiliging, toegankelijkheid en consistentie zijn gebaseerd op haalbaarheid binnen een prototypecontext, zonder het realistische karakter van de applicatie uit het oog te verliezen. Hoewel deze versie niet bedoeld is als productieversie, vormt het een solide basis waarop verdere functionaliteit, een backend-koppeling en uitgebreidere beveiligingsmaatregelen kunnen worden opgebouwd.