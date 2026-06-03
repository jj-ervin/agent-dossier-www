# Agent Dossier Website Scope

## Project Overview
**Agent Dossier Specification** is a deterministic, auditable, and machine-readable governance standard for agents operating in a multi-agent development ecosystem. The specification defines portable declarations of agent identity, agreements, authorities, constraints, handoff behavior, and compliance expectations.

**Website Purpose:** Serve as the canonical, authoritative home for the Agent Dossier Specification with versioned schema hosting, documentation, and guidance for adopters.

---

## Core Features & Pages

### 1. **Landing Page**
- **Hero Section**: Clear value proposition + Quick Start CTA
- **Key Benefits**: 
  - Deterministic agent governance
  - Portable across orchestrators
  - Auditable and machine-readable
  - Reduced ambiguity and stalls
- **Current Version Badge**: v1.0.0 (with link to changelog)
- **Quick Links**: Specification, Schema URLs, Examples, GitHub Repo
- **Adopter/Community Stats** (optional): Number of adopters, implementations

### 2. **Specification Page** (`/specification` or `/`)
- Full specification text (read from `agent-dossier.yaml`)
- Table of contents with anchor links
- Search functionality
- Version selector dropdown
- Side-by-side comparison with previous versions (v0.x, future v1.1.0)
- Print-friendly layout

### 3. **Schema Repository** (`/schemas/`, `/v/1.0.0/schemas/`, etc.)
**Critical Path Feature:** Versioned schema hosting

Serve JSON Schema files at canonical, permanent URLs:
```
/v/1.0.0/schemas/agent-dossier.schema.json
/v/1.0.0/schemas/agent-dossier-instance.schema.json
/v/1.0.0/schemas/runtime-contract.schema.json
/v/1.0.0/schemas/handoff-envelope.schema.json
/v/1.0.0/schemas/pass-changelog-entry.schema.json
```

Each schema file should include:
- Schema metadata (version, description, $id)
- Full schema definition
- Response headers: `Content-Type: application/schema+json`, caching headers
- 404 for missing versions

### 4. **Documentation** (`/docs/`)
Organized sections:
- **Quick Start**: 5-minute guide to creating first dossier
- **Core Concepts**: Identity block, authorities, constraints, handoff, governance
- **Grammar Reference**: ABNF/EBNF for envelopes, messages (from `grammar/`)
- **Governance Profiles**: Naming conventions, compliance profiles, NIST alignment
- **Runtime Contract**: Minimal enforceable subset at runtime
- **Changelog**: All PASS entries with detailed annotations (`CHANGELOG.md`)
- **Security Model**: Auditing, compliance expectations (`SECURITY.md`)
- **Contributing Guide**: Process for proposing changes (`CONTRIBUTING.md`)

### 5. **Examples & Conformance** (`/examples/`)
- **Valid Examples**: Real-world dossier declarations (from `examples/valid/`)
- **Invalid Examples**: Common mistakes and how to fix them (from `examples/invalid/`)
- **Interactive Validator**: Submit YAML/JSON to validate against schema
- **Conformance Matrix**: Machine-readable mapping of MUST/SHOULD to automation status

### 6. **API Reference** (`/reference/`)
- Auto-generated from schemas
- Field descriptions, types, constraints
- Required vs. optional fields
- Extensibility and custom fields guidance

### 7. **Implementations & Adopters** (`/adopters/`)
- Directory of projects/orchestrators adopting the spec
- Implementation status (planned, in-progress, live)
- Use case descriptions
- Links to adopter repos

### 8. **GitHub Integration**
- **Releases Page**: Direct link to GitHub Releases with download artifacts
- **Issues/Discussions**: Embed GitHub discussions widget for community questions
- **Roadmap**: Display v1.1.0 and future planned work (`ROADMAP.md`)

### 9. **Footer/Metadata**
- License: Apache 2.0
- Canonical domain reference
- Versioned documentation links
- Social links (GitHub)
- RSS feed for changelog updates

---

## Technical Requirements

### Hosting & Domain
- **Domain**: agent-dossier.org (with CNAME to GitHub Pages)
- **DNS**: CNAME record pointing to `jj-ervin.github.io`
- **Deployment**: GitHub Pages with GitHub Actions
- **Build Tool**: Static site generator (Hugo, 11ty, Next.js, or Jekyll)

### Schema Serving
- **Static JSON files** at versioned paths
- **Correct MIME types**: `application/schema+json` or `application/json`
- **Cache headers**: Permanent URLs should have long cache TTL (1 year+)
- **Validation**: Serve with correct `$id` and `$schema` fields
- **Versioning Strategy**: 
  - Old versions remain accessible
  - New versions added without overwriting
  - Clear version indicator in path

### Performance & Accessibility
- **Responsive Design**: Mobile, tablet, desktop
- **Fast Load**: Static site (target <2s)
- **Search**: Full-text search across docs and specifications
- **Accessibility**: WCAG 2.1 AA compliance
- **Dark Mode**: Optional but recommended for developer audience

### Content Management
- **Single Source of Truth**: Pull content from `agent-dossier` repo
- **Automated Builds**: GitHub Actions workflow to rebuild on repo pushes
- **Version Sync**: Fetch schemas from tagged releases
- **Changelog Auto-Sync**: Extract PASS entries from `CHANGELOG.md`

---

## Information Architecture

```
/                               → Landing page
/specification                  → Full spec (or homepage)
/docs                          → Documentation hub
  /docs/getting-started        → Quick start
  /docs/core-concepts          → Identity, authorities, constraints, etc.
  /docs/grammar                → ABNF/EBNF grammars
  /docs/governance             → Profiles, naming, compliance
  /docs/runtime-contract       → Enforced subset
  /docs/security               → Auditing, compliance
  /docs/contributing           → How to contribute
  /docs/changelog              → PASS entries (versioned)
/schemas                       → Current version schemas
/v/1.0.0/schemas              → Versioned schemas (canonical)
/v/1.0.0/schemas/agent-dossier.schema.json
/v/1.1.0/schemas              → Future versions
/examples                      → Valid/invalid examples
/validator                     → Interactive schema validator
/reference                     → API reference (auto-generated)
/adopters                      → List of implementations
/roadmap                       → Feature roadmap
/releases                      → Link to GitHub releases
```

---

## Key Design Decisions

### 1. **Canonical Schema Hosting**
- Non-negotiable: schemas must live at permanent, versioned URLs
- Each version gets its own directory that is never overwritten
- Version in URL ensures no breaking changes to adopters

### 2. **Minimal Scope (MVP)**
- Focus on specification delivery and schema hosting first
- Interactive validator and adopter directory can be phased in
- Examples can be simple page with code snippets

### 3. **Source of Truth**
- All content mirrors the GitHub repository
- README, ROADMAP, CHANGELOG, examples all sync from repo
- Changes to spec automatically trigger website rebuild

### 4. **Developer-First Design**
- Emphasis on schemas and technical specs
- Code examples and copy-paste-friendly snippets
- Fast load times and no bloat

---

## Success Criteria

- [ ] Schemas served at canonical URLs with correct headers
- [ ] All documentation accessible and searchable
- [ ] Specification readable online and print-friendly
- [ ] Changelog and versioning clear and navigable
- [ ] Examples demonstrate valid/invalid conformance
- [ ] GitHub Pages deployment working with CNAME
- [ ] Fast performance (<2s load, >90 Lighthouse score)
- [ ] Accessible to screen readers and mobile users
- [ ] Clear path for adopters to reference and validate

---

## Recommended Tech Stack

### Option 1: Static Hugo + GitHub Pages (Recommended for specs)
- **Pros**: Fast, minimal maintenance, schema serving trivial
- **Cons**: Less dynamic

### Option 2: 11ty (Eleventy) + GitHub Pages
- **Pros**: JavaScript-based, flexible, good for docs
- **Cons**: Slightly more complex build

### Option 3: Next.js/Astro (if interactivity needed later)
- **Pros**: Add interactive validator, adopter map later
- **Cons**: More overhead, GitHub Pages limitations

---

## Phase 1 (MVP) - Essential
1. Landing page with hero + key links
2. Specification documentation page
3. Schema repository at versioned URLs
4. Basic docs structure
5. GitHub Pages deployment

## Phase 2 - Enhancement
1. Interactive validator
2. Adopter directory
3. API reference (auto-generated)
4. Search functionality
5. Examples showcase

## Phase 3 - Polish
1. Conformance matrix visualization
2. Community/discussion widget
3. Blog for announcements
4. Release notes integration
5. Analytics

