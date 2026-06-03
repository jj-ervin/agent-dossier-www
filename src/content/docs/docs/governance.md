---
title: Governance Profiles
description: Compliance standards and governance patterns
---

Governance profiles bundle compatible governance rules and compliance patterns.

## Overview

```yaml
governance:
  compliance_profiles:
    - opentelemetry
    - nist-ai-rmf
  
  audit_level: full
  change_log_required: true
  retention_policy_days: 365
```

## Standard Profiles

### OpenTelemetry Profile

Standardized observability and instrumentation.

```yaml
governance:
  compliance_profiles: [opentelemetry]
```

### NIST AI Risk Management Framework

Government compliance and AI governance.

```yaml
governance:
  compliance_profiles: [nist-ai-rmf]
```

### Custom Profiles

Organizations can define their own:

```yaml
governance:
  compliance_profiles: [company_security_standard]
  
metadata:
  custom_profile_version: "1.0.0"
```

## Audit Levels

- `light`: Minimal logging
- `standard`: Standard audit trail
- `full`: Comprehensive logging with retention

```yaml
governance:
  audit_level: full
```

---

## Full Documentation

See the [Governance Directory](https://github.com/jj-ervin/agent-dossier/tree/main/governance) for detailed compliance specifications.

---

## Next Steps

- Learn [Security & Auditing](/docs/security/)
- Explore [Examples](/resources/examples/)
- Review [Contributing](/resources/contributing/)
