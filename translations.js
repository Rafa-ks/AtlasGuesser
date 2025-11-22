// Language translations
const translations = {
    en: {
        title: "Atlas Daily",
        subtitle_emoji: "Guess the mystery country from emoji clues",
        subtitle_comparison: "Guess the country by comparing characteristics",
        subtitle_tips: "Guess the country from progressive tips",
        emojiMode: "Emojis",
        comparisonMode: "Características",
        tipsMode: "Dicas",
        inputPlaceholder: "Enter a country name...",
        guessButton: "Guess",
        guesses: "guesses",
        playAgain: "Play Again",
        youGuessed: "You guessed it in",
        youWon: "You won!",
        youGuessedCorrectly: "You guessed",
        correctly: "correctly!",
        // Table headers
        country: "Country",
        continent: "Continent",
        languages: "Languages",
        population: "Population",
        climate: "Climate",
        area: "Area",
        religion: "Religion",
        seaAccess: "Sea Access",
        // Population ranges
        "very small": "very small",
        "small": "small",
        "medium": "medium",
        "large": "large",
        "huge": "huge",
        // Climate types
        "cold": "cold",
        "temperate": "temperate",
        "tropical": "tropical",
        // Sea access
        "landlocked": "landlocked",
        "coastal": "coastal",
        "island": "island",
        // Share button
        shareWithFriend: "Share with a friend",
        copied: "Copied!",
        tries: "tries"
    },
    pt: {
        title: "Atlas Daily",
        subtitle_emoji: "Adivinhe o país misterioso através de pistas em emoji",
        subtitle_comparison: "Adivinhe o país comparando características",
        subtitle_tips: "Adivinhe o país através de dicas progressivas",
        emojiMode: "Emojis",
        comparisonMode: "Características",
        tipsMode: "Dicas",
        inputPlaceholder: "Digite o nome de um país...",
        guessButton: "Adivinhar",
        guesses: "tentativas",
        playAgain: "Jogar Novamente",
        youGuessed: "Você acertou em",
        youWon: "Você venceu!",
        youGuessedCorrectly: "Você acertou",
        correctly: "corretamente!",
        // Table headers
        country: "País",
        continent: "Continente",
        languages: "Idiomas",
        population: "População",
        climate: "Clima",
        area: "Área",
        religion: "Religião",
        seaAccess: "Acesso ao Mar",
        // Population ranges
        "very small": "muito pequena",
        "small": "pequena",
        "medium": "média",
        "large": "grande",
        "huge": "enorme",
        // Climate types
        "cold": "frio",
        "temperate": "temperado",
        "tropical": "tropical",
        // Sea access
        "landlocked": "sem litoral",
        "coastal": "costeiro",
        "island": "ilha",
        // Share button
        shareWithFriend: "Compartilhar com um amigo",
        copied: "Copiado!",
        tries: "tentativas"
    },
    es: {
        title: "Atlas Daily",
        subtitle_emoji: "Adivina el país misterioso con pistas de emojis",
        subtitle_comparison: "Adivina el país comparando características",
        subtitle_tips: "Adivina el país con pistas progresivas",
        emojiMode: "Emojis",
        comparisonMode: "Características",
        tipsMode: "Pistas",
        inputPlaceholder: "Ingresa el nombre de un país...",
        guessButton: "Adivinar",
        guesses: "intentos",
        playAgain: "Jugar de Nuevo",
        youGuessed: "¡Adivinaste en",
        youWon: "¡Ganaste!",
        youGuessedCorrectly: "Adivinaste",
        correctly: "correctamente!",
        // Table headers
        country: "País",
        continent: "Continente",
        languages: "Idiomas",
        population: "Población",
        climate: "Clima",
        area: "Área",
        religion: "Religión",
        seaAccess: "Acceso al Mar",
        // Population ranges
        "very small": "muy pequeña",
        "small": "pequeña",
        "medium": "mediana",
        "large": "grande",
        "huge": "enorme",
        // Climate types
        "cold": "frío",
        "temperate": "templado",
        "tropical": "tropical",
        // Sea access
        "landlocked": "sin litoral",
        "coastal": "costero",
        "island": "isla",
        // Share button
        shareWithFriend: "Compartir con un amigo",
        copied: "¡Copiado!",
        tries: "intentos"
    }
};

// Current language
let currentLanguage = 'en';

// Toggle language dropdown
function toggleLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    const button = document.getElementById('langButton');
    dropdown.classList.toggle('show');
    button.classList.toggle('open');
}

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
    updateTexts();

    // Save preference
    localStorage.setItem('atlasLanguage', lang);

    // Update current language display
    const langMap = { en: 'EN', pt: 'PT', es: 'ES' };
    document.getElementById('currentLang').textContent = langMap[lang];

    // Update active option
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');

    // Close dropdown
    document.getElementById('langDropdown').classList.remove('show');
    document.getElementById('langButton').classList.remove('open');
}

// Function to update all texts
function updateTexts() {
    const t = translations[currentLanguage];

    // Update title
    document.querySelector('.title').textContent = t.title;

    // Update subtitle
    const subtitle = document.getElementById('gameSubtitle');
    if (document.getElementById('emojiGame').classList.contains('hidden')) {
        subtitle.textContent = t.subtitle_comparison;
    } else {
        subtitle.textContent = t.subtitle_emoji;
    }

    // Update mode buttons
    document.getElementById('emojiModeBtn').textContent = t.emojiMode;
    document.getElementById('comparisonModeBtn').textContent = t.comparisonMode;
    document.getElementById('tipsModeBtn').textContent = t.tipsMode;

    // Update input placeholders
    const emojiInput = document.getElementById('countryInput');
    const comparisonInput = document.getElementById('comparisonInput');
    if (emojiInput) emojiInput.placeholder = t.inputPlaceholder;
    if (comparisonInput) comparisonInput.placeholder = t.inputPlaceholder;

    // Update guess buttons
    document.querySelectorAll('.button-text').forEach(btn => {
        btn.textContent = t.guessButton;
    });

    // Update table headers
    const headers = document.querySelectorAll('.comparison-table th');
    if (headers.length > 0) {
        headers[0].textContent = t.country;
        headers[1].textContent = t.continent;
        headers[2].textContent = t.languages;
        headers[3].textContent = t.population;
        headers[4].textContent = t.climate;
        headers[5].textContent = t.area;
        headers[6].textContent = t.religion;
        headers[7].textContent = t.seaAccess;
    }

    // Update play again buttons
    document.querySelectorAll('.play-again-button').forEach(btn => {
        btn.textContent = t.playAgain;
    });

    // Update success text
    const successText = document.querySelector('.success-text');
    if (successText) {
        const guessCount = document.getElementById('finalGuesses').textContent;
        successText.innerHTML = `${t.youGuessed} <span id="finalGuesses">${guessCount}</span> ${t.guesses}!`;
    }

    // Update win title and text
    const winTitle = document.querySelector('.win-title');
    if (winTitle) winTitle.textContent = t.youWon;

    const winText = document.querySelector('.win-text');
    if (winText) {
        const countryName = document.getElementById('winCountry')?.textContent;
        if (countryName) {
            winText.innerHTML = `${t.youGuessedCorrectly} <span id="winCountry">${countryName}</span> ${t.correctly}`;
        }
    }

    // Update share button
    const shareButtonText = document.querySelector('.share-button-text');
    if (shareButtonText) shareButtonText.textContent = t.shareWithFriend;

    // Update win guesses text
    const winGuesses = document.querySelector('.win-guesses');
    if (winGuesses) {
        const count = document.getElementById('winGuessCount')?.textContent;
        if (count) {
            winGuesses.innerHTML = `${t.youGuessed.toLowerCase()} <span id="winGuessCount">${count}</span> ${t.tries}`;
        }
    }

    // Update guess counter
    updateGuessCounter();
}

// Translate comparison game values
function translateValue(value) {
    const t = translations[currentLanguage];
    // Check if the value exists in translations
    if (t[value]) {
        return t[value];
    }
    // Return original value if no translation found
    return value;
}

// Update guess counter text
function updateGuessCounter() {
    const counter = document.getElementById('guessCounter');
    if (counter && !counter.classList.contains('hidden')) {
        const count = document.getElementById('guessCount').textContent;
        const t = translations[currentLanguage];
        counter.innerHTML = `<span id="guessCount">${count}</span> / 8 ${t.guesses}`;
    }
}

// Detect browser language
function detectBrowserLanguage() {
    // Get browser language (e.g., 'en-US', 'pt-BR', 'es-ES')
    const browserLang = navigator.language || navigator.userLanguage;

    // Extract the primary language code (e.g., 'en' from 'en-US')
    const langCode = browserLang.split('-')[0].toLowerCase();

    // Map to supported languages
    const supportedLanguages = ['en', 'pt', 'es'];

    // Return the language if supported, otherwise return 'en' as fallback
    return supportedLanguages.includes(langCode) ? langCode : 'en';
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if user has manually set a language preference
    const savedLang = localStorage.getItem('atlasLanguage');

    // If user has a saved preference, use that
    // Otherwise, detect browser language
    const initialLang = savedLang || detectBrowserLanguage();

    if (initialLang !== 'en') {
        changeLanguage(initialLang);
    } else {
        changeLanguage('en');
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        const langSelector = document.querySelector('.language-selector');
        const dropdown = document.getElementById('langDropdown');
        const button = document.getElementById('langButton');

        if (langSelector && !langSelector.contains(e.target)) {
            dropdown?.classList.remove('show');
            button?.classList.remove('open');
        }
    });
});
