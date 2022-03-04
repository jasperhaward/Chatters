import * as utils from "@utils";
import type { Message } from "@types";

// SEND MESSAGE

export type SendMessageParams = {
    conversationId: string;
    content: string;
    createdBy: string;
};

export async function sendMessage(params: SendMessageParams) {
    return new Promise<Message>((resolve, reject) => {
        resolve({
            ...params,
            id: utils.generateId(),
            createdAt: new Date().toISOString(),
        });
    });
}
