import fetch from 'node-fetch';

import { getPlaytime } from './index';

export function lanyard(auth: string, id: string, key: string) {
	const playtime = getPlaytime();

	fetch(`https://api.lanyard.rest/v1/users/${id}/kv/${key}`, {
		method: 'PUT',
		headers: {
			Authorization: auth,
		},
		body: `${playtime}`,
	}).then(async res => {
		console.log(await res.text());
	});
}
