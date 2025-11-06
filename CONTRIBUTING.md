# Contributing to ZGI Documentation

Thank you for your interest in contributing to ZGI documentation! This guide will help you get started.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Documentation Standards](#documentation-standards)
- [Submitting Changes](#submitting-changes)

## Code of Conduct

Please be respectful and constructive in all interactions.

## How to Contribute

### 1. Fork and Clone

```bash
git clone git@github.com:YOUR_USERNAME/zgi-docs.git
cd zgi-docs
```

### 2. Create a Branch

```bash
git checkout -b docs/your-feature-name
```

### 3. Make Changes

Edit or create MDX files in the `docs/` directory.

### 4. Test Locally

Ensure your changes render correctly.

### 5. Commit

```bash
git add .
git commit -m "docs: describe your changes"
```

### 6. Push and Create PR

```bash
git push origin docs/your-feature-name
```

Then create a Pull Request on GitHub.

## Documentation Standards

### File Structure

```
docs/
├── zh/                    # Chinese documentation
│   └── zgi/
│       └── core/
│           └── agents/
│               ├── overview.mdx
│               └── orchestration.mdx
└── en/                    # English documentation
    └── zgi/
        └── core/
            └── agents/
                └── overview.mdx
```

### Frontmatter

All MDX files must include frontmatter:

```yaml
---
id: unique-id
title: Document Title
description: Brief description
product: zgi
module: core/agents
tags: [tag1, tag2]
version: v1.0
lang: zh
order: 10
updated_at: 2025-01-15
---
```

### Writing Style

- **Clear and Concise**: Use simple language
- **Code Examples**: Include practical examples
- **Structure**: Use headings (h2, h3) for organization
- **Links**: Reference related documents

### Code Blocks

Use fenced code blocks with language specification:

````markdown
```typescript
const example = "code";
```
````

## Submitting Changes

1. Ensure your changes follow the documentation standards
2. Write a clear commit message
3. Create a Pull Request with:
   - Clear title
   - Description of changes
   - Any related issues

## Questions?

Open an issue or discussion on GitHub.

Thank you for contributing! 🎉
