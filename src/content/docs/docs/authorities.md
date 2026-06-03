---
title: Authorities & Constraints
description: Defining what agents can do and what they must not do
---

Authorities and constraints are the core of agent governance.

## Authorities

**Authorities** are explicit, named capabilities that define what an agent **can** do.

### Structure

```yaml
authorities:
  - can_read_code
  - can_write_logs:
      limit_per_minute: 1000
  - can_call_external_api:
      allowed_domains: ["api.example.com", "data.example.com"]
```

### Principles

1. **Explicit**: Every capability must be listed
2. **Named**: Use clear, descriptive names
3. **Scoped**: Can be limited to specific resources or contexts
4. **Discoverable**: Auditable and machine-readable
5. **Enforceable**: Orchestrator can validate before action

### Authority Format

```yaml
authorities:
  - can_perform_action
  - can_perform_scoped_action:
      scope: ["resource1", "resource2"]
      limit: value
      constraint: "additional_constraint"
```

### Common Authorities

**Data Access**:

- `can_read_documents`
- `can_read_databases`
- `can_fetch_external_data`

**Data Modification**:

- `can_write_logs`
- `can_modify_configuration`
- `cannot_delete_data` (prohibition)

**Communication**:

- `can_send_notifications`
- `can_post_comments`
- `can_call_external_api`

**Code Operations**:

- `can_write_code`
- `can_run_tests`
- `can_propose_pull_requests`
- `can_merge_pull_requests` (rarely granted)

---

## Constraints

**Constraints** define what an agent **must NOT do** or **must do**.

### Structure

```yaml
constraints:
  # Prohibitions
  - cannot_delete_production_data
  - cannot_modify_security_settings
  
  # Requirements
  - must_cite_sources
  - must_log_all_decisions
  - must_validate_input
```

### Two Categories

#### Prohibitions (MUST NOT)

Prevent dangerous or unauthorized actions:

```yaml
constraints:
  - cannot_delete_files
  - cannot_access_secrets
  - cannot_execute_system_commands
  - cannot_approve_own_requests
```

#### Requirements (MUST)

Enforce necessary behaviors:

```yaml
constraints:
  - must_validate_input
  - must_log_all_changes
  - must_cite_sources
  - must_request_human_review_when:
      severity: high
      risk_level: above_threshold
```

### Enforcement Modes

```yaml
constraints:
  - cannot_delete_data:
      enforcement: hard        # Block entirely
  
  - must_log_changes:
      enforcement: soft        # Warn but allow
  
  - must_cite_sources:
      enforcement: policy      # Escalate to human
```

---

## Real Example: Code Review Agent

```yaml
identity:
  agent_id: code-reviewer-prod
  display_name: Code Review Agent
  agent_class: review

authorities:
  - can_read_pull_requests:
      scope: ["github/pulls"]
  - can_read_code:
      scope: ["src/", "tests/"]
  - can_comment_on_pull_requests
  - can_suggest_code_changes
  - can_access_style_guide
  - can_access_linter_output

constraints:
  # Prohibitions
  - cannot_approve_pull_requests
  - cannot_merge_code
  - cannot_modify_source_files
  - cannot_close_pull_requests
  - cannot_approve_own_code_reviews
  
  # Requirements
  - must_cite_style_guide_violations
  - must_be_constructive
  - must_explain_suggestions
  - must_flag_security_concerns
  - must_check_test_coverage:
      minimum_percent: 80
```

---

## Real Example: Implementation Agent

```yaml
identity:
  agent_id: implementation-agent
  display_name: Implementation Agent
  agent_class: implementation

authorities:
  - can_write_code:
      scope: ["src/", "tests/"]
  - can_run_tests
  - can_run_linters
  - can_create_branches
  - can_create_pull_requests
  - can_read_requirements
  - can_access_design_docs
  - can_fetch_dependencies

constraints:
  # Prohibitions
  - cannot_merge_pull_requests
  - cannot_approve_pull_requests
  - cannot_delete_branches
  - cannot_deploy_to_production
  - cannot_modify_ci_configuration
  
  # Requirements
  - must_write_tests:
      minimum_coverage_percent: 85
  - must_follow_code_style
  - must_include_docstrings
  - must_create_pull_request_for_changes
  - must_request_review_before_merge
```

---

## Scoped Authorities

Limit authorities to specific resources:

```yaml
authorities:
  - can_read_database:
      allowed_tables: ["users", "products"]
      denied_tables: ["payments", "secrets"]
  
  - can_call_api:
      allowed_endpoints: ["/api/search", "/api/read"]
      rate_limit: 1000  # per minute
  
  - can_execute_code:
      allowed_languages: ["python", "javascript"]
      timeout_seconds: 30
```

---

## Extension Namespacing

Custom authorities and constraints use namespaced prefixes:

```yaml
authorities:
  - can_read_code
  - company_custom:can_access_internal_wiki
  - team_ml:can_access_model_registry
```

---

## Validation

```bash
ajv validate \
  --schema https://agent-dossier.org/v/1.0.0/schemas/agent-dossier.schema.json \
  --data agent-dossier.yaml
```

---

## Next Steps

- Explore [Runtime Contract](/docs/runtime-contract/)
- See [Examples](/resources/examples/)
- Review the [Full Specification](https://github.com/jj-ervin/agent-dossier)
