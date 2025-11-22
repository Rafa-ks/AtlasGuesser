// Game state
let currentCountry = null;
let guessCount = 0;
let maxGuesses = 8;
let gameActive = false;
let gameStarted = false;
let previousGuesses = [];

// Initialize the game
function initGame() {
    populateCountryList();
    setupEventListeners();
    selectRandomCountry();
}

// Select a random country at the start
function selectRandomCountry() {
    currentCountry = countries[Math.floor(Math.random() * countries.length)];
    console.log('Mystery country:', currentCountry.name); // For testing
}

// Populate datalist with all country names
function populateCountryList() {
    const datalist = document.getElementById('countryList');
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name;
        datalist.appendChild(option);
    });
}

// Setup event listeners
function setupEventListeners() {
    const input = document.getElementById('countryInput');

    // Allow Enter key to submit guess
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            makeGuess();
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

// Make a guess
function makeGuess() {
    const input = document.getElementById('countryInput');
    const guessedCountry = input.value.trim();

    if (!guessedCountry) return;

    // Check if country exists in our list
    const foundCountry = countries.find(c =>
        c.name.toLowerCase() === guessedCountry.toLowerCase()
    );

    if (!foundCountry) {
        // Invalid country - shake the input
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
        return;
    }

    // Check if already guessed
    if (previousGuesses.some(g => g.name === foundCountry.name)) {
        input.value = '';
        return;
    }

    // If this is the first guess, start the game
    if (!gameStarted) {
        startGameUI();
        gameStarted = true;
        gameActive = true;
    }

    // Increment guess count
    guessCount++;
    document.getElementById('guessCount').textContent = guessCount;

    // Add to previous guesses
    previousGuesses.push(foundCountry);
    addToHistory(foundCountry);

    // Reveal emoji hint
    if (guessCount <= maxGuesses) {
        revealEmoji(guessCount - 1);
    }

    // Clear input
    input.value = '';

    // Check if correct
    if (foundCountry.name === currentCountry.name) {
        winGame();
        return;
    }

    // Check if out of guesses
    if (guessCount >= maxGuesses) {
        loseGame();
    }
}

// Start the game UI (show emoji boxes and history)
function startGameUI() {
    document.getElementById('guessCounter').classList.remove('hidden');
    document.getElementById('emojiContainer').classList.remove('hidden');
    document.getElementById('guessingHistory').classList.remove('hidden');
}

// Reveal an emoji hint (reversed order - most obvious last)
function revealEmoji(index) {
    const emojiHints = document.querySelectorAll('.emoji-hint');
    const hintElement = emojiHints[index];

    // Reverse the emoji order: show last emoji first
    const reversedIndex = currentCountry.emojis.length - 1 - index;

    if (hintElement && currentCountry) {
        setTimeout(() => {
            hintElement.classList.add('revealed');
            setTimeout(() => {
                hintElement.textContent = currentCountry.emojis[reversedIndex];
            }, 300);
        }, 100);
    }
}

// Add guess to history
function addToHistory(country) {
    const historyList = document.getElementById('historyList');
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    historyItem.innerHTML = `
        <span class="flag">${country.flag}</span>
        <span class="country-name">${country.name}</span>
    `;
    // Insert at the beginning (most recent first)
    historyList.insertBefore(historyItem, historyList.firstChild);
}

// Win the game
function winGame() {
    gameActive = false;

    // Show all remaining emojis (in reversed order)
    const emojiHints = document.querySelectorAll('.emoji-hint');
    emojiHints.forEach((hint, index) => {
        if (!hint.classList.contains('revealed')) {
            const reversedIndex = currentCountry.emojis.length - 1 - index;
            setTimeout(() => {
                hint.classList.add('revealed');
                setTimeout(() => {
                    hint.textContent = currentCountry.emojis[reversedIndex];
                }, 300);
            }, index * 50);
        }
    });

    // Show success card after a brief delay
    setTimeout(() => {
        document.getElementById('flagLarge').textContent = currentCountry.flag;
        document.getElementById('countryNameLarge').textContent = currentCountry.name;
        document.getElementById('finalGuesses').textContent = guessCount;

        // Set map URL for the country
        const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=-180,-90,180,90&layer=mapnik&marker=0,0`;
        const searchQuery = encodeURIComponent(currentCountry.name);
        document.getElementById('countryMap').src = `https://maps.google.com/maps?q=${searchQuery}&t=&z=4&ie=UTF8&iwloc=&output=embed`;

        document.getElementById('successCard').classList.remove('hidden');

        // Add confetti effect
        createConfetti();
    }, 800);
}

// Lose the game
function loseGame() {
    gameActive = false;

    // Show all remaining emojis (in reversed order)
    const emojiHints = document.querySelectorAll('.emoji-hint');
    emojiHints.forEach((hint, index) => {
        if (!hint.classList.contains('revealed')) {
            const reversedIndex = currentCountry.emojis.length - 1 - index;
            setTimeout(() => {
                hint.classList.add('revealed');
                setTimeout(() => {
                    hint.textContent = currentCountry.emojis[reversedIndex];
                }, 300);
            }, index * 50);
        }
    });

    // Show failure card
    setTimeout(() => {
        document.getElementById('flagLarge').textContent = currentCountry.flag;
        document.getElementById('countryNameLarge').textContent = currentCountry.name;
        document.getElementById('finalGuesses').textContent = guessCount;

        // Set map URL for the country
        const searchQuery = encodeURIComponent(currentCountry.name);
        document.getElementById('countryMap').src = `https://maps.google.com/maps?q=${searchQuery}&t=&z=4&ie=UTF8&iwloc=&output=embed`;

        // Change success text to failure
        document.querySelector('.success-text').innerHTML =
            `Better luck next time! You used all <span>${guessCount}</span> guesses.`;

        document.getElementById('successCard').classList.remove('hidden');
    }, 800);
}

// Create confetti effect (subtle microinteraction)
function createConfetti() {
    const colors = ['#ffffff', '#e0e0e0', '#cccccc', '#999999'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.opacity = '1';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';

            document.body.appendChild(confetti);

            const duration = 2000 + Math.random() * 1000;
            const xMovement = (Math.random() - 0.5) * 200;

            confetti.animate([
                {
                    transform: 'translateY(0) translateX(0) rotate(0deg)',
                    opacity: 1
                },
                {
                    transform: `translateY(${window.innerHeight}px) translateX(${xMovement}px) rotate(${Math.random() * 360}deg)`,
                    opacity: 0
                }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => {
                confetti.remove();
            };
        }, i * 30);
    }
}

// Reset the game
function resetGame() {
    document.getElementById('successCard').classList.add('hidden');

    // Reset success text in case it was changed
    document.querySelector('.success-text').innerHTML =
        `You guessed it in <span id="finalGuesses"></span> guesses!`;

    // Reset game state
    guessCount = 0;
    gameStarted = false;
    gameActive = false;
    previousGuesses = [];

    // Select new random country
    selectRandomCountry();

    // Reset UI
    document.getElementById('guessCount').textContent = '0';
    document.getElementById('countryInput').value = '';
    document.getElementById('historyList').innerHTML = '';

    // Hide game elements
    document.getElementById('guessCounter').classList.add('hidden');
    document.getElementById('emojiContainer').classList.add('hidden');
    document.getElementById('guessingHistory').classList.add('hidden');

    // Reset emoji hints
    const emojiHints = document.querySelectorAll('.emoji-hint');
    emojiHints.forEach(hint => {
        hint.textContent = '?';
        hint.classList.remove('revealed');
    });

    // Focus on input
    document.getElementById('countryInput').focus();
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', initGame);
