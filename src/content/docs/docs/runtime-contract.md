---
title: Runtime Contract
description: Minimal enforceable subset for agent orchestrators
---

The runtime contract is the minimal, enforceable subset of the Agent Dossier used at runtime by orchestrators.

## Overview

While the full Agent Dossier is comprehensive, orchestrators use the **runtime contract** to enforce governance at runtime.

```yaml
runtime_contract:
  identity:
    agent_id: string
    agent_class: string
  authorities: [string]
  constraints: [string]
  handoff:
    delegation_limits:
      max_depth: number
```

## Difference from Full Dossier

| Aspect | Full Dossier | Runtime Contract |
|--------|--------------|------------------|
| **Scope** | Complete governance | Enforceable rules only |
| **Usage** | Documentation, compliance | Real-time enforcement |
| **Strictness** | Detailed metadata | Core constraints |
| **Size** | Can be large | Minimal |

## Example

Full dossier:
```yaml
identity:
  agent_id: code-reviewer
  display_name: Code Review Agent
  dossier_version: 1.2.0
  specification_version: 1.0.0
  agent_class: review
  description: "Specialized code review agent..."
  contact: {...}

authorities:
  - can_read_code
  - can_comment

constraints:
  - cannot_approve_own_work
```

Runtime contract (extracted subset):
```yaml
agent_id: code-reviewer
agent_class: review
authorities:
  - can_read_code
  - can_comment
constraints:
  - cannot_approve_own_work
delegation_limits:
  max_depth: 2
```

## Validation

```bash
ajv validate \
  --schema https://agent-dossier.org/v/1.0.0/schemas/runtime-contract.schema.json \
  --data runtime-contract.yaml
```

---

## Full Documentation

See [runtime-contract-schema.yaml](https://github.com/jj-ervin/agent-dossier/blob/main/runtime-contract-schema.yaml) for the complete schema.

---

## Next Steps

- Learn [Security & Auditing](/docs/security/)
- Explore [Examples](/resources/examples/)
- Review the [Full Specification](https://github.com/jj-ervin/agent-dossier)
