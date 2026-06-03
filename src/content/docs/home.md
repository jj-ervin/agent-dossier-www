---
title: Agent Dossier Specification
description: Deterministic, auditable governance for multi-agent development
---

## Welcome to Agent Dossier

**Agent Dossier Specification** is a formal standard for declaring agent identity, agreements, authorities, constraints, and governance rules in multi-agent development ecosystems.

The standard makes agent behavior explicit before work begins, provides a common handshake across orchestrators, and preserves auditable traces of changes and decisions.

### Why Agent Dossier?

- **Explicit Governance**: Make agent capabilities, authorities, and constraints clear and machine-readable
- **Portable**: Works across orchestrators and projects without embedding project-specific behavior
- **Auditable**: Preserve traces of decisions, handoffs, and governance changes
- **Deterministic**: Reproducible, stable declarations suitable for validation and automation
- **Interoperable**: Standard schemas and formats enable seamless agent coordination

### Quick Start

1. **Read** the [Specification Overview](/getting-started/overview/)
2. **Learn** [Core Concepts](/docs/core-concepts/)
3. **Explore** [Examples](/resources/examples/)
4. **Validate** your dossier against the [schemas](/reference/schema/)
5. **Integrate** into your orchestrator

### Key Resources

- **[Specification](https://github.com/jj-ervin/agent-dossier/blob/main/agent-dossier.yaml)** — Full normative definition
- **[JSON Schemas](/reference/schema/)** — Validation schemas for all versions
- **[Governance Profiles](/docs/governance/)** — Compliance patterns and standards alignment
- **[Contributing](/resources/contributing/)** — Help shape the future of the standard

### Schema URLs

Schemas are served at versioned, permanent URLs:

```
https://agent-dossier.org/v/1.0.0/schemas/agent-dossier.schema.json
https://agent-dossier.org/v/1.0.0/schemas/agent-dossier-instance.schema.json
https://agent-dossier.org/v/1.0.0/schemas/runtime-contract.schema.json
https://agent-dossier.org/v/1.0.0/schemas/handoff-envelope.schema.json
https://agent-dossier.org/v/1.0.0/schemas/pass-changelog-entry.schema.json
```

Each version has its own permanent path — **schemas are never overwritten**.

### Current Version

Version: **1.0.0** (Stable)  
Status: Active  
License: Apache 2.0

---

## The Agent Dossier in 30 Seconds

An Agent Dossier declares:

```yaml
identity:
  agent_id: my-research-agent
  display_name: Research Agent
  agent_class: research
  dossier_version: 1.0.0
  specification_version: 1.0.0

authorities:
  - can_fetch_external_data
  - can_search_knowledge_base
  - can_propose_hypotheses

constraints:
  - must_cite_sources
  - must_flag_uncertainty
  - cannot_modify_data
  - cannot_initiate_external_calls

governance:
  compliance_profile: opentelemetry
  audit_level: full
```

This allows orchestrators to understand what an agent can do, what it must not do, and how to audit its behavior—**before work begins**.
