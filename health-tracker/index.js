// Health Tracker Extension
let currentHealth = 100;
const maxHealth = 100;
const STORAGE_KEY = 'health_tracker';

// Register extension
window.extension = {
    name: 'Health Tracker',
    version: '1.0.0',
    init,
    commands: {
        health: checkHealth,
        heal: heal,
        damage: damage,
        reset: resetHealth
    }
};

// Initialize the extension
async function init() {
    // Load saved health value
    try {
        const savedHealth = localStorage.getItem(STORAGE_KEY);
        if (savedHealth) {
            currentHealth = parseInt(savedHealth) || maxHealth;
        }
    } catch (error) {
        console.error('Failed to load health value:', error);
        currentHealth = maxHealth;
    }
}

// Save health value
function saveHealth() {
    try {
        localStorage.setItem(STORAGE_KEY, currentHealth.toString());
    } catch (error) {
        console.error('Failed to save health value:', error);
    }
}

// Check current health
function checkHealth() {
    return { type: 'info', value: `Current Health: ${currentHealth}/${maxHealth}` };
}

// Heal function
function heal(amount = '0') {
    const healAmount = parseInt(amount) || 0;
    if (healAmount <= 0) {
        return { type: 'warning', value: 'Please specify a positive amount to heal.' };
    }
    
    currentHealth = Math.min(maxHealth, currentHealth + healAmount);
    saveHealth();
    return { type: 'success', value: `Healed for ${healAmount}. Current Health: ${currentHealth}/${maxHealth}` };
}

// Damage function
function damage(amount = '0') {
    const damageAmount = parseInt(amount) || 0;
    if (damageAmount <= 0) {
        return { type: 'warning', value: 'Please specify a positive amount of damage.' };
    }
    
    currentHealth = Math.max(0, currentHealth - damageAmount);
    saveHealth();
    return { type: 'success', value: `Took ${damageAmount} damage. Current Health: ${currentHealth}/${maxHealth}` };
}

// Reset health to maximum
function resetHealth() {
    currentHealth = maxHealth;
    saveHealth();
    return { type: 'success', value: `Health reset to maximum: ${maxHealth}/${maxHealth}` };
} 