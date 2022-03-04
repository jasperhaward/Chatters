import type { VNode } from "preact";
import { Reducer, useReducer } from "preact/hooks";

import {
    SessionContext,
    SessionContextState as State,
    SessionContextAction as Action,
} from "./index";
import thunks from "./middleware/thunks";
import user from "./reducers/user";

export type SessionContextProviderProps = {
    children: VNode | VNode[];
};

export function SessionContextProvider({
    children,
}: SessionContextProviderProps) {
    const reducer: Reducer<State, Action> = (state, action) => ({
        user: user(state.user, action),
    });

    const [state, dispatch] = useReducer(reducer, {
        user: null,
    });

    return (
        <SessionContext.Provider value={[state, thunks(dispatch, state)]}>
            {children}
        </SessionContext.Provider>
    );
}
