import { getNotificationsByGroupId } from '../lib/getNotifications';
import { insertNotification } from '../lib/insertNotification';

export class Notifyr {
	private apiKey;
	constructor(apiKey: string) {
		this.apiKey = apiKey;
	}

	public async sendNotification({
		title,
		body,
		type,
		groupId,
	}: {
		title: string;
		body: string;
		type: string;
		groupId: string;
	}) {
		const notification = await insertNotification({
			apiKey: this.apiKey,
			title,
			body,
			type,
			groupId,
		});
		return notification;
	}

	public async getNotificationsByGroupId({ groupId }: { groupId: string }) {
		const notifications = await getNotificationsByGroupId({ apiKey: this.apiKey, groupId });
		return notifications;
	}
}
