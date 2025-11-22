// Tips Game State
let secretTipsCountry = null;
let currentTipIndex = 0;
let tipsGuessCount = 0;
let tipsGameActive = false;

// Initialize tips game
function initTipsGame() {
    selectSecretTipsCountry();
    populateTipsCountryList();
}

// Populate datalist with all country names
function populateTipsCountryList() {
    const datalist = document.getElementById('tipsCountryList');
    // Use all countries from the main countries array for autocomplete
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name;
        datalist.appendChild(option);
    });
}

// Select a random secret country
function selectSecretTipsCountry() {
    secretTipsCountry = tipsData[Math.floor(Math.random() * tipsData.length)];
    console.log('Secret tips country:', secretTipsCountry.name); // For testing
    tipsGameActive = true;
    currentTipIndex = 0;
    tipsGuessCount = 0;

    // Show first tip
    showNextTip();
}

// Show the next tip
function showNextTip() {
    if (currentTipIndex < secretTipsCountry.tips.length) {
        const tipCard = document.getElementById('tipCard');
        const tipNumber = document.getElementById('tipNumber');
        const tipText = document.getElementById('tipText');
        const tipIndex = currentTipIndex;

        tipNumber.textContent = tipIndex + 1;
        tipText.textContent = secretTipsCountry.tips[tipIndex];

        // Show card with animation
        tipCard.classList.remove('hidden');
        tipCard.classList.add('tip-reveal');

        setTimeout(() => {
            tipCard.classList.remove('tip-reveal');
        }, 500);

        // Add to tips history (after first tip)
        if (tipIndex > 0) {
            addTipToHistory(tipIndex, secretTipsCountry.tips[tipIndex - 1]);
        }

        currentTipIndex++;
    }
}

// Add tip to history list
function addTipToHistory(tipNumber, tipText) {
    const historyContainer = document.getElementById('tipsHistory');
    const historyList = document.getElementById('tipsHistoryList');

    // Show history container
    historyContainer.classList.remove('hidden');

    // Create history item
    const historyItem = document.createElement('div');
    historyItem.className = 'tip-history-item';
    historyItem.innerHTML = `
        <div class="tip-history-number">Tip ${tipNumber}</div>
        <div class="tip-history-text">${tipText}</div>
    `;

    // Insert at the beginning (most recent first)
    historyList.insertBefore(historyItem, historyList.firstChild);

    // Add animation
    setTimeout(() => {
        historyItem.classList.add('tip-history-reveal');
    }, 50);
}

// Make a tips guess
function makeTipsGuess() {
    if (!tipsGameActive) return;

    const input = document.getElementById('tipsInput');
    const guessedCountryName = input.value.trim();

    if (!guessedCountryName) return;

    // Find the guessed country in the main countries array (for validation)
    const guessedCountry = countries.find(c =>
        c.name.toLowerCase() === guessedCountryName.toLowerCase()
    );

    if (!guessedCountry) {
        // Invalid country - shake the input
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
        return;
    }

    tipsGuessCount++;

    // Clear input
    input.value = '';

    // Check if correct
    if (guessedCountry.name === secretTipsCountry.name) {
        winTipsGame();
        return;
    }

    // Wrong guess - show next tip if available
    if (currentTipIndex < secretTipsCountry.tips.length) {
        showNextTip();
    } else {
        // No more tips - game over
        loseTipsGame();
    }
}

// Win the tips game
function winTipsGame() {
    tipsGameActive = false;

    setTimeout(() => {
        // Hide game elements
        document.querySelector('#tipsGame .input-section').classList.add('hidden');
        document.querySelector('.tips-container').classList.add('hidden');

        // Show win page
        document.getElementById('tipsWinFlag').textContent = secretTipsCountry.flag;
        document.getElementById('tipsWinCountry').textContent = secretTipsCountry.name;
        document.getElementById('tipsWinGuessCount').textContent = tipsGuessCount;
        document.getElementById('tipsWin').classList.remove('hidden');
    }, 500);
}

// Lose the tips game
function loseTipsGame() {
    tipsGameActive = false;

    setTimeout(() => {
        // Hide game elements
        document.querySelector('#tipsGame .input-section').classList.add('hidden');
        document.querySelector('.tips-container').classList.add('hidden');

        // Show win page with different message
        document.getElementById('tipsWinFlag').textContent = secretTipsCountry.flag;
        document.getElementById('tipsWinCountry').textContent = secretTipsCountry.name;
        document.getElementById('tipsWinGuessCount').textContent = tipsGuessCount;

        // Update text to show it was the correct answer
        const winText = document.querySelector('#tipsWin .win-text');
        winText.innerHTML = `The answer was <span id="tipsWinCountry">${secretTipsCountry.name}</span>!`;

        document.getElementById('tipsWin').classList.remove('hidden');
    }, 500);
}

// Share tips game function
function shareTipsGame() {
    const url = window.location.href.split('?')[0];
    const t = translations[currentLanguage];

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
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
        alert('Link: ' + url);
    }
}

// Reset tips game
function resetTipsGame() {
    // Hide win page
    document.getElementById('tipsWin').classList.add('hidden');

    // Reset win text in case it was changed
    const winText = document.querySelector('#tipsWin .win-text');
    winText.innerHTML = `You guessed <span id="tipsWinCountry"></span> correctly!`;

    // Show game elements
    document.querySelector('#tipsGame .input-section').classList.remove('hidden');
    document.querySelector('.tips-container').classList.remove('hidden');

    // Clear input
    document.getElementById('tipsInput').value = '';

    // Hide tip card
    document.getElementById('tipCard').classList.add('hidden');

    // Reset game state
    selectSecretTipsCountry();

    // Focus on input
    document.getElementById('tipsInput').focus();
}

// Setup event listener for tips input
document.addEventListener('DOMContentLoaded', () => {
    const tipsInput = document.getElementById('tipsInput');

    if (tipsInput) {
        // Allow Enter key to submit guess
        tipsInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                makeTipsGuess();
            }
        });

        // Auto-capitalize first letter
        tipsInput.addEventListener('input', (e) => {
            const value = e.target.value;
            if (value.length === 1) {
                e.target.value = value.charAt(0).toUpperCase() + value.slice(1);
            }
        });
    }

    // Initialize tips game
    initTipsGame();
});
