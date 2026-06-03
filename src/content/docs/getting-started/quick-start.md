---
title: Quick Start
description: Get your first Agent Dossier running in 5 minutes
---

This guide walks you through creating and validating your first Agent Dossier.

## Step 1: Create a Basic Dossier

Create a file named `agent-dossier.yaml`:

```yaml
specification:
  name: "Agent Dossier Specification"
  version: 1.0.0

identity:
  agent_id: my-first-agent
  display_name: "My First Agent"
  dossier_version: 1.0.0
  specification_version: 1.0.0
  agent_class: implementation

authorities:
  - can_read_data
  - can_write_to_log

constraints:
  - must_handle_errors_gracefully
  - cannot_delete_data
```

## Step 2: Understand the Three Key Sections

### Identity Block
Declares **who** the agent is:
- `agent_id`: Stable, kebab-case identifier
- `display_name`: Human-readable name
- `agent_class`: One of: authoring, planning, implementation, review, testing, orchestration, research

### Authorities
What the agent **can** do:
- Read data
- Write logs
- Call specific APIs
- Modify resources

### Constraints
What the agent **must not** do or **must** do:
- Cannot delete production data
- Must cite sources
- Must log all decisions
- Must validate input

## Step 3: Validate Your Dossier

Use the online validator at `/validator/` or validate programmatically:

```bash
# Using ajv-cli (requires Node.js)
npx ajv validate \
  --schema https://agent-dossier.org/v/1.0.0/schemas/agent-dossier.schema.json \
  --data agent-dossier.yaml
```

## Step 4: Deploy to Your Orchestrator

Pass your dossier to your orchestrator at startup:

```python
from agent_orchestrator import Agent

agent = Agent(
    dossier_path='./agent-dossier.yaml',
    enforce_constraints=True,
)
agent.run()
```

## Step 5: Explore More

- Learn about [Core Concepts](/docs/core-concepts/)
- See [Real Examples](/resources/examples/)
- Read the [Full Specification](https://github.com/jj-ervin/agent-dossier/blob/main/agent-dossier.yaml)

## Common Patterns

### Research Agent

```yaml
agent_class: research
authorities:
  - can_search_knowledge_base
  - can_fetch_external_data
  - can_generate_reports
constraints:
  - must_cite_sources
  - must_flag_speculative_content
  - cannot_make_business_decisions
```

### Implementation Agent

```yaml
agent_class: implementation
authorities:
  - can_write_code
  - can_test_locally
  - can_propose_pull_requests
constraints:
  - must_follow_style_guide
  - must_write_tests
  - cannot_merge_without_review
```

### Review Agent

```yaml
agent_class: review
authorities:
  - can_read_all_code
  - can_comment_on_pull_requests
  - can_suggest_improvements
constraints:
  - must_be_constructive
  - must_cite_standards
  - cannot_approve_own_work
```

## Next Steps

- Set up versioning for your dossier
- Integrate with your CI/CD pipeline
- Join the [community discussions](https://github.com/jj-ervin/agent-dossier/discussions)
