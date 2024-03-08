import axios from "axios";

export const API = axios.create({
	baseURL: import.meta.env.VITE_API_LOCALHOST,
});

export const SetAuthToken = (token: string) => {
	if (token) {
		API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	} else {
		delete API.defaults.headers.common["Authorization"];
	}
};



































// export const checkAuthentication = () => async (dispatch) => {
// 	const token = localStorage.getItem('token');
// 	if (token) {
// 		// Verifikasi token (misalnya, dengan pemanggilan API) di sini jika diperlukan
// 		// Jika token valid, lakukan tindakan AUTH_LOGIN
// 		dispatch(AUTH_LOGIN({ token }));
// 	} else {
// 		// Token tidak valid, lakukan tindakan AUTH_LOGOUT
// 		dispatch(AUTH_LOGOUT());
// 	}
// };