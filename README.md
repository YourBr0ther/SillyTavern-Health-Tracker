# Health Tracker Extension for SillyTavern

A simple health tracking system for roleplay in SillyTavern. Keep track of your character's health during roleplay sessions with easy-to-use commands.

## Features

- Track health with a maximum value of 100
- Health value persists between sessions
- Simple slash commands for health management
- Visual feedback with success/warning/info messages

## Installation

### Manual Installation (Recommended)

1. Create a folder named `health-tracker` in your SillyTavern's extensions directory:
   ```
   YOUR_SILLY_TAVERN_FOLDER/public/scripts/extensions/health-tracker/
   ```

2. Download these two files and place them in the folder you created:
   - `manifest.json`
   - `index.js`

3. Restart SillyTavern
4. Go to the Extensions tab to verify the installation

## Commands

- `/health` - Check current health status
- `/heal [amount]` - Heal by the specified amount (e.g., `/heal 20`)
- `/damage [amount]` - Take damage by the specified amount (e.g., `/damage 15`)
- `/reset` - Reset health back to maximum (100)

## Examples

```
/health
Current Health: 100/100

/damage 20
Took 20 damage. Current Health: 80/100

/heal 15
Healed for 15. Current Health: 95/100

/reset
Health reset to maximum: 100/100
```

## Features

- Health values are automatically saved and persist between sessions
- If there's an error loading the saved health value, it will default to 100
- Visual feedback for all actions (success/warning/info messages)
- Prevents healing above maximum health and damage below 0

## Contributing

Feel free to submit issues and enhancement requests! 