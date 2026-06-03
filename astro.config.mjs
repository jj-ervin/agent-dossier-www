// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://agent-dossier.org',
	integrations: [
		starlight({
			title: 'Agent Dossier Specification',
			description: 'A deterministic, auditable governance standard for agents in multi-agent development ecosystems.',
			logo: {
				light: '/src/assets/logo-light.svg',
				dark: '/src/assets/logo-dark.svg',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/jj-ervin/agent-dossier' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Home', slug: 'home' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
						{ label: 'Specification Overview', slug: 'getting-started/overview' },
					],
				},
				{
					label: 'Documentation',
					items: [
						{ label: 'Overview', slug: 'docs' },
						{ label: 'Core Concepts', slug: 'docs/core-concepts' },
						{ label: 'Identity Block', slug: 'docs/identity-block' },
						{ label: 'Authorities & Constraints', slug: 'docs/authorities' },
						{ label: 'Handoff Protocol', slug: 'docs/handoff' },
						{ label: 'Governance Profiles', slug: 'docs/governance' },
						{ label: 'Runtime Contract', slug: 'docs/runtime-contract' },
						{ label: 'Security & Auditing', slug: 'docs/security' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Schema Reference', slug: 'reference/schema' },
						{ label: 'Grammar (ABNF/EBNF)', slug: 'reference/grammar' },
						{ label: 'Changelog', slug: 'reference/changelog' },
					],
				},
				{
					label: 'Resources',
					items: [
						{ label: 'Examples', slug: 'resources/examples' },
						{ label: 'Adopters', slug: 'resources/adopters' },
						{ label: 'Contributing', slug: 'resources/contributing' },
						{ label: 'FAQ', slug: 'resources/faq' },
					],
				},
			],
			editLink: {
				baseUrl: 'https://github.com/jj-ervin/agent-dossier-www/edit/main/',
			},
		}),
	],
});
