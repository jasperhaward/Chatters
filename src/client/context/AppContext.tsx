import { createContext } from "preact";
import type { User, Conversation } from "@types";

import type { Thunk, DispatchWithThunk } from "./middleware/thunks";
import type {
    InitialiseAction,
    ContactAddAction,
    ConversationCreateAction,
    ConversationRemoveAction,
    ConversationMessageSendAction,
    ConversationMessageDeleteAction,
    ConversationRecipientAddAction,
    ConversationRecipientRemoveAction,
} from "./AppContextActions";

export type AppContextAction =
    | InitialiseAction
    | ContactAddAction
    | ConversationCreateAction
    | ConversationRemoveAction
    | ConversationMessageSendAction
    | ConversationMessageDeleteAction
    | ConversationRecipientAddAction
    | ConversationRecipientRemoveAction;

export type AppContextState = {
    contacts: User[];
    conversations: Conversation[];
};

export type AppContextThunk = Thunk<AppContextAction, AppContextState>;

export type TAppContext = [
    state: AppContextState,
    dispatch: DispatchWithThunk<AppContextAction, AppContextState>
];

export const AppContext = createContext<TAppContext>(null);
