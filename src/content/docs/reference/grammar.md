---
title: Grammar (ABNF/EBNF)
description: Formal grammars for agent dossiers and messages
---

## Overview

Agent Dossier uses formal grammars to define message and identifier formats.

## ABNF/EBNF Resources

Detailed grammars are available in the [grammar/ directory](https://github.com/jj-ervin/agent-dossier/tree/main/grammar) of the specification repository:

- `identifiers.abnf` — Agent ID, namespace, and identifier rules
- `messages.abnf` — Message envelope and format
- `envelopes.abnf` — Handoff and communication envelopes

## Key Definitions

### Agent ID

```text
agent-id = ALPHA *( ALPHA / DIGIT / "-" )
```

Examples:
- `code-reviewer-v1` ✓
- `research-agent` ✓
- `123-agent` ✗ (must start with letter)
- `code_reviewer` ✗ (no underscores)

### Version String (Semantic Versioning)

```text
version = major "." minor "." patch
major = 1*DIGIT
minor = 1*DIGIT  
patch = 1*DIGIT
```

Examples:
- `1.0.0` ✓
- `1.2.3` ✓
- `1.2` ✗ (missing patch)

### Namespace

```text
namespace = org-name ":" domain-name
org-name = ALPHA *( ALPHA / DIGIT / "-" )
domain-name = ALPHA *( ALPHA / DIGIT / "-" )
```

Examples:
- `company:security-policy` ✓
- `team-ml:model-registry` ✓

---

## Formal Grammar Files

See the [grammar/ directory](https://github.com/jj-ervin/agent-dossier/tree/main/grammar) for:

- Complete ABNF definitions
- EBNF alternatives
- Example valid/invalid tokens

---

## Validation

Grammar compliance is validated in conformance tests:

```bash
# In the specification repository
npm run validate
```

---

## Next Steps

- Explore [Schema Reference](/reference/schema/)
- Review [Examples](/resources/examples/)
- Check [Full Specification](https://github.com/jj-ervin/agent-dossier)
