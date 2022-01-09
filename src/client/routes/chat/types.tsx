import { FormInputs } from "@hooks";

export interface Inputs extends FormInputs {
    search: string;
    message: string;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    avatar?: string;
}

export interface Message {
    id: string;
    conversationId: string;
    content: string;
    createdAt: string;
    createdBy: string;
}

export interface Conversation {
    id: string;
    recipients: User[];
    messages: Message[];
    avatar?: string;
}
