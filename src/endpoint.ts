import fetch from 'node-fetch';

import { getPlaytime } from './index';

export function endpoint(auth: string, endpoint: string) {
	const playtime = getPlaytime();

	fetch(endpoint, {
		method: 'POST',
		headers: {
			Authorization: auth,
		},
		body: `${playtime}`,
	}).then(async res => {
		console.log(await res.text());
	});
}
