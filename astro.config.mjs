// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { siteUrl } from './src/config/site';

/** @returns {import('vite').Plugin} */
function patchKatexFontDisplayPlugin() {
	return {
		name: 'patch-katex-font-display',
		apply: 'build',
		/** @param {import('rollup').NormalizedOutputOptions} _options @param {Record<string, import('rollup').OutputAsset | import('rollup').OutputChunk>} bundle */
		generateBundle(_options, bundle) {
			let foundKatexCss = false;
			let replacedOccurrences = 0;

			for (const [fileName, output] of Object.entries(bundle)) {
				if (output.type !== 'asset' || !fileName.endsWith('.css')) continue;

				const css =
					typeof output.source === 'string'
						? output.source
						: new TextDecoder().decode(output.source);

				if (!css.includes('font-family:KaTeX_Main')) continue;
				foundKatexCss = true;

				const matches = css.match(/font-display:block/g);
				if (!matches) continue;

				replacedOccurrences += matches.length;
				output.source = css.replaceAll('font-display:block', 'font-display:swap');
			}

			if (foundKatexCss && replacedOccurrences === 0) {
				this.warn(
					'[patch-katex-font-display] Found KaTeX CSS, but no `font-display:block` was replaced. KaTeX upstream CSS format may have changed.',
				);
			}
		},
	};
}

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	base: '/journal',
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => {
				const pathname = new URL(page).pathname;
				return true;
			},
		}),
	],
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'hover',
	},
	markdown: {
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
			wrap: true,
		},
	},
	vite: {
		plugins: [patchKatexFontDisplayPlugin()],
	},
});

