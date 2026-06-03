---
title: Handoff Protocol
description: Agent-to-agent coordination and delegation
---

The handoff protocol defines how agents coordinate, delegate work, and transfer responsibility.

## Overview

When an agent needs to transfer work to another agent:

```yaml
handoff:
  supported_protocols:
    - rpc
    - event_streaming
    - callback
  
  delegation_limits:
    max_depth: 3
    timeout_seconds: 300
  
  on_handoff:
    - validate_target_authorities
    - log_transfer
    - preserve_context
```

## Key Concepts

### Supported Protocols

- **RPC**: Synchronous function call
- **Event Streaming**: Asynchronous event-based
- **Callback**: Fire-and-forget with completion notification

### Delegation Depth

Prevent infinite delegation chains:

```yaml
delegation_limits:
  max_depth: 3  # Maximum hops: A → B → C → D
```

### Context Preservation

Include relevant context in handoff:

```yaml
handoff_message:
  source_agent: code-reviewer
  target_agent: implementation-agent
  task: "implement_suggested_changes"
  context:
    pull_request_id: 12345
    review_feedback: [...]
```

---

## Full Documentation

See the [Agent Dossier Specification](https://github.com/jj-ervin/agent-dossier/blob/main/agent-dossier.yaml) for detailed handoff schema.

---

## Next Steps

- Learn [Governance](/docs/governance/)
- Explore [Examples](/resources/examples/)
- Review the [Runtime Contract](/docs/runtime-contract/)
