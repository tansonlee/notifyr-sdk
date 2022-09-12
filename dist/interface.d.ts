export declare type NotificationFragment = {
    id: string;
    user_id: string;
    title: string;
    body: string;
    type: NotificationType;
    created_at: string;
    updated_at: string;
    group_id: string;
    link?: string;
};
export declare enum NotificationType {
    INFO = "INFO",
    SUCCESS = "SUCCESS",
    WARNING = "WARNING",
    ERROR = "ERROR"
}
export declare enum NotificationDropdownPosition {
    LEFT = "LEFT",
    CENTER = "CENTER",
    RIGHT = "RIGHT"
}
