---
title: Examples
description: Real-world Agent Dossier examples and patterns
---

## Agent Examples

### Research Agent

```yaml
specification:
  name: Agent Dossier Specification
  version: 1.0.0

identity:
  agent_id: literature-researcher
  display_name: Literature Research Agent
  dossier_version: 1.0.0
  specification_version: 1.0.0
  agent_class: research

authorities:
  - can_search_academic_databases
  - can_fetch_published_papers
  - can_propose_hypotheses
  - can_generate_summaries

constraints:
  - must_cite_sources
  - must_flag_speculative_content
  - must_verify_peer_review_status
  - cannot_make_business_decisions
```

### Code Review Agent

```yaml
identity:
  agent_id: code-reviewer-prod
  display_name: Code Review Agent
  dossier_version: 2.0.0
  specification_version: 1.0.0
  agent_class: review

authorities:
  - can_read_pull_requests
  - can_read_code
  - can_comment_on_pull_requests
  - can_suggest_changes

constraints:
  - cannot_approve_pull_requests
  - cannot_merge_code
  - cannot_approve_own_reviews
  - must_cite_style_violations
  - must_check_test_coverage:
      minimum_percent: 80
```

### Implementation Agent

```yaml
identity:
  agent_id: implementation-eng
  display_name: Implementation Agent
  dossier_version: 1.5.0
  specification_version: 1.0.0
  agent_class: implementation

authorities:
  - can_write_code
  - can_run_tests
  - can_create_pull_requests
  - can_run_linters

constraints:
  - cannot_merge_pull_requests
  - cannot_deploy_code
  - must_write_tests:
      minimum_coverage: 85
  - must_follow_code_style
```

---

## Conformance Testing

Valid vs. invalid examples:

- **Valid Examples**: [valid/](https://github.com/jj-ervin/agent-dossier/tree/main/examples/valid)
- **Invalid Examples**: [invalid/](https://github.com/jj-ervin/agent-dossier/tree/main/examples/invalid)

---

## Interactive Validator

Validate your dossier: [/validator/](/validator/)

---

## Next Steps

- Try the [Quick Start](/getting-started/quick-start/)
- Explore [Adopters](/resources/adopters/)
- Review [Contributing](/resources/contributing/)
