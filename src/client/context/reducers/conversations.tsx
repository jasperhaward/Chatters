import type { Reducer } from "preact/hooks";

import type { Conversation } from "@types";
import type { AppContextAction as Action } from "../AppContext";

const conversations: Reducer<Conversation[], Action> = (state, action) => {
    switch (action.type) {
        case "initialise":
            return action.payload.conversations;
        case "conversations/create":
            return [action.payload, ...state];
        case "conversations/remove":
            return state.remove(action.payload.id);
        case "conversations/messsages/send":
            return state.map((conversation) => {
                return conversation.id === action.payload.conversationId
                    ? {
                          ...conversation,
                          messages: [action.payload, ...conversation.messages],
                      }
                    : conversation;
            });
        case "conversations/messsages/delete":
            return state.map((conversation) => {
                return conversation.id === action.payload.conversationId
                    ? {
                          ...conversation,
                          messages: conversation.messages.remove(
                              action.payload.id
                          ),
                      }
                    : conversation;
            });
        case "conversations/recipients/add":
            return state.map((conversation) => {
                return conversation.id === action.payload.conversationId
                    ? {
                          ...conversation,
                          recipients: [
                              ...conversation.recipients,
                              action.payload.recipient,
                          ],
                      }
                    : conversation;
            });
        case "conversations/recipients/remove":
            return state.map((conversation) => {
                return conversation.id === action.payload.conversationId
                    ? {
                          ...conversation,
                          recipients: conversation.recipients.remove(
                              action.payload.id
                          ),
                      }
                    : conversation;
            });
        default:
            return state;
    }
};

export default conversations;
