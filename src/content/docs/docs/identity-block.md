---
title: Identity Block
description: Declaring agent identity, class, and versioning
---

The identity block is the required foundation of every Agent Dossier. It provides stable, portable identification.

## Schema

```yaml
identity:
  agent_id: string                    # REQUIRED: stable kebab-case identifier
  display_name: string                # REQUIRED: human-readable name
  dossier_version: semver             # REQUIRED: version of this dossier
  specification_version: semver       # REQUIRED: version of this specification (1.0.0)
  agent_class: enum                   # REQUIRED: one of 7 classes
  description: string                 # OPTIONAL: human-readable description
  contact: object                     # OPTIONAL: who maintains this agent
  metadata: object                    # OPTIONAL: extension metadata
```

## Required Fields

### `agent_id`

Stable, kebab-case identifier for the agent.

**Rules**:
- Lowercase letters, numbers, hyphens only
- Must start with a letter
- Must be stable across dossier versions
- Example: `code-reviewer-prod`, `research-agent-v2`

```yaml
agent_id: my-research-agent
```

### `display_name`

Human-readable name.

```yaml
display_name: "Research Agent - Production"
```

### `agent_class`

One of seven enumerated classes:

- `authoring` — Content creation (docs, articles, proposals)
- `planning` — Strategy and orchestration
- `implementation` — Code and artifact production
- `review` — Quality assurance and feedback
- `testing` — Validation and metrics
- `orchestration` — Multi-agent coordination
- `research` — Exploration and discovery

```yaml
agent_class: research
```

### `dossier_version`

Version of this specific agent's dossier using semantic versioning.

- Patch (1.0.1): Non-breaking fixes
- Minor (1.1.0): New optional fields
- Major (2.0.0): Breaking changes to authorities or constraints

```yaml
dossier_version: 1.2.0
```

### `specification_version`

Version of the Agent Dossier Specification that this dossier conforms to.

Currently: `1.0.0`

```yaml
specification_version: 1.0.0
```

## Optional Fields

### `description`

Extended description of the agent's purpose:

```yaml
description: |
  Specialized research agent for literature review and hypothesis generation.
  Focuses on peer-reviewed sources and multi-disciplinary research.
```

### `contact`

Metadata about who maintains or operates this agent:

```yaml
contact:
  name: "Research Team"
  email: "research@example.com"
  repository: "https://github.com/example/research-agents"
```

### `metadata`

Extension point for additional metadata (must be namespaced):

```yaml
metadata:
  organization_custom_field: "value"
  external_id: "12345"
  team_assigned: "research-ops"
```

---

## Full Example

```yaml
specification:
  name: Agent Dossier Specification
  version: 1.0.0

identity:
  agent_id: literature-reviewer-prod
  display_name: Literature Review Agent
  dossier_version: 2.1.0
  specification_version: 1.0.0
  agent_class: research
  
  description: |
    Specialized research agent for academic literature review and
    hypothesis generation. Focuses on peer-reviewed sources across
    multiple disciplines with bias detection.
  
  contact:
    name: "AI Research Lab"
    email: "lab@example.com"
    repository: "https://github.com/example/research-agents"
  
  metadata:
    lab_code: "RESEARCH-001"
    model_version: "claude-3-opus"
    deployment: "production"
```

---

## Validation

All identity blocks must validate against the Agent Dossier schema:

```bash
ajv validate \
  --schema https://agent-dossier.org/v/1.0.0/schemas/agent-dossier.schema.json \
  --data agent-dossier.yaml
```

---

## Next Steps

- Learn about [Authorities](/docs/authorities/)
- Explore [Examples](/resources/examples/)
- Review the [Full Specification](https://github.com/jj-ervin/agent-dossier)
