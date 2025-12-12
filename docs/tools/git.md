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

### 3. Conventional Commits Specification

Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) specification for commit messages.

**Format Structure:**
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Commit Types:**

The specification requires two types that correlate with Semantic Versioning:
- **feat** - A commit of type `feat` introduces a new feature to the codebase (correlates with MINOR in Semantic Versioning)
- **fix** - A commit of type `fix` patches a bug in your codebase (correlates with PATCH in Semantic Versioning)

Additional types are allowed but not mandated by the specification. The Angular convention recommends:
- **build** - Build system or dependency changes
- **chore** - Maintenance tasks
- **ci** - CI/CD configuration changes
- **docs** - Documentation changes
- **style** - Code style/formatting changes
- **refactor** - Code refactoring
- **perf** - Performance improvements
- **test** - Adding or updating tests

Additional types have no implicit effect in Semantic Versioning (unless they include a BREAKING CHANGE).

**Format Rules:**
1. Commits MUST be prefixed with a type, followed by OPTIONAL scope, OPTIONAL `!`, and REQUIRED colon and space
2. A scope MAY be provided after a type. A scope MUST consist of a noun describing a section of the codebase surrounded by parentheses, e.g., `feat(parser):`
3. A description MUST immediately follow the colon and space after the type/scope prefix
4. A longer commit body MAY be provided after the short description, beginning one blank line after the description
5. One or more footers MAY be provided one blank line after the body
6. The units of information that make up Conventional Commits MUST NOT be treated as case sensitive by implementors, with the exception of BREAKING CHANGE which MUST be uppercase

**Note on Casing:** Any casing may be used for types and descriptions, but it's best to be consistent. The specification examples use lowercase for descriptions.

**Breaking Changes:**

A BREAKING CHANGE correlates with MAJOR in Semantic Versioning and can be part of commits of any type. Breaking changes MUST be indicated in one of two ways:

1. **In the type/scope prefix:** Append `!` immediately before the `:`. If `!` is used, `BREAKING CHANGE:` MAY be omitted from the footer section
2. **In the footer:** Include `BREAKING CHANGE:` followed by a colon, space, and description

**Examples:**

From the Conventional Commits specification:

- `feat: allow provided config object to extend other configs`
- `feat!: send an email to the customer when a product is shipped`
- `feat(api)!: send an email to the customer when a product is shipped`
- `chore!: drop support for Node 6`
- `docs: correct spelling of CHANGELOG`
- `feat(lang): add Polish language`
- `fix: prevent racing of requests`

Example with BREAKING CHANGE footer:
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

Example with both `!` and BREAKING CHANGE footer:
```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

## Reference

For the complete specification, see [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary).

