// Random seed words database
const randomSeedWords = {
    dutch: [
        'Amsterdam', 'Blauw', 'Zon', 'Maan', 'Sterren', 'Wind', 'Water', 'Vuur', 'Aarde', 'Lucht',
        'Rood', 'Groen', 'Geel', 'Zand', 'Zee', 'Berg', 'Bos', 'Vogel', 'Dier', 'Plant',
        'Steen', 'Boom', 'Bloem', 'Nacht', 'Dag', 'Zomer', 'Winter', 'Lente', 'Herfst', 'Storm',
        'Sneeuw', 'Regen', 'Ijs', 'Warmte', 'Kou', 'Licht', 'Schaduw', 'Donker', 'Helder', 'Grijs',
        'Purper', 'Oranje', 'Roze', 'Zwart', 'Wit', 'Zijde', 'Metaal', 'Steen', 'Glas', 'Hout'
    ],
    english: [
        'Fire', 'Water', 'Earth', 'Air', 'Sky', 'Star', 'Moon', 'Sun', 'Storm', 'Wind',
        'Mountain', 'Valley', 'River', 'Ocean', 'Desert', 'Forest', 'Jungle', 'Arctic', 'Sunset', 'Dawn',
        'Thunder', 'Lightning', 'Rainbow', 'Tornado', 'Wave', 'Sand', 'Stone', 'Crystal', 'Diamond', 'Gold',
        'Silver', 'Bronze', 'Iron', 'Steel', 'Power', 'Force', 'Energy', 'Speed', 'Flight', 'Jump',
        'Dance', 'Song', 'Music', 'Voice', 'Sound', 'Echo', 'Light', 'Shadow', 'Darkness', 'Silence'
    ],
    fantasy: [
        'Dragon', 'Elven', 'Wizard', 'Knight', 'Sword', 'Magic', 'Spell', 'Curse', 'Rune', 'Mystic',
        'Phantom', 'Ghost', 'Spirit', 'Demon', 'Angel', 'Unicorn', 'Phoenix', 'Griffin', 'Kraken', 'Basilisk',
        'Crown', 'Throne', 'Castle', 'Tower', 'Gate', 'Portal', 'Abyss', 'Void', 'Realm', 'Kingdom',
        'Empire', 'Quest', 'Adventure', 'Legend', 'Prophecy', 'Ancient', 'Eternal', 'Timeless', 'Sacred', 'Cursed'
    ]
};

// Name Generator Database
const nameDatabase = {
    gaming: {
        prefixes: ['Shadow', 'Phoenix', 'Cyber', 'Titan', 'Nexus', 'Venom', 'Blaze', 'Frost', 'Storm', 'Void'],
        suffixes: ['Hunter', 'Slayer', 'Ninja', 'Reaper', 'Master', 'Knight', 'Warrior', 'Assassin', 'Champion', 'Legend'],
        patterns: [
            (input) => `${capitalize(input)}Force`,
            (input) => `${capitalize(input)}Strike`,
            (input) => `${capitalize(input)}Chaos`,
            (input) => `Pro${capitalize(input)}`,
            (input) => `${input.toUpperCase()}_GAMER`,
        ]
    },
    business: {
        prefixes: ['Pro', 'Smart', 'Digital', 'Prime', 'Vertex', 'Apex', 'Fusion', 'Quantum', 'Synergy', 'Dynamic'],
        suffixes: ['Works', 'Solutions', 'Systems', 'Innovations', 'Dynamics', 'Labs', 'Partners', 'Ventures', 'Capital', 'Group'],
        patterns: [
            (input) => `${capitalize(input)}Pro`,
            (input) => `${capitalize(input)}Innovations`,
            (input) => `Smart${capitalize(input)}`,
            (input) => `${input}Ventures`,
            (input) => `${capitalize(input)}Labs`,
        ]
    },
    creative: {
        prefixes: ['Art', 'Pixel', 'Canvas', 'Color', 'Brush', 'Flow', 'Echo', 'Prisma', 'Mosaic', 'Palette'],
        suffixes: ['Studio', 'Design', 'Works', 'Space', 'Hub', 'Zone', 'Lab', 'Garden', 'Atelier', 'Forge'],
        patterns: [
            (input) => `${capitalize(input)}Canvas`,
            (input) => `${capitalize(input)}Art`,
            (input) => `${input}Palette`,
            (input) => `CreativeFlow${capitalize(input)}`,
            (input) => `${capitalize(input)}Mosaic`,
        ]
    },
    tech: {
        prefixes: ['Algo', 'Code', 'Data', 'Logic', 'Byte', 'Pixel', 'Server', 'Cloud', 'Net', 'Cyber'],
        suffixes: ['Hub', 'Lab', 'Stack', 'System', 'Engine', 'Core', 'Link', 'Wire', 'Code', 'Tech'],
        patterns: [
            (input) => `${input}Logic`,
            (input) => `${capitalize(input)}Code`,
            (input) => `${input}Core`,
            (input) => `${input.toUpperCase()}TECH`,
            (input) => `${capitalize(input)}Stack`,
        ]
    },
    fantasy: {
        prefixes: ['Dragon', 'Elven', 'Mystic', 'Ancient', 'Rune', 'Shadow', 'Divine', 'Arcane', 'Eternal', 'Cursed'],
        suffixes: ['Lord', 'Keeper', 'Sage', 'Mage', 'Oath', 'Crown', 'Blade', 'Gate', 'Realm', 'Throne'],
        patterns: [
            (input) => `${capitalize(input)}Keeper`,
            (input) => `${capitalize(input)}Mage`,
            (input) => `${capitalize(input)}Oath`,
            (input) => `Mystic${capitalize(input)}`,
            (input) => `${input}Crown`,
        ]
    },
    social: {
        prefixes: ['Social', 'Connect', 'Share', 'Trend', 'Viral', 'Echo', 'Wave', 'Flow', 'Pulse', 'Spark'],
        suffixes: ['Hub', 'Loop', 'Network', 'Stream', 'Sphere', 'Verse', 'Connect', 'Share', 'Vibes', 'Zone'],
        patterns: [
            (input) => `${capitalize(input)}Hub`,
            (input) => `${capitalize(input)}Connect`,
            (input) => `${input}Vibes`,
            (input) => `SocialFlow${capitalize(input)}`,
            (input) => `${capitalize(input)}Sphere`,
        ]
    },
    music: {
        prefixes: ['Sonic', 'Melody', 'Beat', 'Harmony', 'Rhythm', 'Echo', 'Sound', 'Vibe', 'Groove', 'Noise'],
        suffixes: ['Beats', 'Notes', 'Studio', 'Sound', 'Vibes', 'Jams', 'Tracks', 'Flow', 'Mix', 'Pulse'],
        patterns: [
            (input) => `${capitalize(input)}Beats`,
            (input) => `${capitalize(input)}Notes`,
            (input) => `${input}Groove`,
            (input) => `SonicFlow${capitalize(input)}`,
            (input) => `${capitalize(input)}Jams`,
        ]
    },
    app: {
        prefixes: ['Quick', 'Easy', 'Smart', 'Fast', 'Simple', 'Super', 'Mini', 'Mega', 'Ultra', 'Flex'],
        suffixes: ['App', 'Flow', 'Sync', 'Snap', 'Dash', 'Tap', 'Zip', 'Click', 'Swift', 'Pro'],
        patterns: [
            (input) => `${capitalize(input)}App`,
            (input) => `Quick${capitalize(input)}`,
            (input) => `${input}Flow`,
            (input) => `Super${capitalize(input)}`,
            (input) => `${capitalize(input)}Snap`,
        ]
    },
    funny: {
        prefixes: ['Silly', 'Quirky', 'Wacky', 'Zany', 'Goofy', 'Weird', 'Crazy', 'Bonkers', 'Loopy', 'Nutty'],
        suffixes: ['Pants', 'Face', 'Toes', 'Giggles', 'Chaos', 'Shenanigans', 'Madness', 'Confusion', 'Mayhem', 'Antics'],
        patterns: [
            (input) => `${capitalize(input)}Pants`,
            (input) => `Silly${capitalize(input)}Face`,
            (input) => `${input}Giggles`,
            (input) => `Wacky${capitalize(input)}Toes`,
            (input) => `${capitalize(input)}Shenanigans`,
        ]
    }
};

// State Management
let generatedNames = [];
let favorites = [];
let currentCategory = 'all';
let currentMode = 'input';
let statsCount = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadFavorites();
    updateStats();
});

function setupEventListeners() {
    // Mode Selector
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            switchMode(e.target.dataset.mode);
        });
    });

    // Generate Button (Input Mode)
    document.getElementById('generateBtn').addEventListener('click', generateNames);
    document.getElementById('inputWord').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') generateNames();
    });

    // Generate Button (Random Mode)
    document.getElementById('randomGenerateBtn').addEventListener('click', generateRandomNames);

    // Category Filters
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            filterResults();
        });
    });

    // Advanced Options
    document.getElementById('toggleAdvanced').addEventListener('click', () => {
        document.getElementById('advancedOptions').classList.toggle('hidden');
    });

    // Clear Favorites
    document.getElementById('clearFavBtn').addEventListener('click', () => {
        if (confirm('Weet je zeker dat je alle favorieten wilt verwijderen?')) {
            favorites = [];
            saveFavorites();
            updateFavoritesDisplay();
            updateStats();
        }
    });
}

function switchMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.mode-content').forEach(c => c.classList.remove('active'));
    
    if (mode === 'input') {
        document.getElementById('modeInput').classList.add('active');
        document.getElementById('inputMode').classList.add('active');
        document.getElementById('inputWord').focus();
    } else {
        document.getElementById('modeRandom').classList.add('active');
        document.getElementById('randomMode').classList.add('active');
    }
}

function generateNames() {
    const inputWord = document.getElementById('inputWord').value.trim();
    
    if (!inputWord) {
        alert('Voer alstublieft een woord in!');
        return;
    }

    generatedNames = [];
    const categories = currentCategory === 'all' ? Object.keys(nameDatabase) : [currentCategory];

    categories.forEach(category => {
        const names = generateNamesForCategory(inputWord, category);
        generatedNames.push(...names);
    });

    statsCount += generatedNames.length;
    displayResults();
    updateStats();
}

function generateRandomNames() {
    const count = parseInt(document.getElementById('randomCount').value) || 20;
    generatedNames = [];

    // Verzamel alle mogelijke categoriën
    const categories = currentCategory === 'all' ? Object.keys(nameDatabase) : [currentCategory];

    // Genereer random namen
    for (let i = 0; i < count; i++) {
        // Kies random categorie
        const category = categories[Math.floor(Math.random() * categories.length)];
        
        // Kies random seed woord
        const allSeedWords = [...randomSeedWords.dutch, ...randomSeedWords.english, ...randomSeedWords.fantasy];
        const randomSeed = allSeedWords[Math.floor(Math.random() * allSeedWords.length)];

        // Genereer namen voor deze seed
        const names = generateNamesForCategory(randomSeed, category);
        
        // Voeg willekeurige naam toe
        if (names.length > 0) {
            const randomName = names[Math.floor(Math.random() * names.length)];
            generatedNames.push(randomName);
        }
    }

    // Verwijder duplicaten
    generatedNames = [...new Map(generatedNames.map(item => [item.name, item])).values()];

    statsCount += generatedNames.length;
    displayResults();
    updateStats();
}

function generateNamesForCategory(inputWord, category) {
    const data = nameDatabase[category];
    const names = [];
    const nameLength = document.getElementById('nameLength').value;
    const style = document.getElementById('style').value;
    const tone = document.getElementById('tone').value;

    // Prefix + Input + Suffix
    data.prefixes.forEach(prefix => {
        const name = `${prefix}${capitalize(inputWord)}`;
        names.push({
            name: applyStyle(name, style),
            category: category,
            description: `${prefix} + ${inputWord}`,
            type: 'prefix-suffix'
        });
    });

    data.suffixes.forEach(suffix => {
        const name = `${capitalize(inputWord)}${suffix}`;
        names.push({
            name: applyStyle(name, style),
            category: category,
            description: `${inputWord} + ${suffix}`,
            type: 'prefix-suffix'
        });
    });

    // Custom Patterns
    data.patterns.forEach((pattern, idx) => {
        try {
            const name = pattern(inputWord);
            names.push({
                name: applyStyle(name, style),
                category: category,
                description: `Speciaal patroon #${idx + 1}`,
                type: 'pattern'
            });
        } catch (e) {
            console.log('Pattern error:', e);
        }
    });

    // Filter by length
    let filtered = names.filter(n => {
        if (nameLength === 'short') return n.name.length <= 10;
        if (nameLength === 'medium') return n.name.length > 10 && n.name.length <= 20;
        if (nameLength === 'long') return n.name.length > 20;
        return true;
    });

    // Remove duplicates
    filtered = [...new Map(filtered.map(item => [item.name, item])).values()];

    return filtered;
}

function displayResults() {
    const container = document.getElementById('resultsContainer');
    
    if (generatedNames.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Geen namen gevonden. Probeer een ander woord!</p></div>';
        return;
    }

    container.innerHTML = generatedNames.map((nameObj, idx) => `
        <div class="result-card" data-index="${idx}">
            <div class="result-header">
                <span class="result-category">${getCategoryEmoji(nameObj.category)} ${nameObj.category}</span>
                <button class="btn-like ${isFavorited(nameObj.name) ? 'liked' : ''}" 
                        data-name="${nameObj.name}" 
                        title="Toevoegen aan favorieten">
                    ${isFavorited(nameObj.name) ? '❤️' : '🤍'}
                </button>
            </div>
            <div class="result-name">${nameObj.name}</div>
            <div class="result-description">${nameObj.description}</div>
            <div class="result-actions">
                <button class="btn-copy" onclick="copyToClipboard('${nameObj.name}')">
                    📋 Kopiëren
                </button>
            </div>
        </div>
    `).join('');

    // Add event listeners to like buttons
    document.querySelectorAll('.btn-like').forEach(btn => {
        btn.addEventListener('click', (e) => {
            toggleFavorite(btn.dataset.name);
        });
    });
}

function filterResults() {
    const container = document.getElementById('resultsContainer');
    
    if (generatedNames.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Genereer eerst wat namen!</p></div>';
        return;
    }

    let filtered = generatedNames;
    if (currentCategory !== 'all') {
        filtered = generatedNames.filter(n => n.category === currentCategory);
    }

    container.innerHTML = filtered.map((nameObj, idx) => `
        <div class="result-card" data-index="${idx}">
            <div class="result-header">
                <span class="result-category">${getCategoryEmoji(nameObj.category)} ${nameObj.category}</span>
                <button class="btn-like ${isFavorited(nameObj.name) ? 'liked' : ''}" 
                        data-name="${nameObj.name}" 
                        title="Toevoegen aan favorieten">
                    ${isFavorited(nameObj.name) ? '❤️' : '🤍'}
                </button>
            </div>
            <div class="result-name">${nameObj.name}</div>
            <div class="result-description">${nameObj.description}</div>
            <div class="result-actions">
                <button class="btn-copy" onclick="copyToClipboard('${nameObj.name}')">
                    📋 Kopiëren
                </button>
            </div>
        </div>
    `).join('');

    // Add event listeners to like buttons
    document.querySelectorAll('.btn-like').forEach(btn => {
        btn.addEventListener('click', (e) => {
            toggleFavorite(btn.dataset.name);
        });
    });
}

function toggleFavorite(name) {
    const idx = favorites.indexOf(name);
    if (idx > -1) {
        favorites.splice(idx, 1);
    } else {
        favorites.push(name);
    }
    saveFavorites();
    updateFavoritesDisplay();
    displayResults();
    updateStats();
}

function isFavorited(name) {
    return favorites.includes(name);
}

function updateFavoritesDisplay() {
    const container = document.getElementById('favoritesContainer');
    
    if (favorites.length === 0) {
        container.innerHTML = '<p class="empty-fav">Je favorieten verschijnen hier</p>';
        return;
    }

    container.innerHTML = favorites.map(fav => `
        <div class="favorite-item">
            <span class="favorite-text">${fav}</span>
            <button class="favorite-remove" onclick="removeFavorite('${fav}')" title="Verwijderen">×</button>
        </div>
    `).join('');
}

function removeFavorite(name) {
    favorites = favorites.filter(f => f !== name);
    saveFavorites();
    updateFavoritesDisplay();
    displayResults();
    updateStats();
}

function updateStats() {
    document.getElementById('statsCount').textContent = statsCount;
    document.getElementById('statsLikes').textContent = favorites.length;
}

function saveFavorites() {
    localStorage.setItem('nameForgeFavorites', JSON.stringify(favorites));
}

function loadFavorites() {
    const saved = localStorage.getItem('nameForgeFavorites');
    if (saved) {
        favorites = JSON.parse(saved);
        updateFavoritesDisplay();
        updateStats();
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert(`✅ "${text}" gekopieerd naar klembord!`);
    }).catch(() => {
        alert('❌ Fout bij kopiëren');
    });
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function applyStyle(name, style) {
    switch(style) {
        case 'uppercase':
            return name.toUpperCase();
        case 'lowercase':
            return name.toLowerCase();
        case 'camelcase':
            return name.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
                if (+match === 0) return "";
                return index === 0 ? match.toLowerCase() : match.toUpperCase();
            });
        case 'spaced':
            return name.replace(/([A-Z])/g, ' $1').trim();
        default:
            return name;
    }
}

function getCategoryEmoji(category) {
    const emojis = {
        gaming: '🎮',
        business: '💼',
        creative: '🎨',
        tech: '💻',
        fantasy: '⚔️',
        social: '📱',
        music: '🎵',
        app: '📱',
        funny: '😂'
    };
    return emojis[category] || '✨';
}