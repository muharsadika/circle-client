export type UserType = {
    id?: number;
    email?: string;
    // password: string;
    full_name?: string;
    bio?: string;
    username?: string;
    profile_picture?: string;
    following: [],
    followers: []
};

export type UserRegisterType = {
    full_name?: string;
	username?: string;
	email?: string;
	password?: string;
}

export type UserLoginType = {
    username?: string;
    password?: string;
}

export type UserFollowType = {
    user?: UserType;
}

export type UserUpdateType = {
    full_name?: string;
    username?: string;
    bio?: string;
    profile_picture?: string;
}
// export default UserType;
