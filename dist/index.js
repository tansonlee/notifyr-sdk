

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var io = require('react-icons/io');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var NotificationType;
(function (NotificationType) {
    NotificationType["INFO"] = "INFO";
    NotificationType["SUCCESS"] = "SUCCESS";
    NotificationType["WARNING"] = "WARNING";
    NotificationType["ERROR"] = "ERROR";
})(NotificationType || (NotificationType = {}));
var NotificationDropdownPosition;
(function (NotificationDropdownPosition) {
    NotificationDropdownPosition["LEFT"] = "LEFT";
    NotificationDropdownPosition["CENTER"] = "CENTER";
    NotificationDropdownPosition["RIGHT"] = "RIGHT";
})(NotificationDropdownPosition || (NotificationDropdownPosition = {}));

var api_endpoint = 'http://localhost:3000';

var storeUserToken = function (token) {
    localStorage.setItem('userToken', token);
};
var getUserToken = function () {
    return localStorage.getItem('userToken');
};

var authenticate = function (apiKey) { return __awaiter(void 0, void 0, void 0, function () {
    var currentToken, response, _a, token, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentToken = getUserToken();
                // Already authenticated.
                if (currentToken) {
                    return [2 /*return*/];
                }
                return [4 /*yield*/, fetch("".concat(api_endpoint, "/api/auth/get-token"), {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            apiKey: apiKey,
                        }),
                    })];
            case 1:
                response = _b.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                _a = _b.sent(), token = _a.token, error = _a.error;
                if (error) {
                    console.error(error);
                    return [2 /*return*/];
                }
                storeUserToken(token);
                return [2 /*return*/];
        }
    });
}); };

var authFetchUser = function (_a) {
    var endpoint = _a.endpoint, body = _a.body, method = _a.method;
    return __awaiter(void 0, void 0, void 0, function () {
        var token, headers, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    token = getUserToken();
                    if (!token) {
                        return [2 /*return*/, null];
                    }
                    headers = {
                        'Content-Type': 'application/json',
                        Authorization: "Bearer ".concat(token),
                    };
                    console.log('fetch params are', endpoint, {
                        method: method,
                        headers: headers,
                        body: JSON.stringify(body),
                    });
                    return [4 /*yield*/, fetch(endpoint, {
                            method: method,
                            headers: headers,
                            body: JSON.stringify(body),
                        })];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _b.sent()];
            }
        });
    });
};

var getNotificationsByGroupId = function (_a) {
    var apiKey = _a.apiKey, groupId = _a.groupId;
    return __awaiter(void 0, void 0, void 0, function () {
        var _b, notifications, errors;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, authenticate(apiKey)];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, authFetchUser({
                            endpoint: "".concat(api_endpoint, "/api/notification/get-notifications?groupId=").concat(groupId),
                            method: 'GET',
                        })];
                case 2:
                    _b = _c.sent(), notifications = _b.notifications, errors = _b.errors;
                    if (errors) {
                        console.error(errors);
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/, notifications];
            }
        });
    });
};
var getNotificationsByClientSecret = function (_a) {
    var clientSecret = _a.clientSecret;
    return __awaiter(void 0, void 0, void 0, function () {
        var response, _b, groupId, apiKey, _c, notifications, errors;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, fetch("".concat(api_endpoint, "/api/auth/decode-token"), {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            clientSecret: clientSecret,
                        }),
                    })];
                case 1:
                    response = _d.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    _b = _d.sent(), groupId = _b.groupId, apiKey = _b.apiKey;
                    console.log('got rhe groupid and the api key', groupId, apiKey);
                    return [4 /*yield*/, authenticate(apiKey)];
                case 3:
                    _d.sent();
                    return [4 /*yield*/, authFetchUser({
                            endpoint: "".concat(api_endpoint, "/api/notification/get-notifications?groupId=").concat(groupId),
                            method: 'GET',
                        })];
                case 4:
                    _c = _d.sent(), notifications = _c.notifications, errors = _c.errors;
                    if (errors) {
                        console.error(errors);
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/, notifications];
            }
        });
    });
};

var NotificationMenu = function (_a) {
    var clientSecret = _a.clientSecret, _b = _a.position, position = _b === void 0 ? NotificationDropdownPosition.CENTER : _b, _c = _a.isDarkMode, isDarkMode = _c === void 0 ? false : _c, children = _a.children;
    console.log('rendering the test notification menu');
    var _d = React__namespace.useState([]), notifications = _d[0], setNotifications = _d[1];
    var _e = React__namespace.useState(false), isOpen = _e[0], setIsOpen = _e[1];
    var positionClass = (function () {
        switch (position) {
            case NotificationDropdownPosition.LEFT:
                return 'left';
            case NotificationDropdownPosition.CENTER:
                return 'center';
            case NotificationDropdownPosition.RIGHT:
                return 'right';
        }
    })();
    React__namespace.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var notifications;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getNotificationsByClientSecret({ clientSecret: clientSecret })];
                    case 1:
                        notifications = _a.sent();
                        console.log({ notifications: notifications });
                        setNotifications(notifications);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    return (React__namespace.createElement("div", { className: 'notification-menu-wrapper' },
        children ? (children) : (React__namespace.createElement(NotificationIcon, { isDarkMode: isDarkMode, handleToggle: function () { return (isOpen ? setIsOpen(false) : setIsOpen(true)); } })),
        isOpen && (React__namespace.createElement("div", { className: "notifications-wrapper notifications-wrapper-".concat(positionClass, " notifications-wrapper-").concat(isDarkMode ? 'dark' : 'light') }, notifications.map(function (notification) { return (React__namespace.createElement("div", { key: notification.id },
            React__namespace.createElement(SingleNotification, { isDarkMode: isDarkMode, notification: notification }))); })))));
};
var SingleNotification = function (_a) {
    var notification = _a.notification, isDarkMode = _a.isDarkMode;
    var typeWrapperClass = (function () {
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
    var modeWrapperClass = isDarkMode ? 'dark' : 'light';
    return (React__namespace.createElement("div", { className: "single-notification-wrapper single-notification-wrapper-".concat(modeWrapperClass, "-").concat(typeWrapperClass) },
        React__namespace.createElement("p", { className: "single-notification-title single-notification-title-".concat(modeWrapperClass) }, notification.title),
        React__namespace.createElement("p", { className: "single-notification-body single-notification-body-".concat(modeWrapperClass) }, notification.body)));
};
var NotificationIcon = function (_a) {
    var handleToggle = _a.handleToggle, isDarkMode = _a.isDarkMode;
    return (React__namespace.createElement("div", { className: "notification-icon-wrapper notification-icon-wrapper-".concat(isDarkMode ? 'dark' : 'light'), onClick: handleToggle },
        React__namespace.createElement(io.IoMdNotificationsOutline, { className: 'bell-icon' })));
};

var insertNotification = function (_a) {
    var apiKey = _a.apiKey, title = _a.title, body = _a.body, type = _a.type, groupId = _a.groupId;
    return __awaiter(void 0, void 0, void 0, function () {
        var _b, notification, error;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, authenticate(apiKey)];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, authFetchUser({
                            endpoint: "".concat(api_endpoint, "/api/notification/insert-notification"),
                            method: "POST",
                            body: {
                                title: title,
                                body: body,
                                type: type,
                                groupId: groupId,
                            },
                        })];
                case 2:
                    _b = _c.sent(), notification = _b.notification, error = _b.error;
                    if (error) {
                        return [2 /*return*/, null];
                    }
                    return [2 /*return*/, notification];
            }
        });
    });
};

var Notifyr = /** @class */ (function () {
    function Notifyr(apiKey) {
        this.apiKey = apiKey;
    }
    Notifyr.prototype.sendNotification = function (_a) {
        var title = _a.title, body = _a.body, type = _a.type, groupId = _a.groupId;
        return __awaiter(this, void 0, void 0, function () {
            var notification;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, insertNotification({
                            apiKey: this.apiKey,
                            title: title,
                            body: body,
                            type: type,
                            groupId: groupId,
                        })];
                    case 1:
                        notification = _b.sent();
                        return [2 /*return*/, notification];
                }
            });
        });
    };
    Notifyr.prototype.getNotificationsByGroupId = function (_a) {
        var groupId = _a.groupId;
        return __awaiter(this, void 0, void 0, function () {
            var notifications;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, getNotificationsByGroupId({ apiKey: this.apiKey, groupId: groupId })];
                    case 1:
                        notifications = _b.sent();
                        return [2 /*return*/, notifications];
                }
            });
        });
    };
    return Notifyr;
}());

___$insertStyle("@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\n.notification-menu-wrapper {\n  font-family: \"Roboto\", sans-serif;\n  position: relative;\n  width: 2rem;\n  height: 2rem;\n}\n\n.notification-icon-wrapper {\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.notification-icon-wrapper-light {\n  background-color: rgb(255, 255, 255);\n  border: 1px solid rgb(205, 200, 200);\n}\n\n.notification-icon-wrapper-dark {\n  background-color: rgb(51, 51, 51);\n  border: 1px solid rgb(82, 82, 82);\n}\n\n.bell-icon {\n  width: 1.5rem;\n  height: 1.5rem;\n  transition: all 200ms ease;\n}\n\n.notification-icon-wrapper:hover .bell-icon {\n  transition: all 200ms ease;\n  transform: scale(1.1);\n}\n\n.notification-icon-wrapper:hover {\n  cursor: pointer;\n}\n\n.notifications-wrapper {\n  border-radius: 8px;\n  position: absolute;\n  top: 2.6rem;\n  left: 50%;\n  width: 450px;\n  padding: 8px;\n  background-color: rgba(240, 240, 240, 0.2);\n}\n\n.notifications-wrapper-light {\n  background-color: rgba(240, 240, 240, 0.2);\n}\n\n.notifications-wrapper-dark {\n  background-color: rgba(51, 51, 51, 0.3);\n  border: 1px solid rgb(44, 44, 44);\n}\n\n.notifications-wrapper-left {\n  transform: translateX(calc(-100% + 1.5rem));\n}\n\n.notifications-wrapper-center {\n  transform: translateX(-50%);\n}\n\n.notifications-wrapper-right {\n  transform: translateX(-1.5rem);\n}\n\n.single-notification-wrapper {\n  background-color: rgb(212, 236, 228);\n  margin: 0;\n  padding: 0.6rem;\n  border-radius: 10px;\n  margin-bottom: 6px;\n}\n\n/* Light mode color classes */\n.single-notification-wrapper-light-info {\n  background-color: rgb(190, 227, 248);\n  border: 1px solid rgb(143, 197, 228);\n}\n\n.single-notification-wrapper-light-success {\n  background-color: rgb(198, 246, 213);\n  border: 1px solid rgb(141, 230, 169);\n}\n\n.single-notification-wrapper-light-warning {\n  background-color: rgb(254, 235, 200);\n  border: 1px solid rgb(229, 196, 135);\n}\n\n.single-notification-wrapper-light-error {\n  background-color: rgb(254, 215, 215);\n  border: 1px solid rgb(235, 158, 138);\n}\n\n/* Dark mode color classes */\n.single-notification-wrapper-dark-info {\n  background-color: rgb(45, 60, 76);\n  border: 1px solid rgb(26, 49, 74);\n  color: #c2c2c2;\n}\n\n.single-notification-wrapper-dark-success {\n  background-color: rgb(45, 65, 66);\n  border: 1px solid rgb(26, 65, 67);\n  color: #c2c2c2;\n}\n\n.single-notification-wrapper-dark-warning {\n  background-color: rgb(62, 61, 60);\n  border: 1px solid rgb(60, 51, 42);\n  color: #c2c2c2;\n}\n\n.single-notification-wrapper-dark-error {\n  background-color: rgb(62, 56, 65);\n  border: 1px solid rgb(55, 36, 64);\n  color: #c2c2c2;\n}\n\n.single-notification-title {\n  margin: 0;\n  font-weight: 500;\n  margin-bottom: 2px;\n}\n\n.single-notification-title-light {\n  color: #000;\n}\n\n.single-notification-title-dark {\n  color: #fff;\n}\n\n.single-notification-body {\n  margin: 0;\n}\n\n.single-notification-body-light {\n  color: #000;\n}\n\n.single-notification-body-dark {\n  color: rgb(222, 222, 222);\n}");

exports.NotificationMenu = NotificationMenu;
exports.Notifyr = Notifyr;
//# sourceMappingURL=index.js.map
