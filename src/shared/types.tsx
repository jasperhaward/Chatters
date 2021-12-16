export interface User {
    id: string;
    firstName: string;
    lastName: string;
}

export interface Conversation {
    id: string;
    users: string[];
}

export interface Message {
    id: string;
    conversationId: string;
    content: string;
    createdAt: string;
    createdBy: string;
}
