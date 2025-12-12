# Git Contribution Guidelines

## Commit Message Best Practices

### 1. Use Imperative Verb Form

Write commit messages in imperative mood, as if completing the sentence: "If applied, this commit will..."

**Good:**
- `Update NTP server IP address`
- `Add new site-to-site VPN`
- `Fix authentication bug`

**Bad:**
- `Updated NTP server IP address` (past tense)
- `Adding new site-to-site VPN` (present participle)

### 2. General Grammar Rules

- **Avoid unnecessary capitalization** - Use sentence case, not title case
- **Double-check spelling** - Typos make commits look unprofessional
- **Don't end with punctuation** - No periods at the end of commit summaries

**Good:**
- `Change VLAN name for sales`
- `Fix routing table configuration`

**Bad:**
- `Change VLAN Name For Sales` (unnecessary capitalization)
- `Fix routing table configuration.` (unnecessary period)

### 3. Commit Type Prefixes (Conventional Commits)

Use the Conventional Commits specification format: `type(scope): description`

**Format Structure:**
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Commit Types:**

The specification requires two types that correlate with Semantic Versioning:
- **feat** - New feature (correlates with MINOR version bump)
- **fix** - Bug fix (correlates with PATCH version bump)

Additional recommended types (based on Angular convention):
- **docs** - Documentation changes
- **style** - Code style/formatting changes (whitespace, semicolons, etc.)
- **refactor** - Code refactoring (neither fix nor feature)
- **perf** - Performance improvements
- **test** - Adding or updating tests
- **build** - Build system or dependency changes
- **ci** - CI/CD configuration changes
- **chore** - Maintenance tasks (other changes that don't modify src or test files)
- **revert** - Revert a previous commit

**Format Rules:**
- Use lowercase for types (consistency recommended)
- Optional scope in parentheses - a noun describing a section of the codebase (e.g., `feat(auth):`, `fix(router):`)
- Use colon and space after type/scope prefix
- Description must immediately follow the colon and space
- Optional body may be provided after a blank line
- Optional footers may be provided after the body

**Breaking Changes:**
Breaking changes correlate with MAJOR version bump and can be indicated in two ways:
1. Append `!` after the type/scope: `feat!:` or `feat(api)!:`
2. Include `BREAKING CHANGE:` in the footer section

**Examples:**
- `feat: Add new site-to-site VPN`
- `feat(auth): Add OAuth2 support`
- `fix: Resolve authentication timeout issue`
- `fix(router): Handle navigation errors`
- `docs: Update API documentation`
- `chore: Remove build artifacts from git tracking`
- `feat!: Change API response format` (breaking change with `!`)
- `feat(api)!: send an email to the customer when a product is shipped` (breaking change with scope)
- `chore!: drop support for Node 6` (breaking change in chore type)

## Reference

For the complete specification, see [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary).

