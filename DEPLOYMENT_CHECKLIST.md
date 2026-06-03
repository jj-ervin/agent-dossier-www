# Deployment Checklist

## Pre-Deployment

- [ ] Local dev server tested (`npm run dev`)
- [ ] All pages accessible and links working
- [ ] Build succeeds (`npm run build`)
- [ ] No console errors or warnings
- [ ] Search functionality verified
- [ ] Dark mode toggle works
- [ ] Mobile responsive layout tested

## GitHub Setup

- [ ] Repository initialized: `github.com/jj-ervin/agent-dossier-www`
- [ ] All files committed and pushed
- [ ] README.md visible in repo
- [ ] Branch protection rules configured
- [ ] `main` branch as default

## GitHub Pages Configuration

- [ ] Pages enabled in repository settings
- [ ] Source set to `GitHub Actions`
- [ ] DNS CNAME record created pointing to `agent-dossier.org`
- [ ] Deployment action created (`.github/workflows/deploy.yml`)

## GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v1
        with:
          path: './dist'
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v1
        id: deployment
```

## Schema Serving Setup

- [ ] Create directory structure: `public/v/1.0.0/schemas/`
- [ ] Copy JSON schema files from main repo
- [ ] Configure Astro to serve as static assets
- [ ] Test schema URLs return correct Content-Type
- [ ] Verify schema validation works

## Post-Deployment

- [ ] Site accessible at `https://agent-dossier.org`
- [ ] All pages load without errors
- [ ] Schemas served at `/v/1.0.0/schemas/`
- [ ] Search indexes content
- [ ] Mobile layout verified
- [ ] SEO metadata present (og: tags, etc.)
- [ ] Analytics configured (optional)

## Monitoring

- [ ] GitHub Actions workflows pass
- [ ] Deployment alerts configured
- [ ] Performance baseline established
- [ ] Error tracking set up (optional)

## Phase 2 - Enhancements

- [ ] Interactive validator component
- [ ] Adopter directory with filter
- [ ] Blog/news section
- [ ] Community stats dashboard
- [ ] Conformance matrix visualization

## Phase 3 - Community

- [ ] GitHub Discussions linked
- [ ] Issue templates configured
- [ ] Contributing guide finalized
- [ ] Community feedback mechanism

---

## Testing Commands

```bash
# Local development
npm run dev

# Build
npm run build

# Preview
npm run preview

# Validate links
npx astro check

# Format
npx prettier --write src/
```

---

## Support

- **Repository**: https://github.com/jj-ervin/agent-dossier
- **Issues**: https://github.com/jj-ervin/agent-dossier-www/issues
- **Discussions**: https://github.com/jj-ervin/agent-dossier/discussions
