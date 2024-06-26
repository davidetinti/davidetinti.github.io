// List of available locales
const availableLocales = ['en', 'it'];

// Default locale.
const defaultLanguage = 'en';

// Manually detect users' language, strip languages such as `en-GB` to just `en`.
let language = (window.navigator.userLanguage || window.navigator.language).substr(0, 2);

// If `?lang=` exists in URL params & is valid, then use that instead.
const urlParams = new URLSearchParams(window.location.search);
const langFromUrl = urlParams.get('lang');
if (langFromUrl && availableLocales.includes(langFromUrl)) {
  language = langFromUrl
}

// Set `pageLanguage` only if its available within our locales, otherwise default.
let pageLanguage = defaultLanguage;
if (availableLocales.includes(language)) {
  pageLanguage = language;
}

// Locale translations.
const locales = {

  // EN
  en: {
    menuItem: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        publications: "Publications",
        timeline: "Timeline",
        contact: "Contact",
        resume: "Resume",
        otherLang: "<img src='./assets/img/flag-it.png' class='img-responsive mr-1' style='height: 20px;'> Italian",
    },
    subtitle: "Fullstack and Mobile Developer @ Sitech Sistemi Informatici",
    enterPortfolio: "Enter Portfolio",
    about1: "I am currently a full-stack and mobile developer at a small-medium sized company in Bologna.",
    about2: "I hold a Bachelor's degree in Computer Science from the University of Bologna and have over 4 years of experience in FullStack and Mobile development, as well as in the Internet of Things sector, particularly the Web of Things. My skills include software architecture and database design.",
    about3: "I am passionate about project management in the IT field, from feasibility studies to innovative problem-solving using emerging technologies and communication protocols.",
    about4: "Besides that, I enjoy learning and experimenting with new languages and frameworks, often switching my focus every month to keep things interesting.",
    skills: {
        subtitle: "Below are some of my skills.",
        summary1: "Programming/Languages:",
        summary2: "Tools/Topics:",
        spring: "I have <b>over 2 years</b> of experience with the Spring framework, having used it for the backend of a major project, along with the Spring Tools suite for Eclipse. I have placed particular emphasis on entity management and interaction through JPA queries, as well as asynchronous operations, transactions, and various types of services.",
        java: "I have over <b>4 years</b> of experience in software development with Java, creating GWT web apps, servlet applications, and various other applications, including <a data-toggle='modal' href='#portfolioModal6'>a desktop app for interactive learning</a> and <a data-toggle='modal' href='#portfolioModal2'>an MQTT protocol binding library</a>. Java is one of the languages I use the most, mainly with the Eclipse IDE.",
        html: "Through professional experiences and personal projects, such as creating <a data-toggle='modal' href='#portfolioModal4'>a dashboard for reading Wakatime data</a>, I have been developing web applications for <b>over 5 years</b>. I have gained solid expertise in using HTML, JavaScript, and CSS, frequently integrating various libraries and frameworks such as Bootstrap, Node.js, and Express.",
        web: "With <b>over 4 years</b> of experience, I have created several web apps with a strong focus on UX and UI. During this time, I have developed a variety of projects, including <a data-toggle='modal' href='#portfolioModal5'>a web app for playing interactive stories</a>, <a data-toggle='modal' href='#portfolioModal3'>a dashboard for data collection via Twitter</a>, and other websites and web apps for managing bookings and various utilities.",
        android: "With <b>2 years</b> of experience in Android development, I have consolidated my skills through the creation of various applications, including <a data-toggle='modal' href='#portfolioModal1'>an app for participation and interaction in crowdsensing campaigns</a>, an app for smart control of livestock through Bluetooth antennas, and an app for efficiently tracking food supplies.",
        wot: "Thanks to my thesis, I deepened my knowledge in the world of Web of Things (WoT), applying it to my projects. Among these, I developed <a data-toggle='modal' href='#portfolioModal1'>a service for creating and managing crowdsensing campaigns</a> through mobile devices, leveraging the capabilities of the framework and using an extension of the MQTT protocol.",
    },
    projects: {
        subtitle: "Here you can see some of the public projects I've realized.",
        crowdsensing: {
            title: "Mobile Crowdsensing with Web of Things",
            subtitle: "Create mobile crowdsensing's campaigns using the Web of Things"
        },
        lamqtt: {
            title: "LA-MQTT JAVA",
            subtitle: "An extension of MQTT for spatial-aware IoT communication, written in Java"
        },
        tweetbook: {
            title: "Tweet Book",
            subtitle: "A dashboard for data collection, analysis, and geolocation of tweets"
        },
        wakatime: {
            title: "Wakatime Data Reader",
            subtitle: "A dashboard for clearer productivity data from Wakatime"
        },
        mistery: {
            title: "Mistery at the Museum Web Game",
            subtitle: "A ecosystem for creating, reviewing, playing, and managing interactive stories"
        },
        algat: {
            title: "AlgaT",
            subtitle: "An desktop application for interactive learning of Divide and Conquer programming techniques"
        },
        seemore: "To see more of my projects...",
        github: "Visit My GitHub",
        moreInfoSoon: "More detailed project description coming soon!<br> In the meantime, check out some of my other projects.",
        seeOnGithub: "View this project on GitHub:",
    },
    publications: {
        thesis: {
            title: "Bachelor degree's thesis",
            subtitle: "A Hybrid Push-Pull Architecture for Mobile Crowdsensing using the Web of Things",
        },
        paper: {
            title: "2023 IEEE International Conference on Smart Computing (SMARTCOMP)",
            subtitle: "Designing a Hybrid Push-Pull Architecture for Mobile Crowdsensing using the Web of Things",
        },
    },
    timeline: {
        subtitle: "A short summary of my current and previous experiences.",
        sitech: {
            time: "2023 - Present",
            name: "Sitech Srl",
            description: "<b>Special Projects Developer</b><br> I restructured over 80% of the code of a cross-platform application, improving its performance, database, and graphical appearance.<br> I refactored 100% of the PSD2 services used by the CSE banking consortium.<br> I implemented new features on minor applications."
        },
        machiavelli: {
            time: "2019 - 2020",
            name: "Machiavelli Wear",
            description: "<b>Co-founder</b><br> Clothing brand that aimed to blend vintage and streetwear.<br> I handled accounting, orders and supplies management, graphical styling of products, and website development."
        },
        unibo: {
            time: "2018 - 2023",
            name: "Bachelor's Degree in Computer Science",
            description: "I obtained a Bachelor's degree at the University of Bologna with a score of 103/110.<br> My thesis on Web of Things served as the basis for writing an academic paper."
        },
        hidrosystem: {
            time: "2017 - 2019",
            name: "Hidrosystem Srl",
            description: "<b>Technical-Commercial Officer</b><br> Leading company in Europe for assistance and maintenance on vehicle outfitting components.<br> I managed assistance practices, orders with suppliers and customers, and technical drawing reviews."
        },
        paolini: {
            time: "2012 - 2017",
            name: "I.I.S. Paolini - Cassiano",
            description: "Technical institute for surveyors where I graduated with a score of 82/100."
        },
    },
    footer: {
        about: "About",
        contact: "Contact",
        resume: "Resume",
    },
    summary: "Summary",
    contact: "Contact Me",
    contact2: "...or find me on my socials below!",
    close: "Close",
  },

  // IT
  it: {
    menuItem: {
        about: "Chi sono",
        skills: "Competenze",
        projects: "Progetti",
        publications: "Pubblicazioni",
        timeline: "Percorso",
        contact: "Contatti",
        resume: "CV",
        otherLang: "<img src='./assets/img/flag-en.png' class='img-responsive mr-1' style='height: 20px;'> Inglese",
    },
    subtitle: "Sviluppatore Fullstack e Mobile @ Sitech Sistemi Informatici",
    enterPortfolio: "Vai al Portfolio",
    about1: "Attualmente sono uno sviluppatore full-stack e mobile presso una piccola-media azienda a Bologna.",
    about2: "Ho conseguito la laurea triennale in Informatica presso l'Università di Bologna e ho più di 4 anni di esperienza nello sviluppo FullStack e Mobile, nonché nel settore dell'Internet of Things, in particolare nel Web of Things. Le mie competenze includono la progettazione di architetture di software e database.",
    about3: "Mi appassiona la gestione e pianificazione di progetti nel campo dell'informatica, dagli studi di fattibilità alla risoluzione di problemi utilizzando metodi innovativi tramite tecnologie emergenti e protocolli di comunicazione.",
    about4: "Oltre a questo, mi piace imparare e sperimentare con nuovi linguaggi e framework, spesso cambiando il mio focus ogni mese per mantenere le cose interessanti e non annoiarmi.",
    skills: {
        subtitle: "Di seguito sono elencate alcune delle mie competenze.",
        summary1: "Programmazione/Linguaggi:",
        summary2: "Strumenti/Temi:",
        spring: "Conosco a fondo il framework Spring, avendolo utilizzato per <b>più di 2 anni</b> per il backend di un importante progetto, assieme alla suite Spring Tools per Eclipse. Ho posto un focus particolare sulla gestione delle entità e l'interazione tramite le query di JPA, ma anche alle operazioni asincrone, transazioni e ogni tipo di servizio.",
        java: "Ho <b>oltre 4 anni</b> di esperienza nello sviluppo software in Java, creando applicazioni web con GWT, applicazioni servlet e varie altre applicazioni, inclusa <a data-toggle='modal' href='#portfolioModal6'>un'app desktop per l'apprendimento interattivo</a> e <a data-toggle='modal' href='#portfolioModal2'>una libreria di binding per il protocollo MQTT</a>. Java è uno dei linguaggi che utilizzo di più, principalmente con l'IDE Eclipse.",
        html: "Attraverso esperienze lavorative e progetti personali, come la realizzazione di <a data-toggle='modal' href='#portfolioModal4'>una dashboard per la lettura dei dati di Wakatime</a>, sviluppo applicazioni web da <b>oltre 5 anni</b>. Ho acquisito una solida competenza nell'uso di HTML, JavaScript e CSS, integrando spesso diverse librerie e framework come Bootstrap, Node.js ed Express.",
        web: "Con un'esperienza di oltre 4 anni ho creato diverse app web ponendo molta attenzione a UX e UI. Durante questo periodo, ho sviluppato una varietà di progetti, tra cui <a data-toggle='modal' href='#portfolioModal5'>una web app per giocare a storie interattive</a>, <a data-toggle='modal' href='#portfolioModal3'>una dashboard per la raccolta dati tramite Twitter</a> e altri siti web e web app per gestire prenotazioni e altre utilità.",
        android: "Con <b>2 anni</b> di esperienza nello sviluppo Android, ho consolidato le mie competenze attraverso la creazione di varie applicazioni, tra cui <a data-toggle='modal' href='#portfolioModal1'>un'app per la partecipazione e interazione a campagne di raccolta dati</a>, un'app per il controllo smart di allevamenti tramite antenne Bluetooth e un'app per tenere traccia delle scorte alimentari in modo efficiente.",
        wot: "Grazie alla mia tesi di laurea, ho approfondito le mie conoscenze nel mondo del Web of Things (WoT), applicandole ai miei progetti. Tra questi, ho sviluppato <a data-toggle='modal' href='#portfolioModal1'>un servizio per la creazione e gestione di campagne di raccolta dati</a> tramite dispositivi mobili sfruttando sulle capacità del framework e utilizzando un'estensione del protocollo MQTT.",
    },
    projects: {
        subtitle: "Qui sono elencati alcuni dei progetti pubblici che ho realizzato.",
        crowdsensing: {
            title: "Mobile Crowdsensing con il Web of Things",
            subtitle: "Crea campagne di crowdsensing mobile utilizzando il Web of Things."
        },
        lamqtt: {
            title: "LA-MQTT JAVA",
            subtitle: "Un'estensione di MQTT per comunicazioni IoT spatial-aware, scritta in Java."
        },
        tweetbook: {
            title: "Tweet Book",
            subtitle: "Una dashboard per la raccolta, l'analisi e la geolocalizzazione dei tweet"
        },
        wakatime: {
            title: "Wakatime Data Reader",
            subtitle: "Una dashboard per leggere i dati di produttività da Wakatime"
        },
        mistery: {
            title: "Mistero al Museo",
            subtitle: "Un ecosistema per la creazione, la revisione, il gioco e la gestione di storie interattive"
        },
        algat: {
            title: "AlgaT",
            subtitle: "Un'applicazione desktop per l'apprendimento interattivo delle tecniche di programmazione Divide et Impera"
        },
        seemore: "Per vedere altri miei progetti...",
        github: "Visita il mio GitHub",
        moreInfoSoon: "Una descrizione del progetto più dettagliata sarà disponibile a breve!<br> Nel frattempo, dai un'occhiata ad alcuni dei miei altri progetti.",
        seeOnGithub: "Vedi il progetto su GitHub:",
    },
    publications: {
        thesis: {
            title: "Tesi di laurea triennale",
            subtitle: "Un'Architettura Ibrida Push-Pull per Mobile Crowdsensing usando il Web of Things",
        },
        paper: {
            title: "Conferenza Internazionale IEEE 2023 su Smart Computing (SMARTCOMP)",
            subtitle: "Progettazione di un'architettura ibrida Push-Pull per il Mobile Crowdsensing utilizzando il Web of Things",
        },
    },
    timeline: {
        subtitle: "Un breve riassunto delle mie esperienze attuali e precedenti.",
        sitech: {
            time: "2023 - Presente",
            name: "Sitech Srl",
            description: "<b>Programmatore area progetti speciali</b><br> Riarrangiato più del 80% del codice di un'applicativo multipiattaforma migliorando le prestazioni, database e vesta grafica.<br> Rifattorizzazione del 100% dei servizi PSD2 utilizzati dal consorzio bancario CSE.<br> Implementato nuove feature su applicativi minori.",
        },
        machiavelli: {
            time: "2019 - 2020",
            name: "Machiavelli Wear",
            description: "<b>Co-fondatore</b><br> Brand di abbigliamento che mirava ad unire il vintage e lo streetwear.<br> Mi sono occupato di gestire la contabilità, gli ordini e le forniture, lo styling grafico dei prodotti e la realizzazione del sito web.",
        },
        unibo: {
            time: "2018 - 2023",
            name: "Laurea triennale in Informatica",
            description: "Ho conseguito la laurea triennale all'Università di Bologna con votazione 103/110.<br> La tesi di laurea con tema Web of Things è stata utilizzata come base di partenza per la scrittura di un'articolo accademico.",
        },
        hidrosystem: {
            time: "2017 - 2019",
            name: "Hidrosystem Srl",
            description: "<b>Addetto tecnico-commerciale</b><br> Azienda leader in Europa per l'assistenza e manutenzione su componenti di allestimenti su veicoli.<br> Ho gestito l'inserimento di pratiche di assistenza, ordini con fornitori e clienti e la revisione di disegni tecnici.",
        },
        paolini: {
            time: "2012 - 2017",
            name: "I.I.S. Paolini - Cassiano",
            description: "Istituto tecnico per geometri nel quale mi sono diplomato con votazione 82/100.",
        },
    },
    footer: {
        about: "Chi sono",
        contact: "Contatti",
        resume: "CV",
    },
    summary: "Sommario",
    contact: "Contattami",
    contact2: "...oppure puoi trovarmi sui miei social qui sotto!",
    close: "Chiudi",
  },

};

// Get all page elements to be translated.
const elements = document.querySelectorAll('[data-i18n]');

// Get JSON object of translations.
const json = locales[pageLanguage];

// On each element, found the translation from JSON file & update.
elements.forEach((element, index) => {
  const key = element.getAttribute('data-i18n');
  let text = key.split('.').reduce((obj, i) => (obj ? obj[i] : null), json);

  // Does this text have any variables? (eg {something})
  const variables = text.match(/{(.*?)}/g);
  if (variables) {

    // Iterate each variable in the text.
    variables.forEach((variable) => {

      // Filter all `data-*` attributes for this element to find the matching key.
      Object.entries(element.dataset).filter(([key, value]) => {
        if (`{${key}}` === variable) {
          try {
            // Attempt to run actual JavaScript code.
            text = text.replace(`${variable}`, new Function(`return (${value})`)());
          } catch (error) {
            // Probably just static text replacement.
            text = text.replace(`${variable}`, value);
          }
        }
      })
    });
  }

  // Regular text replacement for given locale.
  element.innerHTML = text;
});

// Set <html> tag lang attribute.
const htmlElement = document.querySelector('html');
htmlElement.setAttribute('lang', pageLanguage);

document.getElementById('langButton').addEventListener('click', function() {
    var currentUrl = window.location.href.split('?')[0]; // Ottieni l'URL di base senza parametri di query
    var newUrl = pageLanguage == 'it' ? currentUrl + '?lang=en' : currentUrl + '?lang=it'; // Imposta il nuovo URL in base al booleano
    window.location.href = newUrl; // Reindirizza al nuovo URL
})