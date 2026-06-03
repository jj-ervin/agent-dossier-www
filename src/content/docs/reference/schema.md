---
title: Schema Reference
description: JSON Schema definitions for validation
---

## Schema URLs

All schemas are served at versioned, permanent URLs:

### Agent Dossier Schema

Full dossier definition with all optional fields:

```
https://agent-dossier.org/v/1.0.0/schemas/agent-dossier.schema.json
```

### Agent Dossier Instance Schema

Concrete instance (already instantiated with specific values):

```
https://agent-dossier.org/v/1.0.0/schemas/agent-dossier-instance.schema.json
```

### Runtime Contract Schema

Minimal, enforceable subset for runtime:

```
https://agent-dossier.org/v/1.0.0/schemas/runtime-contract.schema.json
```

### Handoff Envelope Schema

Message format for agent-to-agent handoffs:

```
https://agent-dossier.org/v/1.0.0/schemas/handoff-envelope.schema.json
```

### PASS Changelog Entry Schema

Format for changelog entries:

```
https://agent-dossier.org/v/1.0.0/schemas/pass-changelog-entry.schema.json
```

---

## Validation Examples

### Using JSON Schema Validator (ajv)

```bash
# Validate a full dossier
npx ajv validate \
  --schema https://agent-dossier.org/v/1.0.0/schemas/agent-dossier.schema.json \
  --data agent-dossier.yaml

# Validate a runtime contract
npx ajv validate \
  --schema https://agent-dossier.org/v/1.0.0/schemas/runtime-contract.schema.json \
  --data runtime-contract.yaml
```

### Using Python

```python
import json
import jsonschema
from urllib.request import urlopen

schema_url = "https://agent-dossier.org/v/1.0.0/schemas/agent-dossier.schema.json"
schema = json.loads(urlopen(schema_url).read())

dossier = {
    "identity": {
        "agent_id": "my-agent",
        "display_name": "My Agent",
        "agent_class": "implementation",
        "dossier_version": "1.0.0",
        "specification_version": "1.0.0",
    },
    "authorities": ["can_read_code"],
    "constraints": ["cannot_delete_data"],
}

jsonschema.validate(instance=dossier, schema=schema)
```

---

## Schema Guarantees

- **Versioned**: Each version has permanent URL
- **Never Overwritten**: `/v/1.0.0/` always stays the same
- **Immutable**: Published schemas don't change
- **Latest**: Check `/v/latest/` for newest version (if supported)

---

## Exploring Schemas

To view schema details:

1. Visit the URL directly in browser
2. Use `curl`:
   ```bash
   curl https://agent-dossier.org/v/1.0.0/schemas/agent-dossier.schema.json
   ```
3. Download:
   ```bash
   wget https://agent-dossier.org/v/1.0.0/schemas/agent-dossier.schema.json
   ```

---

## Extending Schemas

Custom extensions use namespaces:

```yaml
authorities:
  - can_read_code
  - organization_custom:can_access_internal_wiki
```

---

## Next Steps

- Try the [Quick Start](/getting-started/quick-start/)
- Explore [Examples](/resources/examples/)
- Learn [Core Concepts](/docs/core-concepts/)
