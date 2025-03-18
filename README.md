# Health Tracker Extension for SillyTavern

A simple health tracking system for roleplay in SillyTavern.

## Features

- Track health with a maximum value of 100
- Check current health status
- Heal characters
- Apply damage to characters
- Persistent storage of health values between sessions
- Reset health to maximum value

## Commands

- `/health` - Check current health status
- `/heal [amount]` - Heal by the specified amount
- `/damage [amount]` - Take damage by the specified amount
- `/reset` - Reset health to maximum value (100)

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

## Installation

1. Download this extension
2. Place it in your SillyTavern's `public/scripts/extensions` folder
3. Restart SillyTavern
4. The extension will be automatically loaded

## Notes

- Health values are automatically saved and persist between sessions
- If there's an error loading the saved health value, it will default to 100 