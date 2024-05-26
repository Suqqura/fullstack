# Osa 1
## Tehtävät 1.1-1.2
Tehtävät palautetaan GitHubin kautta ja merkitsemällä tehdyt tehtävät palautussovellukseen.

Voit palauttaa kurssin kaikki tehtävät samaan repositorioon tai käyttää useita repositorioita. Jos palautat eri osien tehtäviä samaan repositorioon, nimeä hakemistot järkevästi. Jos käytät yksityistä (private) repositoriota tehtävien palautukseen, liitä repositoriolle collaboratoriksi mluukkai.

Eräs varsin toimiva hakemistorakenne palautusrepositoriolle on tässä esimerkkirepositoriossa käytetty tapa, jossa kutakin osaa kohti on oma hakemistonsa, joka vielä jakautuu tehtäväsarjat (esim. osan 1 kurssitiedot) sisältäviin hakemistoihin:

    osa0
    osa1
      kurssitiedot
      unicafe
      anekdootit
    osa2
      puhelinluettelo
      maiden_tiedotcopy
Kunkin tehtäväsarjan ohjelmasta kannattaa palauttaa kaikki sovelluksen sisältämät tiedostot (paitsi hakemisto node_modules).

Tehtävät palautetaan yksi osa kerrallaan. Kun olet palauttanut osan tehtävät, et voi enää palauttaa saman osan tekemättä jättämiäsi tehtäviä.

Huomaa, että tässä osassa on muitakin tehtäviä kuin alla olevat. Älä siis tee palautusta ennen kun olet tehnyt osan tehtävistä kaikki, jotka haluat palauttaa.

Vinkki: Kun olet avaamassa tehtävääsi Visual Studio Codella, huomaathan avata koko projektin kansion editoriin. Tämä mahdollistaa editorissa helpomman tiedostojen välillä siirtymisen ja paremmat automaattiset täydennykset. Tämä onnistuu siirtymällä terminaalissa projektin kansioon ja komentamalla:

    code .
### 1.1: kurssitiedot, step1
Tässä tehtävässä aloitettavaa ohjelmaa kehitellään eteenpäin muutamassa seuraavassa tehtävässä. Tässä ja kurssin aikana muissakin vastaan tulevissa tehtäväsarjoissa ohjelman lopullisen version palauttaminen riittää. Voit toki halutessasi tehdä commitin jokaisen tehtävän jälkeisestä tilanteesta, mutta se ei ole välttämätöntä.

Luo Vitellä uusi sovellus. Muuta main.jsx muotoon

    import ReactDOM from 'react-dom/client'
    
    import App from './App'
    
    ReactDOM.createRoot(document.getElementById('root')).render(<App />)copy
ja tiedosto App.jsx muotoon

    const App = () => {
      const course = 'Half Stack application development'
      const part1 = 'Fundamentals of React'
      const exercises1 = 10
      const part2 = 'Using props to pass data'
      const exercises2 = 7
      const part3 = 'State of a component'
      const exercises3 = 14
    
      return (
        <div>
          <h1>{course}</h1>
          <p>
            {part1} {exercises1}
          </p>
          <p>
            {part2} {exercises2}
          </p>
          <p>
            {part3} {exercises3}
          </p>
          <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
        </div>
      )
    }

    export default Appcopy
    
ja poista ylimääräiset tiedostot App.css ja index.css ja hakemisto assets.

Koko sovellus on nyt ikävästi yhdessä komponentissa. Refaktoroi sovelluksen koodi siten, että se koostuu kolmesta uudesta komponentista: Header, Content ja Total. Kaikki data pidetään edelleen komponentissa App, joka välittää tarpeelliset tiedot kullekin komponentille props:ien avulla. Header huolehtii kurssin nimen renderöimisestä, Content osista ja niiden tehtävämääristä ja Total tehtävien yhteismäärästä.

Tee uudet komponentit tiedostoon App.jsx.

Komponentin App runko tulee olemaan suunnilleen seuraavanlainen:

    const App = () => {
      // const-määrittelyt
    
      return (
        <div>
          <Header course={course} />
          <Content ... />
          <Total ... />
        </div>
      )
    }
VAROITUS älä yritä tehdä ohjelmassasi kaikkia komponentteja yhtä aikaa, sillä se johtaa lähes varmasti siihen että ohjelma ei toimi. Etene pieni askel kerrallaan, tee aluksi esim. komponentti Header ja vasta kun se toimii 100% varmasti, kannattaa edetä seuraavaan komponenttiin.

Huolellinen, pienin askelin eteneminen saattaa tuntua hitaalta, mutta se on itse asiassa ylivoimaisesti nopein tapa edetä. Kuuluisa ohjelmistokehittäjä Robert "Uncle Bob" Martin on todennut

"The only way to go fast, is to go well"

eli Martinin mukaan pienin askelin tapahtuva huolellinen eteneminen on jopa ainoa tapa olla nopea.

### 1.2: kurssitiedot, step2
Refaktoroi vielä komponentti Content siten, että se ei itse renderöi yhdenkään osan nimeä eikä sen tehtävälukumäärää vaan ainoastaan kolme Part-nimistä komponenttia, joista kukin siis renderöi yhden osan nimen ja tehtävämäärän.

    const Content = ... {
      return (
        <div>
          <Part .../>
          <Part .../>
          <Part .../>
        </div>
      )
    }
Sovelluksemme tiedonvälitys on tällä hetkellä todella arkaaista, sillä se perustuu yksittäisiin muuttujiin. Tilanne paranee pian.

## Tehtävät 1.3-1.5
Jatkamme edellisissä tehtävissä aloitetun ohjelman rakentamista. Voit siis tehdä koodin samaan projektiin, koska palautuksessa ollaan kiinnostuneita ainoastaan ohjelman lopullisesta versiosta.

Protip: voit kohdata ohjelmoidessasi ongelmia sen suhteen missä muodossa komponentin saamat propsit ovat. Hyvä keino varmistua asiasta on tulostaa propsit konsoliin esim. seuraavasti:

    const Header = (props) => {
      console.log(props)
      return <h1>{props.course}</h1>
    }
Jos ja kun törmäät virheilmoitukseen

    Objects are not valid as a React child

pidä mielessä täällä kerrotut asiat.

### 1.3: kurssitiedot step3
Siirrytään käyttämään sovelluksessamme olioita. Muuta komponentin App muuttujamäärittelyt seuraavaan muotoon ja muuta sovelluksen kaikkia osia niin, että sovellus edelleen toimii:

    const App = () => {
      const course = 'Half Stack application development'
      const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
      }
      const part2 = {
        name: 'Using props to pass data',
        exercises: 7
      }
      const part3 = {
        name: 'State of a component',
        exercises: 14
      }
    
    
      return (
        <div>
          ...
        </div>
      )
    }
### 1.4: kurssitiedot step4
Seuraavaksi laitetaan oliot taulukkoon, eli muuta App :in muuttujamäärittelyt seuraavaan muotoon ja muuta sovelluksen kaikki osat vastaavasti:

    const App = () => {
      const course = 'Half Stack application development'
      const parts = [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    
      return (
        <div>
          ...
        </div>
      )
    }
HUOM: tässä vaiheessa voit olettaa, että taulukossa on aina kolme alkiota, eli taulukkoa ei ole pakko käydä läpi silmukalla. Palataan taulukossa olevien olioiden perusteella tapahtuvaan komponenttien renderöintiin myöhemmin kurssin seuraavassa osassa.

Älä kuitenkaan välitä eri olioita komponentista App sen sisältämiin komponentteihin Content ja Total erillisinä propseina, vaan suoraan taulukkona:

    const App = () => {
      // const-määrittelyt
    
      return (
        <div>
          <Header course={...} />
          <Content parts={parts} />
          <Total parts={parts} />
        </div>
      )
    }
### 1.5: kurssitiedot step5
Viedään muutos vielä yhtä askelta pidemmälle, eli tehdään kurssista ja sen osista yksi JavaScript-olio. Korjaa kaikki mikä menee rikki.

    const App = () => {
      const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }
    
      return (
        <div>
          ...
        </div>
      )
    }

## Tehtävät 1.6.-1.14.
Tehtävät palautetaan GitHubin kautta ja merkitsemällä tehdyt tehtävät palautussovellukseen.

Tehtävät palautetaan yksi osa kerrallaan. Kun olet palauttanut osan tehtävät, et voi enää palauttaa saman osan tekemättä jättämiäsi tehtäviä.

Samaa ohjelmaa kehittelevissä tehtäväsarjoissa ohjelman lopullisen version palauttaminen riittää, voit toki halutessasi tehdä commitin jokaisen tehtävän jälkeisestä tilanteesta, mutta se ei ole välttämätöntä.

Jos, ja kun törmäät virheilmoitukseen

    Objects are not valid as a React child

pidä mielessä täällä kerrotut asiat.

### 1.6: unicafe step1
Monien firmojen tapaan nykyään myös Helsingin yliopiston opiskelijaruokala Unicafe kerää asiakaspalautetta. Tee Unicafelle verkossa toimiva palautesovellus. Vastausvaihtoehtoja olkoon vain kolme: hyvä, neutraali ja huono.

Sovelluksen tulee näyttää jokaisen palautteen lukumäärä. Sovellus voi näyttää esim. seuraavalta:
![image](https://github.com/Suqqura/fullstack/assets/112806132/d7866dcd-25f4-43f2-a8be-3fb4ffe5d04a)

fullstack content
Huomaa, että sovelluksen tarvitsee toimia vain yhden selaimen käyttökerran ajan. Esim. kun sivu refreshataan, tilastot saavat hävitä.

Kannattaa noudattaa samaa rakennetta kuin materiaalissa ja edellisessä tehtävässä, eli tiedoston main.jsx sisältö on seuraava:

    import ReactDOM from 'react-dom/client'
    import App from './App'
    
    ReactDOM.createRoot(document.getElementById('root')).render(<App />)copy
Muun sovelluksen voi tehdä tiedostoon App.jsx. Tiedoston sisältö voi olla aluksi seuraava:

    import { useState } from 'react'
    
    const App = () => {
      // tallenna napit omaan tilaansa
      const [good, setGood] = useState(0)
      const [neutral, setNeutral] = useState(0)
      const [bad, setBad] = useState(0)
    
      return (
        <div>
          code here
        </div>
      )
    }

    export default Appcopy
### 1.7: unicafe step2
Laajenna sovellusta siten, että se näyttää palautteista enemmän statistiikkaa: yhteenlasketun määrän, keskiarvon (hyvän arvo 1, neutraalin 0, huonon -1) ja sen kuinka monta prosenttia palautteista on ollut positiivisia:
![image](https://github.com/Suqqura/fullstack/assets/112806132/4c171b15-f8ab-40b8-a925-10e93cb96d68)

fullstack content
1.8: unicafe step3
Refaktoroi sovelluksesi siten, että tilastojen näyttäminen on eriytetty oman komponentin Statistics vastuulle. Sovelluksen tila säilyy edelleen juurikomponentissa App.

Muista, että komponentteja ei saa määritellä toisen komponentin sisällä:

    // oikea paikka komponentin määrittelyyn
    const Statistics = (props) => {
      // ...
    }
    
    const App = () => {
      const [good, setGood] = useState(0)
      const [neutral, setNeutral] = useState(0)
      const [bad, setBad] = useState(0)
    
      // EI NÄIN!!! eli älä määrittele komponenttia 
      // toisen komponentin sisällä!
      const Statistics = (props) => {
        // ...
      }
    
      return (
        // ...
      )
    }
### 1.9: unicafe step4
Muuta sovellusta siten, että numeeriset tilastot näytetään ainoastaan, jos palautteita on jo annettu:
![image](https://github.com/Suqqura/fullstack/assets/112806132/eefd6061-fdf9-4098-a95b-884ee17e03f4)

fullstack content
### 1.10: unicafe step5
Jatketaan sovelluksen refaktorointia. Eriytä seuraavat kaksi komponenttia

Button vastaa yksittäistä palautteenantonappia
StatisticLine huolehtii tilastorivien, esim. keskiarvon näyttämisestä
Tarkennuksena: komponentti StatisticLine näyttää aina yhden tilastorivin, joten sovellus käyttää komponenttia useaan kertaan renderöidäkseen kaikki tilastorivit

    const Statistics = (props) => {
      /// ...
      return(
        <div>
          <StatisticLine text="good" value ={...} />
          <StatisticLine text="neutral" value ={...} />
          <StatisticLine text="bad" value ={...} />
          // ...
        </div>
      )
    }
Sovelluksen tila säilytetään edelleen juurikomponentissa App.

### 1.11*: unicafe step6
Toteuta tilastojen näyttäminen HTML:n taulukkona siten, että saat sovelluksesi näyttämään suunnilleen seuraavanlaiselta:
![image](https://github.com/Suqqura/fullstack/assets/112806132/61b23c1b-c652-457a-b266-fa09be93553d)

fullstack content
Muista pitää konsoli koko ajan auki. Jos saat konsoliin seuraavan warningin:
![image](https://github.com/Suqqura/fullstack/assets/112806132/fbbf5ad6-2370-4efc-9b5e-0b56d9577f14)

fullstack content
tee tarvittavat toimenpiteet, jotta saat warningin katoamaan. Googlaa tarvittaessa virheilmoituksella.

Huolehdi nyt ja jatkossa, että konsolissa ei näy mitään warningeja!

### 1.12*: anekdootit step1
Ohjelmistotuotannossa tunnetaan lukematon määrä anekdootteja eli pieniä "onelinereita", jotka kiteyttävät alan ikuisia totuuksia.

Laajenna seuraavaa sovellusta siten, että siihen tulee nappi, jota painamalla sovellus näyttää satunnaisen ohjelmistotuotantoon liittyvän anekdootin:

    import { useState } from 'react'
    
    const App = () => {
      const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
        'The only way to go fast, is to go well.'
      ]
       
      const [selected, setSelected] = useState(0)
    
      return (
        <div>
          {anecdotes[selected]}
        </div>
      )
    }
    
    export default App
Tiedoston **main.jsx** sisältö on sama kuin edellisissä tehtävissä.

Google kertoo, miten voit generoida JavaScriptilla sopivia satunnaisia lukuja. Muista, että voit testata esim. satunnaislukujen generointia konsolissa.

Sovellus voi näyttää esim. seuraavalta:
![image](https://github.com/Suqqura/fullstack/assets/112806132/45564599-356f-4bb0-8c5d-e72678c702c5)

fullstack content
### 1.13*: anekdootit step2
Laajenna sovellusta siten, että näytettävää anekdoottia on mahdollista äänestää:
![image](https://github.com/Suqqura/fullstack/assets/112806132/bf231db2-15f9-42e5-8602-1e19913a8673)

fullstack content
Huom: kunkin anekdootin äänet kannattanee tallettaa komponentin tilassa olevan olion kenttiin tai taulukkoon. Muista, että tilan oikeaoppinen päivittäminen edellyttää olion tai taulukon kopioimista.

Olio voidaan kopioida esim. seuraavasti

    const points = { 0: 1, 1: 3, 2: 4, 3: 2 }
    
    const copy = { ...points }
    // kasvatetaan olion kentän 2 arvoa yhdellä
    copy[2] += 1     
ja taulukko esim. seuraavasti:

    const points = [1, 4, 6, 3]
    
    const copy = [...points]
    // kasvatetaan taulukon paikan 2 arvoa yhdellä
    copy[2] += 1    
Yksinkertaisempi ratkaisu lienee nyt taulukon käyttö. Googlaamalla löydät paljon vihjeitä sille, miten kannattaa luoda halutun mittainen taulukko, joka on täytetty nollilla, esim. tämän.

### 1.14*: anekdootit step3
Ja sitten vielä lopullinen versio, joka näyttää eniten ääniä saaneen anekdootin:
![image](https://github.com/Suqqura/fullstack/assets/112806132/d4448f20-9e2f-46e2-9545-d376b7ef5c7e)

fullstack content
Jos suurimman äänimäärän saaneita anekdootteja on useita, riittää että niistä näytetään yksi.

Tämä oli osan viimeinen tehtävä, ja on aika pushata koodi GitHubiin ja merkata tehdyt tehtävät palautussovellukseen.
