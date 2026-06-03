---
title: Contributing to Agent Dossier
description: How to contribute to the specification and community
---

The Agent Dossier project welcomes contributions of all kinds!

## Ways to Contribute

### 1. Report Issues or Start Discussions

- [GitHub Issues](https://github.com/jj-ervin/agent-dossier/issues) — Bug reports, feature requests
- [GitHub Discussions](https://github.com/jj-ervin/agent-dossier/discussions) — Questions, ideas, use cases

### 2. Suggest Specification Changes

Submit a pull request with:

1. **Motivation**: Why is this change needed?
2. **Changes**: What's being added or modified?
3. **Backward Compatibility**: Does this break existing dossiers?
4. **PASS Changelog Entry**: Include timestamp, principal, action, subject, scope

Specification changes require:
- Clear rationale
- Examples
- Validation (updated schemas)
- PASS changelog entry

### 3. Improve Documentation

- Typos, clarity improvements
- New examples
- Integration guides
- FAQ entries

### 4. Submit Implementations

Help create adopters by:
- Building orchestrator integrations
- Writing client libraries
- Creating validation tools
- Writing tutorials

### 5. Governance & Compliance

Contribute to:
- Governance profiles
- Compliance mappings
- Security best practices
- Standards alignment (NIST, OpenTelemetry, etc.)

---

## Development Setup

```bash
# Clone the repository
git clone https://github.com/jj-ervin/agent-dossier.git
cd agent-dossier

# Install dependencies (if needed)
pip install -r requirements.txt
# or
npm install

# Validate the specification
npm run validate
# or
python tools/validate.py
```

---

## Specification Change Process

1. **Fork** the repository
2. **Create a branch**: `git checkout -b feature/your-change`
3. **Make changes** to `agent-dossier.yaml`
4. **Update schemas** in `schemas/`
5. **Add examples** in `examples/valid/` or `examples/invalid/`
6. **Add PASS entry** to `CHANGELOG.md`:
   ```yaml
   - timestamp: "2026-06-03T10:00:00Z"
     principal: "your-github-username"
     action: "added"
     subject: "new_field_name"
     scope: "identity_block"
     reason: "Rationale for the change"
   ```
7. **Submit PR** with clear description

---

## Code of Conduct

We follow the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/).

---

## Governance

- **Maintainer**: [@jj-ervin](https://github.com/jj-ervin)
- **Decision Process**: Consensus, with clear rationale for major changes
- **Versioning**: Semantic versioning (MAJOR.MINOR.PATCH)

---

## Questions?

- [GitHub Discussions](https://github.com/jj-ervin/agent-dossier/discussions)
- Open an [issue](https://github.com/jj-ervin/agent-dossier/issues)
- Check [CONTRIBUTING.md](https://github.com/jj-ervin/agent-dossier/blob/main/CONTRIBUTING.md)

---

## Next Steps

- Review the [Full Specification](https://github.com/jj-ervin/agent-dossier)
- Explore the [Repository](https://github.com/jj-ervin/agent-dossier)
- Join [Community Discussions](https://github.com/jj-ervin/agent-dossier/discussions)
