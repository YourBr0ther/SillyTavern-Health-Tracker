// Health Tracker Extension
let currentHealth = 100;
const maxHealth = 100;
const STORAGE_KEY = 'health_tracker';

// Initialize the extension
async function init() {
    // Load saved health value
    try {
        const savedData = await extensionStorage.getItem(STORAGE_KEY);
        if (savedData) {
            currentHealth = parseInt(savedData) || maxHealth;
        }
    } catch (error) {
        console.error('Failed to load health value:', error);
    }

    // Register slash commands
    registerSlashCommand('health', checkHealth, [], 'Check current health');
    registerSlashCommand('heal', heal, ['amount'], 'Heal by specified amount');
    registerSlashCommand('damage', damage, ['amount'], 'Take damage by specified amount');
    registerSlashCommand('reset', resetHealth, [], 'Reset health to maximum');
}

// Save health value
async function saveHealth() {
    try {
        await extensionStorage.setItem(STORAGE_KEY, currentHealth.toString());
    } catch (error) {
        console.error('Failed to save health value:', error);
    }
}

// Check current health
function checkHealth() {
    return `Current Health: ${currentHealth}/${maxHealth}`;
}

// Heal function
async function heal(amount) {
    const healAmount = parseInt(amount) || 0;
    if (healAmount <= 0) {
        return 'Please specify a positive amount to heal.';
    }
    
    currentHealth = Math.min(maxHealth, currentHealth + healAmount);
    await saveHealth();
    return `Healed for ${healAmount}. Current Health: ${currentHealth}/${maxHealth}`;
}

// Damage function
async function damage(amount) {
    const damageAmount = parseInt(amount) || 0;
    if (damageAmount <= 0) {
        return 'Please specify a positive amount of damage.';
    }
    
    currentHealth = Math.max(0, currentHealth - damageAmount);
    await saveHealth();
    return `Took ${damageAmount} damage. Current Health: ${currentHealth}/${maxHealth}`;
}

// Reset health to maximum
async function resetHealth() {
    currentHealth = maxHealth;
    await saveHealth();
    return `Health reset to maximum: ${maxHealth}/${maxHealth}`;
}

// Export the initialization function
module.exports = {
    init
}; 