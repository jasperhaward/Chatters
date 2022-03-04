import type { Reducer } from "preact/hooks";

import type { User } from "@types";
import type { SessionContextAction as Action } from "../SessionContext";

const user: Reducer<User, Action> = (state, action) => {
    switch (action.type) {
        case "initialise":
            return action.payload.user;
        case "user/update":
            return action.payload.user;
        default:
            return state;
    }
};

export default user;
