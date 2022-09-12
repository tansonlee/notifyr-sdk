export declare class Notifyr {
    private apiKey;
    constructor(apiKey: string);
    sendNotification({ title, body, type, groupId, }: {
        title: string;
        body: string;
        type: string;
        groupId: string;
    }): Promise<any>;
    getNotificationsByGroupId({ groupId }: {
        groupId: string;
    }): Promise<any>;
}
