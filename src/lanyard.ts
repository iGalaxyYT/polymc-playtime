import fetch from 'node-fetch';

import { getPlaytime } from './index';

export function lanyard(auth: string, id: string) {
	const playtime = getPlaytime();

	fetch(`https://lanyard.rest/v1/users/${id}/kv/polymc_playtime`, {
		method: 'PUT',
		headers: {
			Authorization: auth,
		},
		body: `${playtime}`,
	}).then(async res => {
		console.log(await res.text());
	});
}
