---
title: Core Concepts
description: Fundamental building blocks of the Agent Dossier Specification
---

## The Five Pillars

Every Agent Dossier is built on these five core concepts:

### 1. Identity
**Who is this agent?**

The identity block provides stable, portable identification:

```yaml
identity:
  agent_id: code-reviewer-v1
  display_name: Code Review Agent
  agent_class: review
  dossier_version: 1.0.0
  specification_version: 1.0.0
```

**Key fields**:
- `agent_id`: Lowercase, kebab-case, stable across versions
- `display_name`: Human-readable name
- `agent_class`: One of 7 classes (authoring, planning, implementation, review, testing, orchestration, research)
- Versions track changes over time

### 2. Authorities
**What can the agent do?**

Authorities are explicit, named capabilities:

```yaml
authorities:
  - can_read_pull_requests
  - can_comment_on_pull_requests
  - can_suggest_code_changes
  - can_access_company_wiki
```

**Principles**:
- Named, declarative (not based on roles)
- Auditable: every authority must be listed
- Enforceable: orchestrator can check before each action
- Extensible: new authorities can be added via extensions

### 3. Constraints
**What must NOT happen? What MUST happen?**

Constraints define non-negotiable boundaries:

```yaml
constraints:
  # Prohibitions (MUST NOT)
  - cannot_delete_code
  - cannot_merge_without_human_review
  - cannot_modify_ci_configuration
  
  # Requirements (MUST)
  - must_cite_policy_violations
  - must_log_all_suggestions
  - must_handle_errors_gracefully
```

**Two types**:
- **Prohibitions**: Enforce what an agent cannot do
- **Requirements**: Enforce what an agent must do

### 4. Governance
**How is compliance measured and audited?**

Governance metadata enables:
- Policy enforcement
- Audit trails
- Compliance validation
- Standards alignment

```yaml
governance:
  compliance_profiles:
    - opentelemetry
    - nist-ai-rmf
  audit_level: full
  change_log_required: true
  retention_policy_days: 365
```

### 5. Handoff Protocol
**How do agents coordinate and delegate?**

When an agent needs to transfer work:

```yaml
handoff:
  supported_protocols:
    - rpc
    - event_streaming
  delegation_limits:
    max_delegation_depth: 3
    timeout_seconds: 300
  on_handoff_required:
    - validate_target_authorities
    - log_transfer_reason
    - await_completion_callback
```

---

## Agent Classes

The specification defines 7 agent classes:

| Class | Purpose | Typical Authorities | Typical Constraints |
|-------|---------|-------------------|-------------------|
| **authoring** | Content creation | write_documents, propose_ideas | must_follow_style, cannot_publish_directly |
| **planning** | Strategy, orchestration | can_analyze_requirements, schedule_work | cannot_execute_directly |
| **implementation** | Code/artifact production | can_write_code, can_run_tests | must_write_tests, cannot_merge |
| **review** | Quality assurance, feedback | can_read_code, can_comment | cannot_approve_own_work |
| **testing** | Validation, quality metrics | can_run_tests, can_measure_performance | must_log_results |
| **orchestration** | Multi-agent coordination | can_delegate, can_monitor | cannot_override_constraints |
| **research** | Exploration, discovery | can_search_databases, can_propose_hypotheses | must_cite_sources |

---

## Authority Scoping

Authorities can be scoped to specific resources or contexts:

```yaml
authorities:
  - can_read_code:
      scope: ["src/", "tests/"]
  - can_comment_on_pull_requests:
      scope: ["pull_requests"]
  - can_access_external_apis:
      scope: ["read_only", "rate_limit_per_minute: 100"]
```

---

## Constraint Enforcement

Constraints have different enforcement models:

```yaml
constraints:
  - cannot_delete_code:
      enforcement: hard  # Block this action entirely
      
  - must_log_all_changes:
      enforcement: soft  # Log a warning but allow
      
  - must_cite_sources:
      enforcement: policy  # Escalate to human if violated
```

---

## Governance Profiles

Profiles bundle compatible governance rules:

- **OpenTelemetry Profile**: Standardized observability
- **NIST AI Risk Management Framework**: Government compliance
- **Custom Profile**: Organization-specific standards

```yaml
governance:
  compliance_profiles: [opentelemetry, nist-ai-rmf]
```

---

## Versioning Within Dossiers

Dossiers themselves are versioned:

```yaml
identity:
  dossier_version: 1.2.0       # Version of this agent's dossier
  specification_version: 1.0.0 # Version of the standard used
```

When an agent's authorities or constraints change, increment `dossier_version`.

---

## Next Steps

- Learn about [Identity Blocks](/docs/identity-block/)
- Explore [Authorities & Constraints](/docs/authorities/)
- Understand [Handoff Behavior](/docs/handoff/)
- See [Real Examples](/resources/examples/)
