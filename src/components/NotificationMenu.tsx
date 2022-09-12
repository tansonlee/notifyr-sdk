import * as React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { NotificationDropdownPosition, NotificationFragment, NotificationType } from '../interface';
import { getNotificationsByClientSecret } from '../lib/getNotifications';

export const NotificationMenu = ({
	clientSecret,
	position = NotificationDropdownPosition.CENTER,
	isDarkMode = false,
	children,
}: {
	clientSecret: string;
	position?: NotificationDropdownPosition;
	isDarkMode?: boolean;
	children?: JSX.Element;
}) => {
	console.log('rendering the test notification menu');
	const [notifications, setNotifications] = React.useState<string[]>([]);
	const [isOpen, setIsOpen] = React.useState(false);

	const positionClass = (() => {
		switch (position) {
			case NotificationDropdownPosition.LEFT:
				return 'left';
			case NotificationDropdownPosition.CENTER:
				return 'center';
			case NotificationDropdownPosition.RIGHT:
				return 'right';
		}
	})();

	React.useEffect(() => {
		(async () => {
			const notifications = await getNotificationsByClientSecret({ clientSecret });

			console.log({ notifications });
			setNotifications(notifications);
		})();
	}, []);

	return (
		<div className='notification-menu-wrapper'>
			{children ? (
				children
			) : (
				<NotificationIcon
					isDarkMode={isDarkMode}
					handleToggle={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
				/>
			)}
			{isOpen && (
				<div
					className={`notifications-wrapper notifications-wrapper-${positionClass} notifications-wrapper-${
						isDarkMode ? 'dark' : 'light'
					}`}
				>
					{notifications.map((notification: any) => (
						<div key={notification.id}>
							<SingleNotification
								isDarkMode={isDarkMode}
								notification={notification}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

const SingleNotification = ({
	notification,
	isDarkMode,
}: {
	notification: NotificationFragment;
	isDarkMode: boolean;
}) => {
	const typeWrapperClass = (() => {
		console.log('type is', notification.type);
		switch (notification.type) {
			case NotificationType.INFO:
				return 'info';
			case NotificationType.SUCCESS:
				return 'success';
			case NotificationType.WARNING:
				return 'warning';
			case NotificationType.ERROR:
				return 'error';
		}
	})();

	const modeWrapperClass = isDarkMode ? 'dark' : 'light';

	return (
		<div
			className={`single-notification-wrapper single-notification-wrapper-${modeWrapperClass}-${typeWrapperClass}`}
		>
			<p
				className={`single-notification-title single-notification-title-${modeWrapperClass}`}
			>
				{notification.title}
			</p>
			<p className={`single-notification-body single-notification-body-${modeWrapperClass}`}>
				{notification.body}
			</p>
		</div>
	);
};

const NotificationIcon = ({
	handleToggle,
	isDarkMode,
}: {
	handleToggle: () => void;
	isDarkMode: boolean;
}) => {
	return (
		<div
			className={`notification-icon-wrapper notification-icon-wrapper-${
				isDarkMode ? 'dark' : 'light'
			}`}
			onClick={handleToggle}
		>
			<IoMdNotificationsOutline className='bell-icon' />
		</div>
	);
};
