# TEHTÄVÄT 0.1 - 0.6

## Tehtäviä  
Tehtävät palautetaan GitHubin kautta ja merkitsemällä tehdyt tehtävät palautussovellukseen.

Voit palauttaa kurssin kaikki tehtävät samaan repositorioon tai käyttää useita repositorioita. Jos palautat eri osien tehtäviä samaan repositorioon, käytä järkevää hakemistojen nimentää. Jos käytät yksityistä (private) repositoriota tehtävien palautukseen, liitä repositoriolle collaboratoriksi mluukkai

Eräs varsin toimiva hakemistorakenne palautusrepositoriolle on tässä esimerkkirepositoriossa käytetty tapa, jossa kutakin osaa kohti on oma hakemistonsa, joka vielä jakautuu tehtäväsarjat (kuten osan 1 unicafe) sisältäviin hakemistoihin:

    osa0
    osa1
      kurssitiedot
      unicafe
      anekdootit
    osa2
      puhelinluettelo
      maiden_tiedotcopy
    Tehtävät palautetaan yksi osa kerrallaan. Kun olet palauttanut osan tehtävät, et voi enää palauttaa saman osan tekemättä jättämiäsi tehtäviä.

### 0.1: HTML
Kertaa HTML:n perusteet lukemalla Mozillan tutoriaali HTML:stä.

Tätä tehtävää ei palauteta GitHubiin. Riittää, että luet tutoriaalin.

### 0.2: CSS
Kertaa CSS:n perusteet lukemalla Mozillan tutoriaali CSS:stä.

Tätä tehtävää ei palauteta GitHubiin. Riittää, että luet tutoriaalin.


### 0.3: HTML:n lomakkeet
Tutustu HTML:n lomakkeiden perusteisiin lukemalla Mozillan tutoriaali Your first form.

Tätä tehtävää ei palauteta GitHubiin. Riittää, että luet tutoriaalin.


### 0.4: uusi muistiinpano
Luvussa JavaScriptia sisältävän sivun lataaminen - kertaus kuvataan sekvenssikaavion) avulla sivun https://studies.cs.helsinki.fi/exampleapp/notes avaamisen aikaansaama tapahtumasarja.

Kaavio on luotu GitHubiin Markdown-tiedostona hyödyntäen Mermaid-syntaksia seuraavasti:

sequenceDiagram

    participant browser
    participant server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server    

    Note right of browser: The browser executes the callback function that renders the notes copy
    
Tee vastaavanlainen kaavio, joka kuvaa, mitä tapahtuu tilanteessa, jossa käyttäjä luo uuden muistiinpanon ollessaan sivulla https://studies.cs.helsinki.fi/exampleapp/notes eli kirjoittaa tekstikenttään jotain ja painaa nappia tallenna.

Kirjoita tarvittaessa palvelimella tai selaimessa tapahtuvat operaatiot sopivina kommentteina kaavion sekaan.

Kaavion ei ole pakko olla sekvenssikaavio. Mikä tahansa järkevä kuvaustapa käy.

Voit tehdä kaaviot millä ohjelmistolla haluat, mutta suositeltava tapa on tehdä ne suoraan GitHubiin Markdown- eli md-päätteisiksi tiedostoiksi käyttäen Mermaid-syntaksia.

Kaikki oleellinen tieto tämän ja seuraavien kahden tehtävän tekemiseen on tässä osassa. Näiden tehtävien ideana on, että luet tekstin vielä kerran ja mietit tarkkaan, mitä missäkin tapahtuu. Ohjelman koodin lukemista ei näissä tehtävissä edellytetä, vaikka sekin on toki mahdollista.


### 0.5: Single Page App
Tee kaavio tilanteesta, jossa käyttäjä menee selaimella osoitteeseen https://studies.cs.helsinki.fi/exampleapp/spa eli muistiinpanojen Single Page App-versioon


### 0.6: Uusi muistiinpano
Tee kaavio tilanteesta, jossa käyttäjä luo uuden muistiinpanon single page ‑versiossa.

Tämä oli osan viimeinen tehtävä, ja on aika pushata vastaukset GitHubiin sekä merkata tehdyt tehtävät palautussovellukseen.
