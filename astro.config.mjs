// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
	site: isGitHubPages ? 'https://neurologyca.github.io' : undefined,
	base: isGitHubPages ? '/api-dev-site' : '/',
});
