import { createContext } from "preact";
import type { User } from "@types";

import type { Thunk, DispatchWithThunk } from "./middleware/thunks";
import type {
    InitialiseAction,
    UserUpdateAction,
} from "./SessionContextActions";

export type SessionContextAction = InitialiseAction | UserUpdateAction;

export type SessionContextState = {
    user: User;
};

export type SessionContextThunk = Thunk<
    SessionContextAction,
    SessionContextState
>;

export type TSessionContext = [
    state: SessionContextState,
    dispatch: DispatchWithThunk<SessionContextAction, SessionContextState>
];

export const SessionContext = createContext<TSessionContext>(null);
