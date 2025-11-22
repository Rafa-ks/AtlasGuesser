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
    },
    {
        name: "Chile",
        flag: "🇨🇱",
        emojis: ["🏔️", "🍷", "🐧", "🌶️", "🏞️", "🌋", "🔴", "🔵"],
        continent: "South America",
        subregion: "South America",
        languages: ["Spanish"],
        languageFamily: "Romance",
        population: 19500000,
        climate: "temperate",
        area: 756102,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Poland",
        flag: "🇵🇱",
        emojis: ["🏰", "🥟", "🌲", "❄️", "🦅", "🎄", "⚪", "🔴"],
        continent: "Europe",
        subregion: "Eastern Europe",
        languages: ["Polish"],
        languageFamily: "Slavic",
        population: 38000000,
        climate: "temperate",
        area: 312696,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Austria",
        flag: "🇦🇹",
        emojis: ["🏔️", "⛷️", "🎼", "🏰", "🍺", "🍫", "🔴", "⚪"],
        continent: "Europe",
        subregion: "Western Europe",
        languages: ["German"],
        languageFamily: "Germanic",
        population: 9000000,
        climate: "temperate",
        area: 83879,
        religion: "Christianity",
        seaAccess: "landlocked"
    },
    {
        name: "Belgium",
        flag: "🇧🇪",
        emojis: ["🍫", "🧇", "🍺", "🏛️", "🎨", "🏰", "🔴", "🟡"],
        continent: "Europe",
        subregion: "Western Europe",
        languages: ["Dutch", "French", "German"],
        languageFamily: "Germanic",
        population: 11600000,
        climate: "temperate",
        area: 30689,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Finland",
        flag: "🇫🇮",
        emojis: ["❄️", "🎅", "🦌", "🌲", "🏒", "🛷", "🔵", "⚪"],
        continent: "Europe",
        subregion: "Northern Europe",
        languages: ["Finnish", "Swedish"],
        languageFamily: "Uralic",
        population: 5500000,
        climate: "cold",
        area: 338424,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Vietnam",
        flag: "🇻🇳",
        emojis: ["🍜", "🏯", "🌾", "🏝️", "🏞️", "☕", "🔴", "🟡"],
        continent: "Asia",
        subregion: "South-Eastern Asia",
        languages: ["Vietnamese"],
        languageFamily: "Austroasiatic",
        population: 98000000,
        climate: "tropical",
        area: 331212,
        religion: "Buddhism",
        seaAccess: "coastal"
    },
    {
        name: "Kenya",
        flag: "🇰🇪",
        emojis: ["🦁", "🐘", "🦒", "🏃", "☀️", "🦓", "🔴", "🟢"],
        continent: "Africa",
        subregion: "Eastern Africa",
        languages: ["English", "Swahili"],
        languageFamily: "Niger-Congo",
        population: 55000000,
        climate: "tropical",
        area: 580367,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Morocco",
        flag: "🇲🇦",
        emojis: ["🕌", "🐪", "🏜️", "🫖", "🏺", "🧿", "🔴", "🟢"],
        continent: "Africa",
        subregion: "Northern Africa",
        languages: ["Arabic", "Berber"],
        languageFamily: "Semitic",
        population: 37000000,
        climate: "tropical",
        area: 446550,
        religion: "Islam",
        seaAccess: "coastal"
    },
    {
        name: "Colombia",
        flag: "🇨🇴",
        emojis: ["☕", "💃", "🦜", "🏔️", "🌺", "⚽", "🟡", "🔵"],
        continent: "South America",
        subregion: "South America",
        languages: ["Spanish"],
        languageFamily: "Romance",
        population: 52000000,
        climate: "tropical",
        area: 1141748,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Venezuela",
        flag: "🇻🇪",
        emojis: ["🏔️", "🦜", "⚾", "🌴", "☕", "🏞️", "🟡", "🔴"],
        continent: "South America",
        subregion: "South America",
        languages: ["Spanish"],
        languageFamily: "Romance",
        population: 28000000,
        climate: "tropical",
        area: 916445,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Ecuador",
        flag: "🇪🇨",
        emojis: ["🏔️", "🦜", "🐢", "🌋", "🍌", "☕", "🟡", "🔵"],
        continent: "South America",
        subregion: "South America",
        languages: ["Spanish"],
        languageFamily: "Romance",
        population: 18000000,
        climate: "tropical",
        area: 276841,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Czech Republic",
        flag: "🇨🇿",
        emojis: ["🍺", "🏰", "🎼", "🏛️", "🌉", "🎨", "🔴", "🔵"],
        continent: "Europe",
        subregion: "Eastern Europe",
        languages: ["Czech"],
        languageFamily: "Slavic",
        population: 10500000,
        climate: "temperate",
        area: 78871,
        religion: "Christianity",
        seaAccess: "landlocked"
    },
    {
        name: "Hungary",
        flag: "🇭🇺",
        emojis: ["🏰", "🌉", "🍲", "🍷", "🎼", "♨️", "🔴", "🟢"],
        continent: "Europe",
        subregion: "Eastern Europe",
        languages: ["Hungarian"],
        languageFamily: "Uralic",
        population: 9700000,
        climate: "temperate",
        area: 93028,
        religion: "Christianity",
        seaAccess: "landlocked"
    },
    {
        name: "Romania",
        flag: "🇷🇴",
        emojis: ["🏰", "🧛", "🏔️", "🌲", "🏛️", "🐺", "🔵", "🟡"],
        continent: "Europe",
        subregion: "Eastern Europe",
        languages: ["Romanian"],
        languageFamily: "Romance",
        population: 19000000,
        climate: "temperate",
        area: 238397,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Indonesia",
        flag: "🇮🇩",
        emojis: ["🏝️", "🌋", "🐵", "🌴", "🏯", "🦜", "🔴", "⚪"],
        continent: "Asia",
        subregion: "South-Eastern Asia",
        languages: ["Indonesian"],
        languageFamily: "Austronesian",
        population: 277000000,
        climate: "tropical",
        area: 1904569,
        religion: "Islam",
        seaAccess: "island"
    },
    {
        name: "Philippines",
        flag: "🇵🇭",
        emojis: ["🏝️", "🏖️", "🌴", "🦜", "🏄", "🐠", "🔴", "🔵"],
        continent: "Asia",
        subregion: "South-Eastern Asia",
        languages: ["Filipino", "English"],
        languageFamily: "Austronesian",
        population: 115000000,
        climate: "tropical",
        area: 300000,
        religion: "Christianity",
        seaAccess: "island"
    },
    {
        name: "Pakistan",
        flag: "🇵🇰",
        emojis: ["🏔️", "🕌", "🏏", "🌄", "🐆", "⛰️", "🟢", "⚪"],
        continent: "Asia",
        subregion: "Southern Asia",
        languages: ["Urdu", "English"],
        languageFamily: "Indo-European",
        population: 231000000,
        climate: "tropical",
        area: 881912,
        religion: "Islam",
        seaAccess: "coastal"
    },
    {
        name: "Bangladesh",
        flag: "🇧🇩",
        emojis: ["🐅", "🏞️", "🌾", "🚤", "🕌", "🍛", "🟢", "🔴"],
        continent: "Asia",
        subregion: "Southern Asia",
        languages: ["Bengali"],
        languageFamily: "Indo-European",
        population: 170000000,
        climate: "tropical",
        area: 147570,
        religion: "Islam",
        seaAccess: "coastal"
    },
    {
        name: "Nigeria",
        flag: "🇳🇬",
        emojis: ["🦁", "🏞️", "⚽", "🥁", "🎭", "🌴", "🟢", "⚪"],
        continent: "Africa",
        subregion: "Western Africa",
        languages: ["English"],
        languageFamily: "Germanic",
        population: 220000000,
        climate: "tropical",
        area: 923768,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Ethiopia",
        flag: "🇪🇹",
        emojis: ["☕", "🦁", "🏔️", "🏞️", "🏃", "🦒", "🟢", "🟡"],
        continent: "Africa",
        subregion: "Eastern Africa",
        languages: ["Amharic"],
        languageFamily: "Semitic",
        population: 120000000,
        climate: "tropical",
        area: 1104300,
        religion: "Christianity",
        seaAccess: "landlocked"
    },
    {
        name: "Ukraine",
        flag: "🇺🇦",
        emojis: ["🌻", "🏰", "🌾", "🏛️", "🍞", "❄️", "🔵", "🟡"],
        continent: "Europe",
        subregion: "Eastern Europe",
        languages: ["Ukrainian"],
        languageFamily: "Slavic",
        population: 43000000,
        climate: "temperate",
        area: 603628,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Kazakhstan",
        flag: "🇰🇿",
        emojis: ["🏔️", "🏜️", "🐎", "🚀", "⛰️", "🦅", "🔵", "🟡"],
        continent: "Asia",
        subregion: "Central Asia",
        languages: ["Kazakh", "Russian"],
        languageFamily: "Turkic",
        population: 19500000,
        climate: "cold",
        area: 2724900,
        religion: "Islam",
        seaAccess: "landlocked"
    },
    {
        name: "Algeria",
        flag: "🇩🇿",
        emojis: ["🏜️", "🕌", "🐪", "🏺", "⛰️", "☀️", "🟢", "⚪"],
        continent: "Africa",
        subregion: "Northern Africa",
        languages: ["Arabic", "Berber"],
        languageFamily: "Semitic",
        population: 45000000,
        climate: "tropical",
        area: 2381741,
        religion: "Islam",
        seaAccess: "coastal"
    },
    {
        name: "Saudi Arabia",
        flag: "🇸🇦",
        emojis: ["🕌", "🐪", "🏜️", "⛽", "☀️", "🌴", "🟢", "⚪"],
        continent: "Asia",
        subregion: "Western Asia",
        languages: ["Arabic"],
        languageFamily: "Semitic",
        population: 36000000,
        climate: "tropical",
        area: 2149690,
        religion: "Islam",
        seaAccess: "coastal"
    },
    {
        name: "Malaysia",
        flag: "🇲🇾",
        emojis: ["🏝️", "🌴", "🍜", "🐵", "🕌", "🦜", "🔴", "🔵"],
        continent: "Asia",
        subregion: "South-Eastern Asia",
        languages: ["Malay"],
        languageFamily: "Austronesian",
        population: 33500000,
        climate: "tropical",
        area: 330803,
        religion: "Islam",
        seaAccess: "coastal"
    },
    {
        name: "Nepal",
        flag: "🇳🇵",
        emojis: ["🏔️", "⛰️", "🏯", "🙏", "🐅", "🧘", "🔴", "🔵"],
        continent: "Asia",
        subregion: "Southern Asia",
        languages: ["Nepali"],
        languageFamily: "Indo-European",
        population: 30000000,
        climate: "temperate",
        area: 147516,
        religion: "Hinduism",
        seaAccess: "landlocked"
    },
    {
        name: "Iraq",
        flag: "🇮🇶",
        emojis: ["🕌", "🏜️", "🏛️", "🌴", "🏺", "☀️", "🔴", "⚪"],
        continent: "Asia",
        subregion: "Western Asia",
        languages: ["Arabic", "Kurdish"],
        languageFamily: "Semitic",
        population: 42000000,
        climate: "tropical",
        area: 438317,
        religion: "Islam",
        seaAccess: "coastal"
    },
    {
        name: "Afghanistan",
        flag: "🇦🇫",
        emojis: ["🏔️", "🕌", "⛰️", "🏜️", "🏺", "🐪", "🟢", "🔴"],
        continent: "Asia",
        subregion: "Southern Asia",
        languages: ["Pashto", "Dari"],
        languageFamily: "Indo-European",
        population: 40000000,
        climate: "temperate",
        area: 652230,
        religion: "Islam",
        seaAccess: "landlocked"
    },
    {
        name: "Myanmar",
        flag: "🇲🇲",
        emojis: ["🏯", "🐘", "🌴", "🏛️", "🍜", "🦜", "🟡", "🟢"],
        continent: "Asia",
        subregion: "South-Eastern Asia",
        languages: ["Burmese"],
        languageFamily: "Sino-Tibetan",
        population: 54500000,
        climate: "tropical",
        area: 676578,
        religion: "Buddhism",
        seaAccess: "coastal"
    },
    {
        name: "United Arab Emirates",
        flag: "🇦🇪",
        emojis: ["🏙️", "🏜️", "🕌", "🐪", "🏝️", "☀️", "🔴", "🟢"],
        continent: "Asia",
        subregion: "Western Asia",
        languages: ["Arabic"],
        languageFamily: "Semitic",
        population: 10000000,
        climate: "tropical",
        area: 83600,
        religion: "Islam",
        seaAccess: "coastal"
    },
    {
        name: "Ghana",
        flag: "🇬🇭",
        emojis: ["☕", "🦜", "🏖️", "🥁", "⚽", "🌴", "🟡", "🟢"],
        continent: "Africa",
        subregion: "Western Africa",
        languages: ["English"],
        languageFamily: "Germanic",
        population: 32000000,
        climate: "tropical",
        area: 238533,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Tanzania",
        flag: "🇹🇿",
        emojis: ["🦁", "🐘", "🦒", "🏔️", "🏖️", "☕", "🟢", "🔵"],
        continent: "Africa",
        subregion: "Eastern Africa",
        languages: ["Swahili", "English"],
        languageFamily: "Niger-Congo",
        population: 63000000,
        climate: "tropical",
        area: 947303,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Iran",
        flag: "🇮🇷",
        emojis: ["🕌", "🏜️", "🏛️", "🏔️", "🏺", "🐆", "🟢", "🔴"],
        continent: "Asia",
        subregion: "Western Asia",
        languages: ["Persian"],
        languageFamily: "Indo-European",
        population: 87000000,
        climate: "temperate",
        area: 1648195,
        religion: "Islam",
        seaAccess: "coastal"
    },
    {
        name: "Guatemala",
        flag: "🇬🇹",
        emojis: ["🌋", "🏛️", "🌽", "🦜", "🌺", "🏞️", "🔵", "⚪"],
        continent: "North America",
        subregion: "Central America",
        languages: ["Spanish"],
        languageFamily: "Romance",
        population: 18000000,
        climate: "tropical",
        area: 108889,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Cambodia",
        flag: "🇰🇭",
        emojis: ["🏯", "🐘", "🌴", "🏞️", "🍜", "🌾", "🔴", "🔵"],
        continent: "Asia",
        subregion: "South-Eastern Asia",
        languages: ["Khmer"],
        languageFamily: "Austroasiatic",
        population: 17000000,
        climate: "tropical",
        area: 181035,
        religion: "Buddhism",
        seaAccess: "coastal"
    },
    {
        name: "Jordan",
        flag: "🇯🇴",
        emojis: ["🏜️", "🏛️", "🐪", "⛰️", "🕌", "🏺", "🔴", "⚪"],
        continent: "Asia",
        subregion: "Western Asia",
        languages: ["Arabic"],
        languageFamily: "Semitic",
        population: 11000000,
        climate: "tropical",
        area: 89342,
        religion: "Islam",
        seaAccess: "coastal"
    },
    {
        name: "Uganda",
        flag: "🇺🇬",
        emojis: ["🦍", "🐘", "🏞️", "☕", "🏔️", "🦜", "🔴", "🟡"],
        continent: "Africa",
        subregion: "Eastern Africa",
        languages: ["English", "Swahili"],
        languageFamily: "Germanic",
        population: 48000000,
        climate: "tropical",
        area: 241550,
        religion: "Christianity",
        seaAccess: "landlocked"
    },
    {
        name: "Serbia",
        flag: "🇷🇸",
        emojis: ["🏰", "🎵", "🍷", "🌉", "🏛️", "🏔️", "🔴", "🔵"],
        continent: "Europe",
        subregion: "Southern Europe",
        languages: ["Serbian"],
        languageFamily: "Slavic",
        population: 6800000,
        climate: "temperate",
        area: 88361,
        religion: "Christianity",
        seaAccess: "landlocked"
    },
    {
        name: "Croatia",
        flag: "🇭🇷",
        emojis: ["🏖️", "⚽", "🏰", "⛵", "🏝️", "🍷", "🔴", "🔵"],
        continent: "Europe",
        subregion: "Southern Europe",
        languages: ["Croatian"],
        languageFamily: "Slavic",
        population: 3900000,
        climate: "temperate",
        area: 56594,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Panama",
        flag: "🇵🇦",
        emojis: ["🚢", "🏖️", "🌴", "🦜", "🐒", "🏞️", "🔴", "🔵"],
        continent: "North America",
        subregion: "Central America",
        languages: ["Spanish"],
        languageFamily: "Romance",
        population: 4400000,
        climate: "tropical",
        area: 75417,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Costa Rica",
        flag: "🇨🇷",
        emojis: ["🦜", "🌋", "🏖️", "🌴", "🦥", "🐸", "🔴", "🔵"],
        continent: "North America",
        subregion: "Central America",
        languages: ["Spanish"],
        languageFamily: "Romance",
        population: 5200000,
        climate: "tropical",
        area: 51100,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Uruguay",
        flag: "🇺🇾",
        emojis: ["⚽", "🥩", "🏖️", "🍷", "☀️", "🐃", "🔵", "⚪"],
        continent: "South America",
        subregion: "South America",
        languages: ["Spanish"],
        languageFamily: "Romance",
        population: 3500000,
        climate: "temperate",
        area: 176215,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Singapore",
        flag: "🇸🇬",
        emojis: ["🏙️", "🦁", "🍜", "🌴", "🏝️", "🎡", "🔴", "⚪"],
        continent: "Asia",
        subregion: "South-Eastern Asia",
        languages: ["English", "Malay", "Mandarin", "Tamil"],
        languageFamily: "Germanic",
        population: 5900000,
        climate: "tropical",
        area: 728,
        religion: "Buddhism",
        seaAccess: "island"
    },
    {
        name: "Bosnia and Herzegovina",
        flag: "🇧🇦",
        emojis: ["🏔️", "🏰", "🕌", "🏞️", "☕", "🌉", "🔵", "🟡"],
        continent: "Europe",
        subregion: "Southern Europe",
        languages: ["Bosnian", "Serbian", "Croatian"],
        languageFamily: "Slavic",
        population: 3200000,
        climate: "temperate",
        area: 51209,
        religion: "Islam",
        seaAccess: "coastal"
    },
    {
        name: "Lebanon",
        flag: "🇱🇧",
        emojis: ["🏔️", "🏛️", "🌲", "🕌", "🏖️", "🏺", "🔴", "⚪"],
        continent: "Asia",
        subregion: "Western Asia",
        languages: ["Arabic", "French"],
        languageFamily: "Semitic",
        population: 6800000,
        climate: "temperate",
        area: 10452,
        religion: "Islam",
        seaAccess: "coastal"
    },
    {
        name: "Israel",
        flag: "🇮🇱",
        emojis: ["🕌", "🏛️", "🏖️", "🏜️", "☀️", "🕍", "🔵", "⚪"],
        continent: "Asia",
        subregion: "Western Asia",
        languages: ["Hebrew", "Arabic"],
        languageFamily: "Semitic",
        population: 9500000,
        climate: "temperate",
        area: 22072,
        religion: "Judaism",
        seaAccess: "coastal"
    },
    {
        name: "Bulgaria",
        flag: "🇧🇬",
        emojis: ["🏔️", "🍷", "🏖️", "🏛️", "🌹", "⛷️", "⚪", "🟢"],
        continent: "Europe",
        subregion: "Eastern Europe",
        languages: ["Bulgarian"],
        languageFamily: "Slavic",
        population: 6900000,
        climate: "temperate",
        area: 110879,
        religion: "Christianity",
        seaAccess: "coastal"
    },
    {
        name: "Slovakia",
        flag: "🇸🇰",
        emojis: ["🏔️", "🏰", "🧀", "🍺", "⛷️", "🌲", "🔴", "🔵"],
        continent: "Europe",
        subregion: "Eastern Europe",
        languages: ["Slovak"],
        languageFamily: "Slavic",
        population: 5400000,
        climate: "temperate",
        area: 49037,
        religion: "Christianity",
        seaAccess: "landlocked"
    },
    {
        name: "Bolivia",
        flag: "🇧🇴",
        emojis: ["🦙", "🏔️", "🌄", "🎭", "⛰️", "🦜", "🔴", "🟢"],
        continent: "South America",
        subregion: "South America",
        languages: ["Spanish", "Quechua", "Aymara"],
        languageFamily: "Romance",
        population: 12000000,
        climate: "temperate",
        area: 1098581,
        religion: "Christianity",
        seaAccess: "landlocked"
    },
    {
        name: "Paraguay",
        flag: "🇵🇾",
        emojis: ["🌳", "🐆", "🦜", "🎸", "⚽", "🏞️", "🔴", "🔵"],
        continent: "South America",
        subregion: "South America",
        languages: ["Spanish", "Guarani"],
        languageFamily: "Romance",
        population: 7400000,
        climate: "tropical",
        area: 406752,
        religion: "Christianity",
        seaAccess: "landlocked"
    },
    {
        name: "Cuba",
        flag: "🇨🇺",
        emojis: ["🎵", "🚗", "🏖️", "🎺", "🌴", "🦞", "🔴", "🔵"],
        continent: "North America",
        subregion: "Caribbean",
        languages: ["Spanish"],
        languageFamily: "Romance",
        population: 11200000,
        climate: "tropical",
        area: 109884,
        religion: "Christianity",
        seaAccess: "island"
    },
    {
        name: "Dominican Republic",
        flag: "🇩🇴",
        emojis: ["🏖️", "⚾", "🌴", "🎵", "☀️", "💃", "🔴", "🔵"],
        continent: "North America",
        subregion: "Caribbean",
        languages: ["Spanish"],
        languageFamily: "Romance",
        population: 11000000,
        climate: "tropical",
        area: 48671,
        religion: "Christianity",
        seaAccess: "island"
    },
    {
        name: "Jamaica",
        flag: "🇯🇲",
        emojis: ["🏖️", "🎵", "🏃", "🌴", "☀️", "🎶", "🟢", "🟡"],
        continent: "North America",
        subregion: "Caribbean",
        languages: ["English"],
        languageFamily: "Germanic",
        population: 2800000,
        climate: "tropical",
        area: 10991,
        religion: "Christianity",
        seaAccess: "island"
    },
    {
        name: "Mongolia",
        flag: "🇲🇳",
        emojis: ["🏔️", "🐎", "🏕️", "🏜️", "🦅", "🏺", "🔴", "🔵"],
        continent: "Asia",
        subregion: "Eastern Asia",
        languages: ["Mongolian"],
        languageFamily: "Mongolic",
        population: 3400000,
        climate: "cold",
        area: 1564110,
        religion: "Buddhism",
        seaAccess: "landlocked"
    },
    {
        name: "Oman",
        flag: "🇴🇲",
        emojis: ["🏜️", "🕌", "🐪", "🏔️", "⛵", "☀️", "🔴", "🟢"],
        continent: "Asia",
        subregion: "Western Asia",
        languages: ["Arabic"],
        languageFamily: "Semitic",
        population: 4600000,
        climate: "tropical",
        area: 309500,
        religion: "Islam",
        seaAccess: "coastal"
    },
    {
        name: "Albania",
        flag: "🇦🇱",
        emojis: ["🏔️", "🏖️", "🦅", "🏛️", "🏰", "☀️", "🔴", "⚪"],
        continent: "Europe",
        subregion: "Southern Europe",
        languages: ["Albanian"],
        languageFamily: "Indo-European",
        population: 2800000,
        climate: "temperate",
        area: 28748,
        religion: "Islam",
        seaAccess: "coastal"
    },
    {
        name: "Armenia",
        flag: "🇦🇲",
        emojis: ["🏔️", "⛪", "🏛️", "🍷", "⛰️", "🏰", "🔴", "🔵"],
        continent: "Asia",
        subregion: "Western Asia",
        languages: ["Armenian"],
        languageFamily: "Indo-European",
        population: 3000000,
        climate: "temperate",
        area: 29743,
        religion: "Christianity",
        seaAccess: "landlocked"
    },
    {
        name: "Qatar",
        flag: "🇶🇦",
        emojis: ["🏙️", "🏜️", "🕌", "⚽", "🐪", "☀️", "⚪", "🟤"],
        continent: "Asia",
        subregion: "Western Asia",
        languages: ["Arabic"],
        languageFamily: "Semitic",
        population: 2900000,
        climate: "tropical",
        area: 11586,
        religion: "Islam",
        seaAccess: "coastal"
    },
    {
        name: "Sri Lanka",
        flag: "🇱🇰",
        emojis: ["🐘", "🏖️", "🌴", "🏏", "☕", "🦜", "🟠", "🟢"],
        continent: "Asia",
        subregion: "Southern Asia",
        languages: ["Sinhala", "Tamil"],
        languageFamily: "Indo-European",
        population: 22000000,
        climate: "tropical",
        area: 65610,
        religion: "Buddhism",
        seaAccess: "island"
    },
    {
        name: "Laos",
        flag: "🇱🇦",
        emojis: ["🏯", "🐘", "🌴", "🏞️", "🍜", "🏔️", "🔴", "🔵"],
        continent: "Asia",
        subregion: "South-Eastern Asia",
        languages: ["Lao"],
        languageFamily: "Tai-Kadai",
        population: 7500000,
        climate: "tropical",
        area: 236800,
        religion: "Buddhism",
        seaAccess: "landlocked"
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
            // Check if arrays are exactly equal
            const sameLanguages = guess.languages.length === secret.languages.length &&
                guess.languages.every(lang => secret.languages.includes(lang));

            if (sameLanguages) {
                result.color = "green";
            } else if (shareLanguage(guess.languages, secret.languages)) {
                // Yellow only if they share at least one actual language
                result.color = "yellow";
            } else {
                // Red if no shared languages (even if same language family)
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
