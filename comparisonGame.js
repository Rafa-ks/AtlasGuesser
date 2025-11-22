// Comparison Game State
let secretCountry = null;
let comparisonGuesses = [];
let comparisonGameActive = false;

// Initialize comparison game
function initComparisonGame() {
    selectSecretCountry();
    populateComparisonCountryList();
}

// Populate datalist with all country names
function populateComparisonCountryList() {
    const datalist = document.getElementById('comparisonCountryList');
    countryData.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name;
        datalist.appendChild(option);
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
    const tipsGame = document.getElementById('tipsGame');
    const emojiBtn = document.getElementById('emojiModeBtn');
    const comparisonBtn = document.getElementById('comparisonModeBtn');
    const tipsBtn = document.getElementById('tipsModeBtn');
    const subtitle = document.getElementById('gameSubtitle');
    const t = translations[currentLanguage];

    // Hide all games
    emojiGame.classList.add('hidden');
    comparisonGame.classList.add('hidden');
    tipsGame.classList.add('hidden');

    // Remove active from all buttons
    emojiBtn.classList.remove('active');
    comparisonBtn.classList.remove('active');
    tipsBtn.classList.remove('active');

    // Show selected game
    if (mode === 'emoji') {
        emojiGame.classList.remove('hidden');
        emojiBtn.classList.add('active');
        subtitle.textContent = t.subtitle_emoji;
    } else if (mode === 'tips') {
        tipsGame.classList.remove('hidden');
        tipsBtn.classList.add('active');
        subtitle.textContent = t.subtitle_tips;
    } else {
        comparisonGame.classList.remove('hidden');
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
        // Translate the value if translateValue function exists
        cell.textContent = typeof translateValue === 'function' ? translateValue(result.value) : result.value;
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
        // Hide game elements
        document.querySelector('.input-section').classList.add('hidden');
        document.querySelector('.comparison-table-container').classList.add('hidden');

        // Show win page
        document.getElementById('winFlag').textContent = secretCountry.flag;
        document.getElementById('winCountry').textContent = secretCountry.name;
        document.getElementById('winGuessCount').textContent = comparisonGuesses.length;
        document.getElementById('comparisonWin').classList.remove('hidden');
    }, 500);
}

// Share game function
function shareGame() {
    const url = window.location.href.split('?')[0]; // Get base URL without query params
    const t = translations[currentLanguage];

    // Try to copy to clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            // Show success feedback
            const button = event.target.closest('.share-button');
            const originalText = button.innerHTML;
            button.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> ${t.copied}`;
            button.style.background = 'rgba(34, 197, 94, 0.2)';
            button.style.borderColor = '#22c55e';

            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = '';
                button.style.borderColor = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
            alert('Link: ' + url);
        });
    } else {
        // Fallback for older browsers
        alert('Link: ' + url);
    }
}

// Reset comparison game
function resetComparisonGame() {
    // Hide win page
    document.getElementById('comparisonWin').classList.add('hidden');

    // Show game elements
    document.querySelector('.input-section').classList.remove('hidden');
    document.querySelector('.comparison-table-container').classList.remove('hidden');

    // Clear table and input
    document.getElementById('comparisonTableBody').innerHTML = '';
    document.getElementById('comparisonInput').value = '';

    // Reset game state
    comparisonGuesses = [];
    selectSecretCountry();

    // Focus on input
    document.getElementById('comparisonInput').focus();
}

// Setup event listener for comparison input
document.addEventListener('DOMContentLoaded', () => {
    const comparisonInput = document.getElementById('comparisonInput');

    if (comparisonInput) {
        // Allow Enter key to submit guess
        comparisonInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                makeComparisonGuess();
            }
        });

        // Auto-capitalize first letter
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
