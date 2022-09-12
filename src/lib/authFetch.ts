import { getUserToken } from './storage';

export const authFetchUser = async ({
	endpoint,
	body,
	method,
}: {
	endpoint: string;
	method: string;
	body?: any;
}) => {
	const token = getUserToken();
	if (!token) {
		return null;
	}

	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${token}`,
	};

	console.log('fetch params are', endpoint, {
		method,
		headers,
		body: JSON.stringify(body),
	});

	const response = await fetch(endpoint, {
		method,
		headers,
		body: JSON.stringify(body),
	});

	return await response.json();
};
