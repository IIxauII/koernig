# Cursor Rules

This directory contains project-specific rules for Cursor AI. These rules provide persistent context and guidelines for code generation, editing, and workflows.

## Rule Files

### Always Applied
- **typescript-strict.mdc** - TypeScript strict mode configuration and best practices (applies to all `.ts` files)
- **project-architecture.mdc** - Project-specific architecture decisions and patterns (applies to all files)

### Applied Intelligently
- **angular.mdc** - Angular 20+ best practices (applies to `.ts`, `.html`, `.scss`, `.css` files)
- **ionic.mdc** - Ionic 8+ mobile development patterns (applies to `apps/mobile/**` files)
- **ngxs.mdc** - NGXS state management patterns (applies to state-related files)
- **nx-monorepo.mdc** - NX monorepo structure and patterns (applies to NX config files)
- **testing.mdc** - Testing best practices (applies to test files)

## Rule Types

According to [Cursor documentation](https://cursor.com/docs/context/rules), rules can be:

- **Always Apply** - Applied to every chat session
- **Apply Intelligently** - When Agent decides it's relevant based on description
- **Apply to Specific Files** - When file matches a specified pattern (using `globs`)
- **Apply Manually** - When @-mentioned

## Adding New Rules

1. Create a new `.mdc` file in this directory
2. Add metadata in the frontmatter:
   ```md
   ---
   description: Brief description of what this rule covers
   globs: ["**/*.ts"]  # Optional: file patterns
   alwaysApply: false   # Optional: whether to always apply
   ---
   ```
3. Write clear, actionable guidelines with examples

## Best Practices

- Keep rules focused and under 500 lines
- Provide concrete examples
- Reference files using `@filename.ts` syntax
- Split large rules into multiple, composable rules

