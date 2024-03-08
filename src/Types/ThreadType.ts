import { LikeType } from "./LikeType";
import { ReplyType } from "./FormReplyType";
import { UserType } from "./UserType";

export type ThreadType = {
    id?: number;
    content?: string;
    image?: string;
    user?: UserType
    replies?: ReplyType[];
    likes?: LikeType[];
};

export type FormThreadType = {
	content: string;
	// image: string | Blob | MediaSource;
	// user: number;
};
