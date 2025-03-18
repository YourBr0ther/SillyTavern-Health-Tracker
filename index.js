// Health Tracker Extension
import { getContext, saveMetadata, loadExtensionMetadata } from "../../../../script.js";

const extensionName = 'health-tracker';
let currentHealth = 100;
const maxHealth = 100;

// Extension initialization
jQuery(async () => {
    // Load saved health value
    const metadata = await loadExtensionMetadata(extensionName);
    if (metadata?.health !== undefined) {
        currentHealth = parseInt(metadata.health) || maxHealth;
    }

    // Register slash commands
    registerSlashCommand('health', checkHealth, [], 'Check current health');
    registerSlashCommand('heal', heal, ['amount'], 'Heal by specified amount');
    registerSlashCommand('damage', damage, ['amount'], 'Take damage by specified amount');
    registerSlashCommand('reset', resetHealth, [], 'Reset health to maximum');
});

// Save health value
async function saveHealth() {
    await saveMetadata(extensionName, { health: currentHealth });
}

// Check current health
async function checkHealth(args) {
    return { type: 'info', value: `Current Health: ${currentHealth}/${maxHealth}` };
}

// Heal function
async function heal(args) {
    const healAmount = parseInt(args[0]) || 0;
    if (healAmount <= 0) {
        return { type: 'warning', value: 'Please specify a positive amount to heal.' };
    }
    
    currentHealth = Math.min(maxHealth, currentHealth + healAmount);
    await saveHealth();
    return { type: 'success', value: `Healed for ${healAmount}. Current Health: ${currentHealth}/${maxHealth}` };
}

// Damage function
async function damage(args) {
    const damageAmount = parseInt(args[0]) || 0;
    if (damageAmount <= 0) {
        return { type: 'warning', value: 'Please specify a positive amount of damage.' };
    }
    
    currentHealth = Math.max(0, currentHealth - damageAmount);
    await saveHealth();
    return { type: 'success', value: `Took ${damageAmount} damage. Current Health: ${currentHealth}/${maxHealth}` };
}

// Reset health to maximum
async function resetHealth(args) {
    currentHealth = maxHealth;
    await saveHealth();
    return { type: 'success', value: `Health reset to maximum: ${maxHealth}/${maxHealth}` };
} 