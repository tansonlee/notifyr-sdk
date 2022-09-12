import { api_endpoint } from '../constants';
import { getUserToken, storeUserToken } from './storage';

export const authenticate = async (apiKey: string) => {
	const currentToken = getUserToken();

	// Already authenticated.
	if (currentToken) {
		return;
	}

	// Get the token from the server.
	const response = await fetch(`${api_endpoint}/api/auth/get-token`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			apiKey,
		}),
	});

	const { token, error } = await response.json();

	if (error) {
		console.error(error);
		return;
	}

	storeUserToken(token);
};
