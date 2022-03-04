import type { User, Conversation, Message } from "@types";

export type InitialiseAction = {
    type: "initialise";
    payload: {
        contacts: User[];
        conversations: Conversation[];
    };
};

export type ContactAddAction = {
    type: "contacts/add";
    payload: User;
};

export type ConversationCreateAction = {
    type: "conversations/create";
    payload: Conversation;
};

export type ConversationRemoveAction = {
    type: "conversations/remove";
    payload: Conversation;
};

export type ConversationMessageSendAction = {
    type: "conversations/messsages/send";
    payload: Message;
};

export type ConversationMessageDeleteAction = {
    type: "conversations/messsages/delete";
    payload: Message;
};

export type ConversationRecipientAddAction = {
    type: "conversations/recipients/add";
    payload: {
        conversationId: string;
        recipient: User;
    };
};

export type ConversationRecipientRemoveAction = {
    type: "conversations/recipients/remove";
    payload: {
        conversationId: string;
        id: string;
    };
};
