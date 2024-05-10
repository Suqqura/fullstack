# 0.6: Uusi muistiinpano

sequenceDiagram  

    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server->>browser: 201 Created, {content: "miau", date: "2024-05-10T07:08:33.224Z"}
    deactivate server

    Note right of browser: browser receives confirmation and new note data

    browser->>browser: render new note in the single page dynamically

    Note right of browser: browser updates notes dynamically without reloading the page


----------------


tehtävänanto:

0.6: Uusi muistiinpano
Tee kaavio tilanteesta, jossa käyttäjä luo uuden muistiinpanon single page ‑versiossa.
https://studies.cs.helsinki.fi/exampleapp/spa
