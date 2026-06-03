---
title: Security & Auditing
description: Audit trails, compliance, and security considerations
---

The Agent Dossier is designed with security and auditability as core principles.

## Audit Trail Requirements

Every dossier change must be recorded:

```yaml
governance:
  audit_level: full
  change_log_required: true
  retention_policy_days: 365
```

## Change Log Format

Uses the PASS (Principal, Action, Subject, Scope) changelog schema:

```yaml
changelog:
  - timestamp: "2026-06-03T10:00:00Z"
    principal: "security-team"
    action: "revoked"
    subject: "can_delete_data"
    scope: "agent-id: data-processor"
    reason: "Policy update: no production deletions"
    approved_by: "ciso"
```

## Constraint Enforcement

Soft vs. hard constraints:

```yaml
constraints:
  - cannot_delete_data:
      enforcement: hard        # Block entirely
  
  - must_log_changes:
      enforcement: soft        # Warn but allow
```

## Compliance Profiles

- **OpenTelemetry**: Standardized observability
- **NIST AI RMF**: Government compliance
- **Custom**: Organization-specific

## Secrets Management

Dossiers should **never contain**:
- API keys
- Credentials
- Secrets
- Personally identifiable information

Reference secrets through metadata:

```yaml
metadata:
  secret_store: "aws-secrets-manager"
  secret_keys: ["api_key", "auth_token"]
```

## Best Practices

1. **Minimize Authorities**: Grant only necessary capabilities
2. **Explicit Constraints**: Be specific about what's forbidden
3. **Audit Level**: Use `full` for critical agents
4. **Retention**: Keep audit logs per compliance requirements
5. **Review Frequency**: Audit dossiers quarterly
6. **Version Control**: Track all dossier changes in git
7. **Access Control**: Limit who can modify dossiers

---

## Full Documentation

See [SECURITY.md](https://github.com/jj-ervin/agent-dossier/blob/main/SECURITY.md) in the specification repository.

---

## Next Steps

- Review the [Full Specification](https://github.com/jj-ervin/agent-dossier)
- Explore [Examples](/resources/examples/)
- Learn [Contributing](/resources/contributing/)
