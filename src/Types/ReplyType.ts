/* eslint-disable @typescript-eslint/no-unused-vars */
import { ThreadType } from "./ThreadType";
import { UserType } from "./UserType";

// export type ReplyType= {
//     id?: number;
//     image?: string;
//     content?: string;
//     thread?: ThreadType;
//     user?: UserType
// };

export type ReplyType = {
    id?: number
    thread?: ThreadType
    user?: UserType
    content?: string
    image?: string

}

export type FormReplyType = {
    thread: number;
    content: string;
    // id?: number
    // thread?: ThreadType
    // user?: UserType
    // content?: string
    // image?: string

}
