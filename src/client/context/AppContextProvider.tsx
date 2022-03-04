import type { VNode } from "preact";
import { Reducer, useReducer } from "preact/hooks";

import {
    AppContext,
    AppContextState as State,
    AppContextAction as Action,
} from "./index";
import thunks from "./middleware/thunks";
import contacts from "./reducers/contacts";
import conversations from "./reducers/conversations";

export type AppContextProviderProps = {
    children: VNode | VNode[];
};

export function AppContextProvider({ children }: AppContextProviderProps) {
    const reducer: Reducer<State, Action> = (state, action) => ({
        contacts: contacts(state.contacts, action),
        conversations: conversations(state.conversations, action),
    });

    const [state, dispatch] = useReducer(reducer, {
        contacts: null,
        conversations: null,
    });

    return (
        <AppContext.Provider value={[state, thunks(dispatch, state)]}>
            {children}
        </AppContext.Provider>
    );
}
