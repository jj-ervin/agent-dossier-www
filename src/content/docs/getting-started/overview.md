---
title: Specification Overview
description: High-level introduction to the Agent Dossier Specification
---

## What is Agent Dossier?

The **Agent Dossier Specification** is a formal, machine-readable standard for declaring:

1. **Agent Identity** — Who is this agent?
2. **Authorities** — What can it do?
3. **Constraints** — What must it not do?
4. **Governance** — How is it audited and regulated?
5. **Handoff Behavior** — How does it coordinate with other agents?

It is **not**:
- A specific orchestrator implementation
- A specific agent runtime
- Vendor-specific model behavior
- Project-specific policies

## The Problem It Solves

In multi-agent development ecosystems:

- **Ambiguity**: What can each agent actually do?
- **Stalls**: Agent A waits for unclear permission from Agent B
- **Unsafe Delegation**: Agent X accidentally modifies production data
- **Lost Context**: No audit trail of who decided what
- **Incompatibility**: Each orchestrator defines agents differently

## The Solution

An Agent Dossier is a **portable, auditable declaration** that:

- Makes agent behavior explicit *before work begins*
- Works across orchestrators without project-specific embedding
- Enables validation against machine-readable schemas
- Preserves auditable traces of changes and decisions
- Reduces stalls, unsafe delegation, and ambiguous ownership

## Key Concepts

### Identity Block
Declares stable, portable identity:

```yaml
identity:
  agent_id: my-research-agent
  display_name: Research Agent
  agent_class: research
  dossier_version: 1.0.0
  specification_version: 1.0.0
```

### Authorities
Things the agent **can** do:

```yaml
authorities:
  - can_fetch_external_data
  - can_search_knowledge_base
  - can_propose_hypotheses
```

### Constraints
Things the agent **must not** do or **must** do:

```yaml
constraints:
  - must_cite_sources
  - must_flag_uncertainty
  - cannot_modify_data
  - cannot_delete_resources
```

### Governance
How compliance is measured and audited:

```yaml
governance:
  compliance_profile: opentelemetry
  audit_level: full
  change_log_required: true
```

### Handoff Protocol
How agents coordinate and delegate work:

```yaml
handoff:
  supported_protocols:
    - rpc
    - event_streaming
  delegation_limits:
    max_depth: 3
    timeout_seconds: 300
```

## Versioning Strategy

The standard uses **semantic versioning**:

- **Patch (1.0.1)**: Non-breaking fixes (docs, examples, lint)
- **Minor (1.1.0)**: Backward-compatible additions (new optional fields)
- **Major (2.0.0)**: Breaking changes (rare)

Every change is recorded in a **PASS changelog** with timestamps.

## Schema URLs

Schemas are published at canonical, versioned URLs:

```
https://agent-dossier.org/v/1.0.0/schemas/agent-dossier.schema.json
https://agent-dossier.org/v/1.0.0/schemas/runtime-contract.schema.json
https://agent-dossier.org/v/1.0.0/schemas/handoff-envelope.schema.json
```

**Key principle**: Each version is permanent and never overwritten.

## Who Is This For?

- **Agent Developers**: Define what your agent can and cannot do
- **Orchestrators**: Enforce governance rules at runtime
- **Security Teams**: Audit agent capabilities and authority changes
- **Operations**: Track agent configuration and compliance
- **Standards Bodies**: Reference a portable, vendor-neutral specification

## Next Steps

1. Read [Core Concepts](/docs/core-concepts/)
2. Explore [Examples](/resources/examples/)
3. Try the [Quick Start](/getting-started/quick-start/)
4. Review the [Full Specification](https://github.com/jj-ervin/agent-dossier)
