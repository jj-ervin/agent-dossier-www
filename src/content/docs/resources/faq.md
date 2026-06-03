---
title: FAQ
description: Frequently asked questions about Agent Dossier
---

## General Questions

### What is Agent Dossier?

Agent Dossier is a formal specification for declaring agent identity, authorities, constraints, and governance rules. It's designed to make agent behavior explicit, portable, and auditable.

### Is it required to use Agent Dossier?

No, it's optional but recommended. Many projects find value in explicit governance, even if not using a formal orchestrator.

### Who maintains it?

Agent Dossier is maintained by [@jj-ervin](https://github.com/jj-ervin) and the open-source community.

### Can I use it for my project?

Yes! It's licensed under Apache 2.0, free to use for any purpose.

---

## Technical Questions

### What's the difference between a dossier and a runtime contract?

- **Dossier**: Complete governance declaration (identity, authorities, constraints, governance, metadata)
- **Runtime Contract**: Minimal, enforceable subset used at runtime

### Can I add custom fields?

Yes, use namespace prefixes:

```yaml
metadata:
  my_organization:custom_field: "value"
```

### How do I validate a dossier?

Use the online validator or the JSON Schema:

```bash
ajv validate \
  --schema https://agent-dossier.org/v/1.0.0/schemas/agent-dossier.schema.json \
  --data agent-dossier.yaml
```

### What agent classes should I use?

Choose based on the agent's primary role:

- `authoring` — Creates content
- `planning` — Strategizes and schedules
- `implementation` — Builds artifacts
- `review` — Provides feedback
- `testing` — Validates
- `orchestration` — Coordinates other agents
- `research` — Explores and discovers

### Can agents have multiple classes?

Currently, each dossier declares one primary class. Future versions may support multiple roles.

---

## Governance Questions

### How strict should constraints be?

Balance safety with usability. Use `hard` enforcement for dangerous actions, `soft` for best practices.

### How often should I audit dossiers?

At least quarterly. More frequently if agents have high-risk authorities.

### What should go in the changelog?

Every change to authorities, constraints, or classifications. Use the PASS format.

---

## Integration Questions

### How do I integrate with my orchestrator?

1. Write your dossier
2. Validate against schema
3. Load at agent startup
4. Enforce constraints at runtime

See [Contributing](/resources/contributing/) for integration guides.

### Does my framework need to support it?

No, but it helps. Orchestrators can optionally enforce governance based on dossiers.

### Can I use it without an orchestrator?

Yes! Dossiers are useful for documentation and self-governance even standalone.

---

## Versioning Questions

### What version should I use?

Latest stable (currently 1.0.0).

### Will my dossier break with new versions?

Unlikely. Semantic versioning ensures backward compatibility for minor/patch releases.

### How do I migrate to a new spec version?

Breaking changes are rare. When they occur, migration guides are provided.

---

## Conformance Questions

### Where can I find examples?

See [Examples](/resources/examples/) or the [examples/ directory](https://github.com/jj-ervin/agent-dossier/tree/main/examples).

### Can I use examples directly?

Yes, examples are provided as starting points.

### How do I know if my dossier is valid?

Validate using the schema or the online validator.

---

## Still Have Questions?

- Check [GitHub Discussions](https://github.com/jj-ervin/agent-dossier/discussions)
- Open an [issue](https://github.com/jj-ervin/agent-dossier/issues)
- Review the [Full Specification](https://github.com/jj-ervin/agent-dossier)

---

## Next Steps

- Try the [Quick Start](/getting-started/quick-start/)
- Explore [Examples](/resources/examples/)
- Review [Core Concepts](/docs/core-concepts/)
