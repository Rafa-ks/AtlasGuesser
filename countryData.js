// Extended country data for comparison minigame
const countryData = [
    {
        name: "Japan",
        flag: "🇯🇵",
        emojis: ["🗾", "🍣", "🗻", "🌸", "🥋", "🏯", "⚪", "🔴"],
        continent: "Asia",
        subregion: "Eastern Asia",
        languages: ["Japanese"],
        languageFamily: "Japonic",
        population: 125000000,
        climate: "temperate",
        area: 377975,
        religion: "Buddhism",
        seaAccess: "island"
    },
    {
        name: "France",
        flag: "🇫🇷",
        emojis: ["🗼", "🥐", "🧀", "🍷", "🎨", "🥖", "🔵", "🔴"],
        continent: "Europe",
        subregion: "Western Europe",
        languages: ["French"],
        languageFamily: "Romance",
        population: 67000000,
        climate: "temperate",
        area: 643801,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Italy",
        flag: "🇮🇹",
        emojis: ["🍕", "🍝", "🏛️", "🎭", "🍷", "⚽", "🟢", "🔴"],
        continent: "Europe",
        subregion: "Southern Europe",
        languages: ["Italian"],
        languageFamily: "Romance",
        population: 59000000,
        climate: "temperate",
        area: 301340,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Brazil",
        flag: "🇧🇷",
        emojis: ["⚽", "🌴", "🎭", "☕", "🦜", "🏖️", "🟢", "🟡"],
        continent: "South America",
        subregion: "South America",
        languages: ["Portuguese"],
        languageFamily: "Romance",
        population: 215000000,
        climate: "tropical",
        area: 8515767,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Egypt",
        flag: "🇪🇬",
        emojis: ["🐪", "🏜️", "🔺", "🏛️", "☀️", "🐍", "⚪", "🔴"],
        continent: "Africa",
        subregion: "Northern Africa",
        languages: ["Arabic"],
        languageFamily: "Semitic",
        population: 105000000,
        climate: "tropical",
        area: 1002450,
        religion: "Islam",
        seaAccess: "coastal"
    },
    {
        name: "Australia",
        flag: "🇦🇺",
        emojis: ["🦘", "🐨", "🏖️", "🏄", "🦈", "🏝️", "🔵", "🔴"],
        continent: "Oceania",
        subregion: "Australia and New Zealand",
        languages: ["English"],
        languageFamily: "Germanic",
        population: 26000000,
        climate: "tropical",
        area: 7692024,
        religion: "Christianity",
        seaAccess: "island"
    },
    {
        name: "Mexico",
        flag: "🇲🇽",
        emojis: ["🌮", "🌵", "🎺", "💀", "🌶️", "🦎", "🟢", "🔴"],
        continent: "North America",
        subregion: "Central America",
        languages: ["Spanish"],
        languageFamily: "Romance",
        population: 130000000,
        climate: "tropical",
        area: 1964375,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "China",
        flag: "🇨🇳",
        emojis: ["🐉", "🏯", "🥟", "🎋", "🐼", "🍜", "🔴", "🟡"],
        continent: "Asia",
        subregion: "Eastern Asia",
        languages: ["Mandarin"],
        languageFamily: "Sino-Tibetan",
        population: 1400000000,
        climate: "temperate",
        area: 9596961,
        religion: "Folk",
        seaAccess: "coastal"
    },
    {
        name: "India",
        flag: "🇮🇳",
        emojis: ["🐘", "🕌", "🍛", "🪔", "🐅", "🧘", "🟠", "🟢"],
        continent: "Asia",
        subregion: "Southern Asia",
        languages: ["Hindi", "English"],
        languageFamily: "Indo-European",
        population: 1400000000,
        climate: "tropical",
        area: 3287263,
        religion: "Hinduism",
        seaAccess: "coastal"
    },
    {
        name: "Spain",
        flag: "🇪🇸",
        emojis: ["💃", "🐂", "🥘", "🏖️", "⚽", "🎸", "🔴", "🟡"],
        continent: "Europe",
        subregion: "Southern Europe",
        languages: ["Spanish"],
        languageFamily: "Romance",
        population: 47000000,
        climate: "temperate",
        area: 505990,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Greece",
        flag: "🇬🇷",
        emojis: ["🏛️", "🫒", "🏺", "⛵", "☀️", "🏝️", "🔵", "⚪"],
        continent: "Europe",
        subregion: "Southern Europe",
        languages: ["Greek"],
        languageFamily: "Hellenic",
        population: 10500000,
        climate: "temperate",
        area: 131957,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "United States",
        flag: "🇺🇸",
        emojis: ["🗽", "🦅", "🍔", "🏈", "🌉", "🎬", "🔴", "🔵"],
        continent: "North America",
        subregion: "Northern America",
        languages: ["English"],
        languageFamily: "Germanic",
        population: 335000000,
        climate: "temperate",
        area: 9833517,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Canada",
        flag: "🇨🇦",
        emojis: ["🍁", "🏒", "🦫", "🏔️", "❄️", "🐻", "🔴", "⚪"],
        continent: "North America",
        subregion: "Northern America",
        languages: ["English", "French"],
        languageFamily: "Germanic",
        population: 39000000,
        climate: "cold",
        area: 9984670,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "United Kingdom",
        flag: "🇬🇧",
        emojis: ["👑", "☕", "🎩", "🏰", "🚌", "⚽", "🔴", "🔵"],
        continent: "Europe",
        subregion: "Northern Europe",
        languages: ["English"],
        languageFamily: "Germanic",
        population: 68000000,
        climate: "temperate",
        area: 242495,
        religion: "Christianity",
        seaAccess: "island"
    },
    {
        name: "Germany",
        flag: "🇩🇪",
        emojis: ["🍺", "🥨", "🏰", "🚗", "⚽", "🌲", "🔴", "🟡"],
        continent: "Europe",
        subregion: "Western Europe",
        languages: ["German"],
        languageFamily: "Germanic",
        population: 84000000,
        climate: "temperate",
        area: 357114,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Russia",
        flag: "🇷🇺",
        emojis: ["🪆", "❄️", "🐻", "🏰", "🚀", "⛷️", "⚪", "🔴"],
        continent: "Europe",
        subregion: "Eastern Europe",
        languages: ["Russian"],
        languageFamily: "Slavic",
        population: 146000000,
        climate: "cold",
        area: 17098242,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Netherlands",
        flag: "🇳🇱",
        emojis: ["🌷", "🚲", "🧀", "⚽", "🏠", "⛸️", "🔴", "🔵"],
        continent: "Europe",
        subregion: "Western Europe",
        languages: ["Dutch"],
        languageFamily: "Germanic",
        population: 17500000,
        climate: "temperate",
        area: 41850,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Switzerland",
        flag: "🇨🇭",
        emojis: ["🏔️", "🧀", "🍫", "⌚", "⛷️", "🚠", "🔴", "⚪"],
        continent: "Europe",
        subregion: "Western Europe",
        languages: ["German", "French", "Italian"],
        languageFamily: "Germanic",
        population: 8700000,
        climate: "temperate",
        area: 41285,
        religion: "Christianity",
        seaAccess: "landlocked"
    },
    {
        name: "Sweden",
        flag: "🇸🇪",
        emojis: ["❄️", "🏒", "🌲", "🏔️", "🦌", "🎄", "🔵", "🟡"],
        continent: "Europe",
        subregion: "Northern Europe",
        languages: ["Swedish"],
        languageFamily: "Germanic",
        population: 10500000,
        climate: "cold",
        area: 450295,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Norway",
        flag: "🇳🇴",
        emojis: ["🏔️", "❄️", "🛶", "🌌", "⛷️", "🐟", "🔴", "🔵"],
        continent: "Europe",
        subregion: "Northern Europe",
        languages: ["Norwegian"],
        languageFamily: "Germanic",
        population: 5500000,
        climate: "cold",
        area: 323802,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Thailand",
        flag: "🇹🇭",
        emojis: ["🐘", "🏯", "🍜", "🏝️", "🌴", "🥊", "🔴", "🔵"],
        continent: "Asia",
        subregion: "South-Eastern Asia",
        languages: ["Thai"],
        languageFamily: "Tai-Kadai",
        population: 70000000,
        climate: "tropical",
        area: 513120,
        religion: "Buddhism",
        seaAccess: "coastal"
    },
    {
        name: "South Korea",
        flag: "🇰🇷",
        emojis: ["🏯", "🍜", "🎮", "🎤", "🌶️", "📱", "🔴", "🔵"],
        continent: "Asia",
        subregion: "Eastern Asia",
        languages: ["Korean"],
        languageFamily: "Koreanic",
        population: 52000000,
        climate: "temperate",
        area: 100210,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Argentina",
        flag: "🇦🇷",
        emojis: ["⚽", "🥩", "💃", "🏔️", "🍷", "🐧", "🔵", "⚪"],
        continent: "South America",
        subregion: "South America",
        languages: ["Spanish"],
        languageFamily: "Romance",
        population: 46000000,
        climate: "temperate",
        area: 2780400,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Turkey",
        flag: "🇹🇷",
        emojis: ["🕌", "☕", "🧿", "🏛️", "🥙", "🌉", "🔴", "⚪"],
        continent: "Asia",
        subregion: "Western Asia",
        languages: ["Turkish"],
        languageFamily: "Turkic",
        population: 85000000,
        climate: "temperate",
        area: 783562,
        religion: "Islam",
        seaAccess: "coastal"
    },
    {
        name: "South Africa",
        flag: "🇿🇦",
        emojis: ["🦁", "🐘", "🏔️", "🦏", "🦓", "🌅", "🟢", "🟡"],
        continent: "Africa",
        subregion: "Southern Africa",
        languages: ["English", "Afrikaans", "Zulu"],
        languageFamily: "Germanic",
        population: 60000000,
        climate: "temperate",
        area: 1221037,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "New Zealand",
        flag: "🇳🇿",
        emojis: ["🥝", "🏔️", "🐑", "🏉", "🌋", "🏞️", "🔵", "🔴"],
        continent: "Oceania",
        subregion: "Australia and New Zealand",
        languages: ["English"],
        languageFamily: "Germanic",
        population: 5100000,
        climate: "temperate",
        area: 270467,
        religion: "Christianity",
        seaAccess: "island"
    },
    {
        name: "Ireland",
        flag: "🇮🇪",
        emojis: ["☘️", "🍺", "🏰", "🐑", "🌧️", "🎻", "🟢", "⚪"],
        continent: "Europe",
        subregion: "Northern Europe",
        languages: ["English", "Irish"],
        languageFamily: "Germanic",
        population: 5000000,
        climate: "temperate",
        area: 70273,
        religion: "Christianity",
        seaAccess: "island"
    },
    {
        name: "Portugal",
        flag: "🇵🇹",
        emojis: ["🏖️", "⚽", "🍷", "🏰", "⛵", "🐟", "🟢", "🔴"],
        continent: "Europe",
        subregion: "Southern Europe",
        languages: ["Portuguese"],
        languageFamily: "Romance",
        population: 10300000,
        climate: "temperate",
        area: 92090,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Denmark",
        flag: "🇩🇰",
        emojis: ["🏰", "🚲", "🌬️", "🧱", "⚓", "☃️", "🔴", "⚪"],
        continent: "Europe",
        subregion: "Northern Europe",
        languages: ["Danish"],
        languageFamily: "Germanic",
        population: 5900000,
        climate: "temperate",
        area: 42951,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Iceland",
        flag: "🇮🇸",
        emojis: ["🌋", "❄️", "♨️", "🐴", "🌌", "🏔️", "🔵", "🔴"],
        continent: "Europe",
        subregion: "Northern Europe",
        languages: ["Icelandic"],
        languageFamily: "Germanic",
        population: 370000,
        climate: "cold",
        area: 103000,
        religion: "Christianity",
        seaAccess: "island"
    },
    {
        name: "Peru",
        flag: "🇵🇪",
        emojis: ["🏔️", "🦙", "🏛️", "🌽", "🌄", "🦜", "🔴", "⚪"],
        continent: "South America",
        subregion: "South America",
        languages: ["Spanish"],
        languageFamily: "Romance",
        population: 34000000,
        climate: "tropical",
        area: 1285216,
        religion: "Christianity",
        seaAccess: "coastal"
    }
];

// Helper functions for comparison
function getPopulationRange(population) {
    if (population < 5000000) return "very small";
    if (population < 20000000) return "small";
    if (population < 60000000) return "medium";
    if (population < 200000000) return "large";
    return "huge";
}

function getAreaRange(area) {
    if (area < 100000) return "very small";
    if (area < 500000) return "small";
    if (area < 1500000) return "medium";
    if (area < 3000000) return "large";
    return "huge";
}

function getClimateEmoji(climate) {
    if (climate === "tropical") return "🔥🌴";
    if (climate === "temperate") return "🌤️🍃";
    return "❄️🏔️";
}

function shareLanguage(languages1, languages2) {
    return languages1.some(lang => languages2.includes(lang));
}

function compareCharacteristic(guess, secret, characteristic) {
    const result = {};

    switch(characteristic) {
        case "continent":
            result.value = guess.continent;
            result.color = guess.continent === secret.continent ? "green" : "red";
            break;

        case "subregion":
            result.value = guess.subregion;
            if (guess.subregion === secret.subregion) {
                result.color = "green";
            } else if (guess.continent === secret.continent) {
                result.color = "yellow";
            } else {
                result.color = "red";
            }
            break;

        case "languages":
            result.value = guess.languages.join(", ");
            if (shareLanguage(guess.languages, secret.languages)) {
                result.color = "green";
            } else if (guess.languageFamily === secret.languageFamily) {
                result.color = "yellow";
            } else {
                result.color = "red";
            }
            break;

        case "population":
            const guessPopRange = getPopulationRange(guess.population);
            const secretPopRange = getPopulationRange(secret.population);
            const ranges = ["very small", "small", "medium", "large", "huge"];
            const guessIdx = ranges.indexOf(guessPopRange);
            const secretIdx = ranges.indexOf(secretPopRange);

            result.value = guessPopRange;
            if (guessIdx === secretIdx) {
                result.color = "green";
            } else if (Math.abs(guessIdx - secretIdx) === 1) {
                result.color = "yellow";
            } else {
                result.color = "red";
            }
            break;

        case "climate":
            result.value = getClimateEmoji(guess.climate);
            const climates = ["cold", "temperate", "tropical"];
            const guessClimIdx = climates.indexOf(guess.climate);
            const secretClimIdx = climates.indexOf(secret.climate);

            if (guessClimIdx === secretClimIdx) {
                result.color = "green";
            } else if (Math.abs(guessClimIdx - secretClimIdx) === 1) {
                result.color = "yellow";
            } else {
                result.color = "red";
            }
            break;

        case "area":
            const guessAreaRange = getAreaRange(guess.area);
            const secretAreaRange = getAreaRange(secret.area);
            const areaRanges = ["very small", "small", "medium", "large", "huge"];
            const guessAreaIdx = areaRanges.indexOf(guessAreaRange);
            const secretAreaIdx = areaRanges.indexOf(secretAreaRange);

            result.value = guessAreaRange;
            if (guessAreaIdx === secretAreaIdx) {
                result.color = "green";
            } else if (Math.abs(guessAreaIdx - secretAreaIdx) === 1) {
                result.color = "yellow";
            } else {
                result.color = "red";
            }
            break;

        case "religion":
            result.value = guess.religion;
            if (guess.religion === secret.religion) {
                result.color = "green";
            } else {
                const abrahamicReligions = ["Christianity", "Islam", "Judaism"];
                const easternReligions = ["Buddhism", "Hinduism"];

                if (abrahamicReligions.includes(guess.religion) && abrahamicReligions.includes(secret.religion)) {
                    result.color = "yellow";
                } else if (easternReligions.includes(guess.religion) && easternReligions.includes(secret.religion)) {
                    result.color = "yellow";
                } else {
                    result.color = "red";
                }
            }
            break;

        case "seaAccess":
            result.value = guess.seaAccess;
            if (guess.seaAccess === secret.seaAccess) {
                result.color = "green";
            } else if (guess.seaAccess !== "landlocked" && secret.seaAccess !== "landlocked") {
                result.color = "yellow";
            } else {
                result.color = "red";
            }
            break;
    }

    return result;
}
