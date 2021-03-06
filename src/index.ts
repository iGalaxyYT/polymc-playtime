#!/usr/bin/env node

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

import { lanyard } from './lanyard';
import { endpoint } from './endpoint';

// polymc-playtime --method=endpoint --endpoint="https://example.com/polymc" --auth="0000000000000000000"
// polymc-playtime --method=lanyard --lanyard-id="182292736790102017" --auth="0000000000000000000"

const argv = yargs(hideBin(process.argv))
	.options({
		method: { type: 'string', default: 'endpoint' },
		'lanyard-id': { type: 'string', default: '' },
		endpoint: { type: 'string', default: '127.0.0.1:3000/polymc' },
		auth: { type: 'string', default: '', alias: 'authorization' },
		path: { type: 'string', default: '' },
		'lanyard-key': { type: 'string', default: 'polymc_playtime' },
	})
	.parseSync();
const cwd = join(argv.path, '..');

switch (argv.method) {
	case 'lanyard': {
		if (argv.lanyardId && argv.auth)
			lanyard(argv.auth, argv.lanyardId, argv.lanyardKey);
		else console.error("Please supply 'lanyard-id' and 'auth' parameters");

		break;
	}

	case 'endpoint': {
		if (argv.endpoint && argv.auth) endpoint(argv.auth, argv.endpoint);
		else console.error("Please supply 'endpoint' and 'auth' parameters");

		break;
	}

	default: {
		console.error("Please supply 'method' parameter (endpoint|lanyard)");
	}
}

if (!argv.path) {
	console.error(
		"As of 1.1.0, polymc-playtime requires you to supply a 'path' parameter using the PolyMC $INST_DIR variable."
	);
}

export function getPlaytime() {
	const files = readdirSync(cwd)
		.filter(x => x !== '_LAUNCHER_TEMP' && x !== 'instgroups.json')
		.map(x => join(cwd, x, 'instance.cfg'));

	let playtime = 0;

	files.forEach(file => {
		if (existsSync(file)) {
			const contents = readFileSync(file, 'utf-8');

			const lines = contents.split('\n');

			const additionalPlaytime = Number(
				lines
					.find(x => x.startsWith('totalTimePlayed='))!
					.replace('totalTimePlayed=', '')
			);

			console.log(`${file}: ${additionalPlaytime}s`);

			playtime += additionalPlaytime;
		}
	});

	console.log(`Total: ${playtime}`);

	return playtime;
}
