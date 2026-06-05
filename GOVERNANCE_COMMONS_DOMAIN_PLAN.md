# Governance Commons Domain Plan

Canonical umbrella domain: `governancecommons.org`

## Recommended Domain Roles

| Domain | Role |
| --- | --- |
| `governancecommons.org` | Primary landing page and docs hub for all Governance Commons standards |
| `agent-dossier.org` | Compatibility domain for existing Agent Dossier docs and versioned schema URLs |

## Recommended URL Shape

```text
https://governancecommons.org/
https://governancecommons.org/agent-dossier/
https://governancecommons.org/agent-matrix/
https://governancecommons.org/ons/
https://governancecommons.org/project-orchestrator-agent/
https://governancecommons.org/schemas/
https://governancecommons.org/examples/
```

## Schema Compatibility

Existing Agent Dossier schema URLs should remain stable:

```text
https://agent-dossier.org/v/1.0.0/schemas/agent-dossier.schema.json
https://agent-dossier.org/v/1.0.0/schemas/runtime-contract.schema.json
```

Do not replace existing `$id` values casually. Schema `$id` values are identifiers
adopters may already depend on. Governance Commons can add new canonical landing
pages while preserving existing versioned schema identifiers.

## Deployment Note

Do not change this repository's `CNAME` from `agent-dossier.org` to
`governancecommons.org` until a redirect or compatibility plan is ready for
`agent-dossier.org`.
