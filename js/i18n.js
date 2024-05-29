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
        spring: "I have extensive knowledge of the Spring framework, having used it for over <b>2 years</b> for the backend of a major project, along with the Spring Tools suite for Eclipse. I have placed particular emphasis on entity management and interaction through JPA queries, as well as asynchronous operations, transactions, and various types of services.",
        java: "I have over <b>6 years</b> of software development experience in Java, creating games, plugins, and various other applications, including a <a data-toggle='modal' href='#portfolioModal10'>client request library</a>, <a data-toggle='modal' href='#portfolioModal7'>content-aware image resizer</a>, <a data-toggle='modal' href='#portfolioModal9'>audio analyzer</a>, <a data-toggle='modal' href='#portfolioModal11'>compiler/transpiler</a>, an early version of my <a data-toggle='modal' href='#portfolioModal5'>OpenGL game engine</a> which I later ported to C++, and many more.",
        html: "Tramite esperienze lavorative e progetti personali, come ... sviluppo applicazioni web da oltre <b>5 anni</b> avendo spesso a che fare con HTML/JavaScript/CSS e utilizzando diverse librerie e framework come Bootstrap, Node ed Express.",
        web: "I have significant experience using web libraries such as Durandal, jQuery, and Bootstrap to create web applications for many of my professional and personal projects.",
        android: "Citare l'app della tesi, l'app di Agile e altre app minori.",
        wot: "Grazie alla tesi di laurea ho radicato le mie conoscenze nel mondo WoT, partecipando allo sviluppo del framework, utilizzandolo nei progetti e realizzando il binding e i porting in Java di un libreria relativa al protocollo MTQQ, elevando così le capacità del framework tramite l'utilizzo di un nuovo protocollo di comunicazione.",
    },
    projects: {
        subtitle: "Here you can see some of the public projects I've realized.",
        crowdsensing: {
            title: "Mobile Crowdsensing with Web of Things",
            subtitle: "An architecture and a mobile app to create mobile crowdsensing's campaigns using the Web of Things."
        },
        lamqtt: {
            title: "LA-MQTT JAVA",
            subtitle: "An extension of the popular MQTT protocol for spatial-aware IoT communications, written in Java."
        },
        tweetbook: {
            title: "Tweet Book",
            subtitle: "Description to be done."
        },
        wakatime: {
            title: "Wakatime Data Reader",
            subtitle: "Description to be done."
        },
        mistery: {
            title: "Mistery at the Museum Web Game",
            subtitle: "Description to be done."
        },
        bikaya: {
            title: "Bikaya OS",
            subtitle: "Description to be done."
        },
        algat: {
            title: "AlgaT",
            subtitle: "An desktop application for interactive learning of Divide and Conquer programming techniques."
        },
        nongravitar: {
            title: "Non Gravitar",
            subtitle: "An Atari's Gravitar based game."
        },
        seemore: "To see more of my projects...",
        github: "Visit My GitHub"
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
    contact2: "...or find me on my socials below!"
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
        spring: "Conosco a fondo il framework Spring, avendolo utilizzato per più di <b>2 anni</b> per il backend di un importante progetto, assieme alla suite Spring Tools per Eclipse. Ho posto un focus particolare sulla gestione delle entità e l'interazione tramite le query di JPA, ma anche alle operazioni asincrone, transazioni e ogni tipo di servizio.",
        java: "TODO",
        html: "Tramite esperienze lavorative e progetti personali, come ... sviluppo applicazioni web da oltre <b>5 anni</b> avendo spesso a che fare con HTML/JavaScript/CSS e utilizzando diverse librerie e framework come Bootstrap, Node ed Express.",
        web: "TODO",
        android: "Citare l'app della tesi, l'app di Agile e altre app minori.",
        wot: "Grazie alla tesi di laurea ho radicato le mie conoscenze nel mondo WoT, partecipando allo sviluppo del framework, utilizzandolo nei progetti e realizzando il binding e i porting in Java di un libreria relativa al protocollo MTQQ, elevando così le capacità del framework tramite l'utilizzo di un nuovo protocollo di comunicazione.",
    },
    projects: {
        subtitle: "Qui sono elencati alcuni dei progetti pubblici che ho realizzato.",
        crowdsensing: {
            title: "Mobile Crowdsensing tramite il Web of Things",
            subtitle: "Un'architettura e un'applicazione mobile per creare campagne di crowdsensing mobile utilizzando il Web of Things."
        },
        lamqtt: {
            title: "LA-MQTT JAVA",
            subtitle: "Un'estensione del popolare protocollo MQTT per comunicazioni IoT spatial-aware, scritta in Java."
        },
        tweetbook: {
            title: "Tweet Book",
            subtitle: "TODO."
        },
        wakatime: {
            title: "Wakatime Data Reader",
            subtitle: "TODO."
        },
        mistery: {
            title: "Mistery at the Museum Web Game",
            subtitle: "TODO."
        },
        bikaya: {
            title: "Bikaya OS",
            subtitle: "TODO."
        },
        algat: {
            title: "AlgaT",
            subtitle: "Un'applicazione desktop per l'apprendimento interattivo delle tecniche di programmazione Divide et Impera."
        },
        nongravitar: {
            title: "Non Gravitar",
            subtitle: "Un gioco basato su Gravitar di Atari."
        },
        seemore: "Per vedere altri miei progetti...",
        github: "Visita il mio GitHub"
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
            description: "<b>Co-fondatore</b><br> Brand di abbigliamento che mirava a connubbiare il vintage e lo streetwear.<br> Mi sono occupato di gestire la contabilità, gli ordini e le forniture, lo styling grafico dei prodotti e la realizzazione del sito web.",
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
    contact2: "...oppure puoi trovarmi sui miei social qui sotto!"
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