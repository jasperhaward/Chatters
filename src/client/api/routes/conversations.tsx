import * as utils from "@utils";
import type { User, Conversation, Message } from "@types";
import * as data from "../data";

// GET CONVERSATIONS

export type GetConversationsParams = {
    userId: string;
};

export async function getConversations(params: GetConversationsParams) {
    return new Promise<Conversation[]>((resolve, reject) => {
        resolve(data.conversations);
    });
}

// CREATE CONVERSATION

export type CreateConversationParams = {
    recipients: User[];
    messages: [Message];
};

export async function createConversation(params: CreateConversationParams) {
    return new Promise<Conversation>((resolve, reject) => {
        resolve({
            ...params,
            id: utils.generateId(),
        });
    });
}
