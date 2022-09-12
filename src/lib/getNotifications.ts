import { api_endpoint } from '../constants';
import { authenticate } from './authenticate';
import { authFetchUser } from './authFetch';

export const getNotificationsByGroupId = async ({
	apiKey,
	groupId,
}: {
	groupId: string;
	apiKey: string;
}) => {
	await authenticate(apiKey);
	const { notifications, errors } = await authFetchUser({
		endpoint: `${api_endpoint}/api/notification/get-notifications?groupId=${groupId}`,
		method: 'GET',
	});
	if (errors) {
		console.error(errors);
		return [];
	}

	return notifications;
};

export const getNotificationsByClientSecret = async ({
	clientSecret,
}: {
	clientSecret: string;
}) => {
	const response = await fetch(`${api_endpoint}/api/auth/decode-token`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			clientSecret,
		}),
	});
	const { groupId, apiKey } = await response.json();

	console.log('got rhe groupid and the api key', groupId, apiKey);

	await authenticate(apiKey);
	const { notifications, errors } = await authFetchUser({
		endpoint: `${api_endpoint}/api/notification/get-notifications?groupId=${groupId}`,
		method: 'GET',
	});
	if (errors) {
		console.error(errors);
		return [];
	}

	return notifications;
};
