# RealEstateCare – Inspectie Dashboard (Prototype)

Dit project is een front-end prototype van het **RealEstateCare** inspectie dashboard.  
De applicatie is ontwikkeld als opdracht voor de opleiding en volgt de briefing van de case *RealEstateCare*.

De demo-versie is online te benaderen via:

- **Live demo:** https://realestatecare-prototype.netlify.app/login

---

## Doel van de applicatie

De applicatie ondersteunt inspecteurs bij het beheren van vastgoedinspecties.  
In dit prototype kunnen gebruikers:

- Openstaande inspecties bekijken
- Uitgevoerde inspecties raadplegen
- Persoonlijke en applicatie-instellingen aanpassen
- Kennisartikelen bekijken in de kennisbank

De applicatie is bedoeld als **werkend prototype**, niet als volledig productieplatform.

---

## Gebruikte technologieën

- **Framework:** React (met Vite als build tool)
- **Routing:** React Router (Single Page Application)
- **Stijlgids / UI:** custom CSS op basis van de huisstijl van RealEstateCare  
- **Statebeheer:** eenvoudig centraal statebeheer met React state/Context  
  > (In een productieomgeving kan dit worden uitgebreid met bijvoorbeeld Redux.)
- **Data:** JSON-bestanden die de gegevens uit de case structureren
- **Hosting:** Netlify

---

## Architectuur in het kort

- `src/main.jsx` – entrypoint van de applicatie
- `src/App.jsx` – hoofdrouting en layout
- `src/components/` – herbruikbare componenten (navigatie, kaarten, etc.)
- `src/pages/` – pagina’s:
  - `OpenInspections`
  - `CompletedInspections`
  - `Settings`
  - `KnowledgeBase`
  - `Login`
- `src/data/` – JSON-bestanden met inspecties en kennisartikelen
- `src/state/` (indien gebruikt) – centrale state (bijvoorbeeld Context/Redux store)

---

## Data & Web API

De gegevens uit de case (openstaande en uitgevoerde inspecties, kennisbank, instellingen) zijn ondergebracht in **JSON-data**.  
Deze data wordt in de applicatie opgehaald via een service/fetch-laag en vervolgens beschikbaar gemaakt aan de componenten via centraal statebeheer.

Voor het doel van deze opdracht fungeert de JSON + service als een gesimuleerde **Web API**.

---

## Routing en schermen

De applicatie bevat de volgende schermen, zoals in de case beschreven:

- `/open-inspections` – **Openstaande inspecties**
- `/completed-inspections` – **Uitgevoerde inspecties**
- `/settings` – **Instellingen**
- `/knowledge-base` – **Kennisbank**
- `/login` – **Inlogscherm**

De navigatie in de topbar maakt het mogelijk om tussen de schermen te schakelen zonder pagina-refresh (SPA).

---

## Inlogscherm en (gesimuleerde) 2-weg authenticatie

Het inlogscherm simuleert een eenvoudige vorm van 2-weg authenticatie:

- De gebruiker voert gebruikersnaam/e-mailadres en wachtwoord in.
- De invoer wordt lokaal gevalideerd tegen vooraf ingestelde testgegevens.
- Bij onjuiste gegevens wordt een foutmelding getoond.
- Bij correcte gegevens wordt de gebruiker doorgestuurd naar de hoofdpagina (openstaande inspecties).

Er vindt **geen echte back-end authenticatie** plaats; dit is conform de opdracht een prototype.

---

## Huisstijl en UI-componenten

De applicatie volgt de huisstijl van **RealEstateCare**:

- Kleurgebruik gebaseerd op de aangeleverde huisstijl (donkerblauw, turquoise, wit).
- Logo van RealEstateCare in de header.
- Gebruik van kaarten met afgeronde hoeken en zachte schaduwen voor inspecties en kennisartikelen.

De UI combineert:

- Aangepaste componenten (kaarten, layout, header)
- Gestileerde elementen volgens de aangeleverde designrichtlijnen

---

## Veiligheid

Omdat dit een front-end prototype is, ligt de nadruk op:

- Geen opslag van echte wachtwoorden of persoonsgegevens.
- Inloggegevens zijn testgegevens en hard-coded voor demo-doeleinden.
- Er worden geen gevoelige gegevens naar een echte back-end verstuurd.
- Basismaatregelen zoals het vermijden van `dangerouslySetInnerHTML` worden toegepast.

In een productieomgeving zouden onder andere de volgende maatregelen worden toegevoegd:

- Server-side authenticatie (bijv. OAuth/JWT)
- Input-validatie en sanitatie op de server
- HTTPS-only en beveiligde cookies

---

## Toegankelijkheid (WCAG 2.1 – niveau A)

Bij het ontwerp is rekening gehouden met de belangrijkste WCAG 2.1-niveau A-richtlijnen:

- Voldoende kleurcontrast tussen tekst en achtergrond
- Duidelijke koppenstructuur (H1, H2, etc.)
- Knoppen en links zijn semantisch correcte HTML-elementen (`<button>`, `<a>`)
- Focusvolgorde is logisch door gebruik van standaard HTML-componenten
- Tekst is leesbaar op verschillende schermgroottes

Niet alle WCAG 2.1-criteria worden volledig afgedekt; dit is een prototype.  
Voor niveau AA zouden o.a. uitgebreidere toetsenbordnavigatie, ARIA-attributen en meer vormen van alternatieve tekst worden toegevoegd.

---

## Bruikbaarheid (10 heuristieken van Jakob Nielsen)

De belangrijkste heuristieken die zijn toegepast:

- **Zichtbaarheid van de systeemstatus:** duidelijke titels per pagina, overzichtelijke kaarten met kerninformatie.
- **Overeenkomst met de echte wereld:** termen als *inspecties*, *rapportnummer*, *kennisbank* sluiten aan bij de context van vastgoedinspecties.
- **Gebruikerscontrole en vrijheid:** duidelijke loguit-knop en eenvoudige navigatie.
- **Consistentie en standaarden:** consistente typografie, kleuren en componentstijl op alle pagina’s.
- **Esthetisch en minimalistisch ontwerp:** alleen noodzakelijke informatie per kaart, geen visuele ruis.

---

## Bekende beperkingen / Niet geïmplementeerd

- De back-end is gesimuleerd (geen echte database of API).
- De securitymaatregelen zijn op prototype-niveau.
- Niet alle WCAG 2.1-criteria en heuristieken zijn volledig uitgewerkt.

---

## Installatie en lokaal draaien

```bash
git clone https://github.com/AhmedDev-86/realestatecare-prototype.git
cd realestatecare-prototype
npm install
npm run dev
