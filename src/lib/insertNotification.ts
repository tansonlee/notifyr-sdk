import { api_endpoint } from '../constants';
import { authenticate } from './authenticate';
import { authFetchUser } from './authFetch';

export const insertNotification = async ({
	apiKey,
	title,
	body,
	type,
	groupId,
}: {
	apiKey: string;
	title: string;
	body: string;
	type: string;
	groupId: string;
}) => {
	await authenticate(apiKey);
	const { notification, error } = await authFetchUser({
		endpoint: `${api_endpoint}/api/notification/insert-notification`,
		method: `POST`,
		body: {
			title,
			body,
			type,
			groupId,
		},
	});

	if (error) {
		return null;
	}

	return notification;
};
