import { User, Message } from "@types";

export type Conversation = {
    id: string;
    recipients: User[];
    messages: Message[];
    title?: string;
    avatar?: string;
};
