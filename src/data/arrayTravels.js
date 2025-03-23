
const arrayTravels = [
    {
        "id": 1,
        "destinazione": "Roma",
        "url": "/destinations/roma.avif",
        "data_inizio": "2023-10-20",
        "data_fine": "2023-10-27",
        "viaggiatori": [
            {
                "id": 1,
                "nome": "Mario",
                "cognome": "Rossi",
                "email": "mario.rossi@example.com",
                "cellulare": "3331234567",
                "codice_fiscale": "RSSMRA80A01H501X"
            },
            {
                "id": 2,
                "nome": "Luigi",
                "cognome": "Verdi",
                "email": "luigi.verdi@example.com",
                "cellulare": "3337654321",
                "codice_fiscale": "VRDLGI85B02H502Y"
            },
            {
                "id": 3,
                "nome": "Giulia",
                "cognome": "Esposito",
                "email": "giulia.esposito@example.com",
                "cellulare": "3338765432",
                "codice_fiscale": "ESPGIU92C03H503Z"
            },
            {
                "id": 4,
                "nome": "Roberto",
                "cognome": "Colombo",
                "email": "roberto.colombo@example.com",
                "cellulare": "3339876543",
                "codice_fiscale": "CLMRBT88D04H504W"
            },
            {
                "id": 5,
                "nome": "Francesca",
                "cognome": "Ferrari",
                "email": "francesca.ferrari@example.com",
                "cellulare": "3331122334",
                "codice_fiscale": "FRRFNC90E05H505V"
            }
        ]
    },
    {
        "id": 2,
        "destinazione": "Parigi",
        "url": "/destinations/parigi.jpg",
        "data_inizio": "2023-11-05",
        "data_fine": "2023-11-12",
        "viaggiatori": [
            {
                "id": 1,
                "nome": "Anna",
                "cognome": "Bianchi",
                "email": "anna.bianchi@example.com",
                "cellulare": "3339876543",
                "codice_fiscale": "BNCNNA90C03H503Z"
            },
            {
                "id": 2,
                "nome": "Giuseppe",
                "cognome": "Neri",
                "email": "giuseppe.neri@example.com",
                "cellulare": "3333456789",
                "codice_fiscale": "NRIGPP75D04H504W"
            },
            {
                "id": 3,
                "nome": "Alessia",
                "cognome": "Romano",
                "email": "alessia.romano@example.com",
                "cellulare": "3336543210",
                "codice_fiscale": "RMNALS91E05H505V"
            },
            {
                "id": 4,
                "nome": "Davide",
                "cognome": "Ricci",
                "email": "davide.ricci@example.com",
                "cellulare": "3332345678",
                "codice_fiscale": "RCCDVD87F06H506U"
            },
            {
                "id": 5,
                "nome": "Valentina",
                "cognome": "Bruno",
                "email": "valentina.bruno@example.com",
                "cellulare": "3334567891",
                "codice_fiscale": "BRNVNT93G07H507T"
            }
        ]
    },
    {
        "id": 3,
        "destinazione": "Londra",
        "url": "/destinations/londra.jpg",
        "data_inizio": "2023-12-01",
        "data_fine": "2023-12-08",
        "viaggiatori": [
            {
                "id": 1,
                "nome": "Elena",
                "cognome": "Gialli",
                "email": "elena.gialli@example.com",
                "cellulare": "3331122334",
                "codice_fiscale": "GLLLEN88E05H505V"
            },
            {
                "id": 2,
                "nome": "Marco",
                "cognome": "Viola",
                "email": "marco.viola@example.com",
                "cellulare": "3335566778",
                "codice_fiscale": "VILMRC82F06H506U"
            },
            {
                "id": 3,
                "nome": "Stefano",
                "cognome": "Moretti",
                "email": "stefano.moretti@example.com",
                "cellulare": "3337788990",
                "codice_fiscale": "MRTSFN94H08H508S"
            },
            {
                "id": 4,
                "nome": "Federica",
                "cognome": "Barbieri",
                "email": "federica.barbieri@example.com",
                "cellulare": "3339900112",
                "codice_fiscale": "BRBFDR86I09H509R"
            },
            {
                "id": 5,
                "nome": "Simone",
                "cognome": "Santoro",
                "email": "simone.santoro@example.com",
                "cellulare": "3333344556",
                "codice_fiscale": "SNTSMN95L10H510Q"
            }
        ]
    },
    {
        "id": 4,
        "destinazione": "Barcellona",
        "url": "/destinations/barcellona.jpg",
        "data_inizio": "2024-01-15",
        "data_fine": "2024-01-22",
        "viaggiatori": [
            {
                "id": 1,
                "nome": "Laura",
                "cognome": "Azzurri",
                "email": "laura.azzurri@example.com",
                "cellulare": "3339988776",
                "codice_fiscale": "ZZRLRA92G07H507T"
            },
            {
                "id": 2,
                "nome": "Paolo",
                "cognome": "Arancioni",
                "email": "paolo.arancioni@example.com",
                "cellulare": "3336677889",
                "codice_fiscale": "RCNPLA87H08H508S"
            },
            {
                "id": 3,
                "nome": "Martina",
                "cognome": "Fontana",
                "email": "martina.fontana@example.com",
                "cellulare": "3338899001",
                "codice_fiscale": "FNTMRT90I09H509R"
            },
            {
                "id": 4,
                "nome": "Alessandro",
                "cognome": "Conti",
                "email": "alessandro.conti@example.com",
                "cellulare": "3334455667",
                "codice_fiscale": "CNTLSN88L10H510Q"
            }]
    },
    {
        "id": 5,
        "destinazione": "Berlino",
        "url": "/destinations/berlino.jpg",
        "data_inizio": "2024-03-10",
        "data_fine": "2024-03-17",
        "viaggiatori": [
            {
                "id": 1,
                "nome": "Sofia",
                "cognome": "Moretti",
                "email": "sofia.moretti@example.com",
                "cellulare": "3331234567",
                "codice_fiscale": "MRTSFA90A01H501X"
            },
            {
                "id": 2,
                "nome": "Luca",
                "cognome": "Ferrari",
                "email": "luca.ferrari@example.com",
                "cellulare": "3337654321",
                "codice_fiscale": "FRRLCA85B02H502Y"
            },
            {
                "id": 3,
                "nome": "Chiara",
                "cognome": "Russo",
                "email": "chiara.russo@example.com",
                "cellulare": "3338765432",
                "codice_fiscale": "RSOCRA92C03H503Z"
            },
            {
                "id": 4,
                "nome": "Andrea",
                "cognome": "Bianchi",
                "email": "andrea.bianchi@example.com",
                "cellulare": "3339876543",
                "codice_fiscale": "BNCDRA88D04H504W"
            }
        ]
    },
    {
        "id": 6,
        "destinazione": "Amsterdam",
        "url": "/destinations/amsterdam.avif",
        "data_inizio": "2024-04-20",
        "data_fine": "2024-04-27",
        "viaggiatori": [
            {
                "id": 1,
                "nome": "Giorgia",
                "cognome": "Verdi",
                "email": "giorgia.verdi@example.com",
                "cellulare": "3339876543",
                "codice_fiscale": "VRDGIA90C03H503Z"
            },
            {
                "id": 2,
                "nome": "Matteo",
                "cognome": "Esposito",
                "email": "matteo.esposito@example.com",
                "cellulare": "3333456789",
                "codice_fiscale": "ESPMTT75D04H504W"
            },
            {
                "id": 3,
                "nome": "Simona",
                "cognome": "Colombo",
                "email": "simona.colombo@example.com",
                "cellulare": "3336543210",
                "codice_fiscale": "CLMSMN91E05H505V"
            },
            {
                "id": 4,
                "nome": "Riccardo",
                "cognome": "Gialli",
                "email": "riccardo.gialli@example.com",
                "cellulare": "3332345678",
                "codice_fiscale": "GLLRCR87F06H506U"
            },
            {
                "id": 5,
                "nome": "Martina",
                "cognome": "Bruno",
                "email": "martina.bruno@example.com",
                "cellulare": "3334567891",
                "codice_fiscale": "BRNMRT93G07H507T"
            }
        ]
    },
    {
        "id": 7,
        "destinazione": "Madrid",
        "url": "/destinations/madrid.jpg",
        "data_inizio": "2024-05-15",
        "data_fine": "2024-05-22",
        "viaggiatori": [
            {
                "id": 1,
                "nome": "Alessio",
                "cognome": "Santoro",
                "email": "alessio.santoro@example.com",
                "cellulare": "3331122334",
                "codice_fiscale": "SNTSLS88E05H505V"
            },
            {
                "id": 2,
                "nome": "Federica",
                "cognome": "Viola",
                "email": "federica.viola@example.com",
                "cellulare": "3335566778",
                "codice_fiscale": "VILFDR82F06H506U"
            },
            {
                "id": 3,
                "nome": "Leonardo",
                "cognome": "Moretti",
                "email": "leonardo.moretti@example.com",
                "cellulare": "3337788990",
                "codice_fiscale": "MRTLNR94H08H508S"
            },
            {
                "id": 4,
                "nome": "Beatrice",
                "cognome": "Barbieri",
                "email": "beatrice.barbieri@example.com",
                "cellulare": "3339900112",
                "codice_fiscale": "BRBBTR86I09H509R"
            }
        ]
    }

]

export default arrayTravels