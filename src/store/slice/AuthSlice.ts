import { SetAuthToken } from "@/libs/API";
import { UserType } from "@/Types/UserType";
import { createSlice } from "@reduxjs/toolkit";


const initiaslState: UserType = {
	id: 0,
	email: "",
	full_name: "",
	username: "",
	profile_picture: "",
	bio: "",
	following: [],
	followers: [],
};


export const AuthSlice = createSlice({
	name: "auth",
	initialState: initiaslState,
	reducers: {
		AUTH_LOGIN: (_, action) => {
			const payload = action.payload;
			console.log(payload);
			
			SetAuthToken(payload.token);
			localStorage.setItem("token", payload.token);

			const user: UserType = {
				id: payload.user.id,
				email: payload.user.email,
				full_name: payload.user.full_name,
				username: payload.user.username,
				profile_picture: payload.user.profile_picture,
				bio: payload.user.bio,
				following: payload.user.following,
				followers: payload.user.followers,
			};

			return user;
		},
		AUTH_CHECK: (_, action) => {
			const payload = action.payload;

			console.log(payload);
			

			const user: UserType = {
				id: payload.id,
				email: payload.email,
				full_name: payload.full_name,
				username: payload.username,
				profile_picture: payload.profile_picture,
				bio: payload.bio,
				following: payload.following,
				followers: payload.followers,
			};

			return user;
		},
		AUTH_ERROR: () => {
			localStorage.removeItem("token");
		},
		AUTH_LOGOUT: () => {
			localStorage.removeItem("token");
		},
	},
});
