# Mise Setup for Node.js 24

This project uses [mise](https://mise.jdx.dev/) to manage Node.js and pnpm versions.

## How It Works

- **`.mise.toml`**: Defines the required tool versions (Node.js 24, pnpm latest)
- **Mise shell hooks**: Automatically activate the correct versions when you enter the project directory
- **No package.json engines**: Version enforcement is handled entirely by mise, not package.json

## Verify Setup

Run the mise check task:
```bash
mise run check
```

This verifies that mise is active and managing all tools correctly.

## Quick Fix

If `node --version` shows version 22 instead of 24:

1. **Reload your shell configuration:**
   ```bash
   source ~/.zshrc
   ```

2. **Navigate to the project directory** (if not already there):
   ```bash
   cd /Users/felix/Documents/projects/koernig
   ```

3. **Verify Node.js version:**
   ```bash
   node --version  # Should show v24.12.0
   ```

## How It Works

- **`.mise.toml`** specifies Node.js 24 and pnpm
- **Mise shell hooks** (installed in `~/.zshrc`) automatically activate the correct versions when you enter the project directory
- The hooks use `chpwd` to detect directory changes and activate mise automatically

## Manual Activation

If automatic activation doesn't work, you can manually activate mise:

```bash
eval "$(mise activate zsh)"
```

Or use mise's environment directly:

```bash
eval "$(mise env)"
```

## Troubleshooting

1. **Check if mise hooks are installed:**
   ```bash
   grep -i mise ~/.zshrc
   ```

2. **Reinstall hooks if needed:**
   ```bash
   mise activate zsh >> ~/.zshrc
   source ~/.zshrc
   ```

3. **Verify mise detects the project:**
   ```bash
   cd /Users/felix/Documents/projects/koernig
   mise env | grep node
   ```

4. **Check installed versions:**
   ```bash
   mise ls
   ```

