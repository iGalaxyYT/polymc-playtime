import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'],
	clean: true,
	format: ['cjs', 'esm'],
	banner: {
		js: '// Copyright William Hayr https://github.com/iGalaxyYT/polymc-playtime',
	},
});
