## installazione pacchetti

**1.inizializzo react con vite:**
```sh
npm create vite@latest nome-app --template react
cd nome-app
npm install 
```

**2.installo bootstrap:**
```sh
npm install bootstrap
```
**aggiungo in main.jsx**
`import 'bootstrap/dist/css/bootstrap.min.css'`

**3.installo router dom:**
```sh
npm install react-router-dom
```

Dovremo concentrarci sulla rubrica contatti che dovrà essere usata dagli accompagnatori durante le gite.
Produciamo quindi un’interfaccia con le seguenti funzionalità:



Una schermata che visualizzi la lista dei viaggi attualmente in corso (con destinazione e data di inizio e
fine)

La pagina del singolo viaggio mostrerà una schermata di rubrica contatti, in cui siano presenti tutti i
partecipanti a quel viaggio. Per ciascun partecipante, visualizziamo nome e cognome.


Cliccando sul nome di un partecipante, mostriamo a schermo la sua mail, il numero di telefono ed il codice
fiscale.

In cima alla rubrica contatti inseriamo una barra di ricerca con la quale sarà possibile filtrare i partecipantitramite nome e cognome.



BONUS:
Aggiungere la possibilità di inserire un nuovo viaggio ed associarvi eventuali nuovi contatti.

Nota: 
non è necessario produrre un backend funzionante per il prototipo; può andare benissimo un array di datifittizi inserito direttamente a codice.



--- PRESENTAZIONE -- 


Realizzate il prototipo

Realizzate una presentazione dove spiegate da dove siete partiti, come avete lavorato,
quali sono gli step successivi, come se foste davanti al cliente reale




# Rubrica Contatti per Accompagnatori di Viaggio

Questo progetto è un'applicazione React creata con Vite, progettata per aiutare gli accompagnatori di viaggio a gestire i contatti dei partecipanti durante le gite.
 
 #### Installazione standard

1.  **Clona il repository:**

    ```bash
    git clone [https://docs.github.com/en/repositories/creating-and-managing-repositories/deleting-a-repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/deleting-a-repository)
    cd [nome-app]
    ```

2.  **Installa le dipendenze:**

    ```bash
    npm install
    ```
    <!-- opzionale :installazione singola dei pacchetti -->
    ## installazione pacchetti
    **2.1inizializzo react con vite:**
    ```sh
    npm create vite@latest nome-app --template react
    cd nome-app
    npm install 
    ```
    **2.2installo bootstrap:**
    ```sh
        npm install bootstrap
    ```
    **aggiungo in main.jsx**
        `import 'bootstrap/dist/css/bootstrap.min.css'`

    **2.3installo router dom:**
    ```sh
        npm install react-router-dom
    ```

3.  **Avvia l'applicazione:**

```bash
    npm run dev
```

4.  **Apri nel browser:**

    Vai su `http://localhost:5173/` (o la porta indicata da Vite).

## Funzionalità

* **Lista Viaggi:** Visualizza una lista dei viaggi in corso, con destinazione, data di inizio e fine.
* **Rubrica Contatti:** Per ogni viaggio, mostra una rubrica con i partecipanti (nome e cognome).
* **Dettagli Partecipante:** Cliccando sul nome di un partecipante, visualizza email, telefono e codice fiscale.
* **Ricerca:** Barra di ricerca per filtrare i partecipanti per nome e cognome.
* **Bonus (Opzionale):** Possibilità di aggiungere nuovi viaggi e contatti.

## Tecnologie Utilizzate
* React
* Vite
* React Router DOM
* Bootstrap

## Configurazione

* Per aggiungere o modificare i dati dei viaggi e dei contatti, modifica l'array di dati fittizi nel codice.

## Struttura del Progetto

## CONSIGLI PER PRESENTARE 
(max 10 minuti per presentare)
Riprendete le necessità esposte dal cliente
Raccontate cosa avete preso in considerazione come prioritario e perché
Spiegate quali sono le funzionalità principali realizzate e a quali bisogni del cliente
rispondono
Raccontate le funzionalità che implementerete nelle prossime release (indicando in quale
rilascio specifico - secondo, terzo ecc)
Presentate il prototipo e mostrate le funzionalità
Assicuratevi che al cliente sia tutto chiaro e lasciate spazio a domande e dubbi