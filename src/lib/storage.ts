export const storeUserToken = (token: string) => {
	localStorage.setItem('userToken', token);
};

export const getUserToken = () => {
	return localStorage.getItem('userToken');
};
