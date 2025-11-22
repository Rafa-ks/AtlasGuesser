// Comparison Game State
let secretCountry = null;
let comparisonGuesses = [];
let comparisonGameActive = false;

// Initialize comparison game
function initComparisonGame() {
    selectSecretCountry();
    setupAutocomplete();
}

// Setup custom autocomplete
function setupAutocomplete() {
    const input = document.getElementById('comparisonInput');
    const dropdown = document.getElementById('comparisonDropdown');

    input.addEventListener('input', (e) => {
        const value = e.target.value.trim().toLowerCase();

        if (value.length === 0) {
            dropdown.classList.remove('show');
            return;
        }

        // Filter countries
        const matches = countryData.filter(country =>
            country.name.toLowerCase().startsWith(value)
        ).slice(0, 8);

        if (matches.length === 0) {
            dropdown.classList.remove('show');
            return;
        }

        // Populate dropdown
        dropdown.innerHTML = '';
        matches.forEach(country => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.innerHTML = `<span class="flag">${country.flag}</span><span>${country.name}</span>`;
            item.addEventListener('click', () => {
                input.value = country.name;
                dropdown.classList.remove('show');
                makeComparisonGuess();
            });
            dropdown.appendChild(item);
        });

        dropdown.classList.add('show');
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });

    // Auto-capitalize first letter
    input.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value.length === 1) {
            e.target.value = value.charAt(0).toUpperCase() + value.slice(1);
        }
    });
}

// Select a random secret country
function selectSecretCountry() {
    secretCountry = countryData[Math.floor(Math.random() * countryData.length)];
    console.log('Secret country:', secretCountry.name); // For testing
    comparisonGameActive = true;
}

// Switch between game modes
function switchMode(mode) {
    const emojiGame = document.getElementById('emojiGame');
    const comparisonGame = document.getElementById('comparisonGame');
    const emojiBtn = document.getElementById('emojiModeBtn');
    const comparisonBtn = document.getElementById('comparisonModeBtn');
    const subtitle = document.getElementById('gameSubtitle');
    const t = translations[currentLanguage];

    if (mode === 'emoji') {
        emojiGame.classList.remove('hidden');
        comparisonGame.classList.add('hidden');
        emojiBtn.classList.add('active');
        comparisonBtn.classList.remove('active');
        subtitle.textContent = t.subtitle_emoji;
    } else {
        emojiGame.classList.add('hidden');
        comparisonGame.classList.remove('hidden');
        emojiBtn.classList.remove('active');
        comparisonBtn.classList.add('active');
        subtitle.textContent = t.subtitle_comparison;
    }
}

// Make a comparison guess
function makeComparisonGuess() {
    if (!comparisonGameActive) return;

    const input = document.getElementById('comparisonInput');
    const guessedCountryName = input.value.trim();

    if (!guessedCountryName) return;

    // Find the guessed country
    const guessedCountry = countryData.find(c =>
        c.name.toLowerCase() === guessedCountryName.toLowerCase()
    );

    if (!guessedCountry) {
        // Invalid country - shake the input
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
        return;
    }

    // Check if already guessed
    if (comparisonGuesses.some(g => g.name === guessedCountry.name)) {
        input.value = '';
        return;
    }

    // Add to guesses
    comparisonGuesses.push(guessedCountry);

    // Compare and display
    displayComparisonRow(guessedCountry);

    // Clear input
    input.value = '';

    // Check if correct
    if (guessedCountry.name === secretCountry.name) {
        winComparisonGame();
    }
}

// Display a comparison row
function displayComparisonRow(guessedCountry) {
    const tableBody = document.getElementById('comparisonTableBody');
    const row = document.createElement('tr');

    // Check if this is the winning guess
    const isWin = guessedCountry.name === secretCountry.name;
    if (isWin) {
        row.classList.add('win-row');
    }

    // Country name cell
    const countryCell = document.createElement('td');
    countryCell.className = 'country-cell';
    countryCell.innerHTML = `${guessedCountry.flag} ${guessedCountry.name}`;
    row.appendChild(countryCell);

    // Compare each characteristic
    const characteristics = [
        'continent',
        'languages',
        'population',
        'climate',
        'area',
        'religion',
        'seaAccess'
    ];

    characteristics.forEach(characteristic => {
        const result = compareCharacteristic(guessedCountry, secretCountry, characteristic);
        const cell = document.createElement('td');
        cell.className = result.color;
        cell.textContent = result.value;
        row.appendChild(cell);
    });

    // Insert at the top
    tableBody.insertBefore(row, tableBody.firstChild);

    // Trigger reveal animation for all cells
    setTimeout(() => {
        const cells = row.querySelectorAll('td');
        cells.forEach(cell => {
            cell.classList.add('reveal');
        });
    }, 50);
}

// Win the comparison game
function winComparisonGame() {
    comparisonGameActive = false;

    setTimeout(() => {
        document.getElementById('winFlag').textContent = secretCountry.flag;
        document.getElementById('winCountry').textContent = secretCountry.name;
        document.getElementById('comparisonWin').classList.remove('hidden');
    }, 500);
}

// Reset comparison game
function resetComparisonGame() {
    document.getElementById('comparisonWin').classList.add('hidden');
    document.getElementById('comparisonTableBody').innerHTML = '';
    document.getElementById('comparisonInput').value = '';

    comparisonGuesses = [];
    selectSecretCountry();
}

// Setup event listener for comparison input
document.addEventListener('DOMContentLoaded', () => {
    const comparisonInput = document.getElementById('comparisonInput');

    if (comparisonInput) {
        comparisonInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const dropdown = document.getElementById('comparisonDropdown');

                // If dropdown is visible, auto-select first option
                if (dropdown.classList.contains('show')) {
                    const firstItem = dropdown.querySelector('.autocomplete-item');
                    if (firstItem) {
                        const countryName = firstItem.textContent.trim();
                        comparisonInput.value = countryName;
                    }
                }

                dropdown.classList.remove('show');
                makeComparisonGuess();
            }
        });

        comparisonInput.addEventListener('input', (e) => {
            const value = e.target.value;
            if (value.length === 1) {
                e.target.value = value.charAt(0).toUpperCase() + value.slice(1);
            }
        });
    }

    // Initialize comparison game
    initComparisonGame();
});
