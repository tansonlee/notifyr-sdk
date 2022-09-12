/// <reference types="react" />
import { NotificationDropdownPosition } from '../interface';
export declare const NotificationMenu: ({ clientSecret, position, isDarkMode, children, }: {
    clientSecret: string;
    position?: NotificationDropdownPosition | undefined;
    isDarkMode?: boolean | undefined;
    children?: JSX.Element | undefined;
}) => JSX.Element;
