import { useState, useReducer } from "preact/hooks";
import { Action, SendMessageAction, DeleteMessageAction } from "./actions";
import { Conversation } from "../types";

export default function ConversationHandler(init: Conversation[]) {
    const [conversations, dispatch] = useReducer(reducer, init);
    const [selected, setSelected] = useState<string>(init[0].id);

    const index = conversations.findIndex((conversation) => {
        return conversation.id === selected;
    });

    function reducer(state: Conversation[], action: Action) {
        var updatedState = [...state];

        switch (action.type) {
            case "send":
                updatedState[index] = onSendMessage(updatedState[index], action);
                break;
            case "delete":
                updatedState[index] = onDeleteMessage(updatedState[index], action);
                break;
        }

        return sortByDate(updatedState);
    }

    function onSendMessage(conversation: Conversation, action: SendMessageAction) {
        const message = {
            ...action.message,
            id: "",
            conversationId: conversation.id,
            createdAt: new Date().toISOString(),
        };

        return {
            ...conversation,
            messages: [message, ...conversation.messages],
        };
    }

    function onDeleteMessage(conversation: Conversation, action: DeleteMessageAction) {
        const messages = conversation.messages.filter(
            (message) => message.id !== action.message.id
        );

        return {
            ...conversation,
            messages: messages,
        };
    }

    function onSelectConversation(index: number) {
        const conversation = conversations[index];
        setSelected(conversation.id);
    }

    function sortByDate(conversations: Conversation[]) {
        return conversations.sort(
            (a, b) =>
                new Date(b.messages[0].createdAt).getTime() -
                new Date(a.messages[0].createdAt).getTime()
        );
    }

    return {
        selected: conversations[index],
        select: onSelectConversation,
        conversations,
        dispatch,
    };
}
