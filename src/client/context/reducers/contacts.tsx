import type { Reducer } from "preact/hooks";

import type { User } from "@types";
import type { AppContextAction as Action } from "../AppContext";

const contacts: Reducer<User[], Action> = (state, action) => {
    switch (action.type) {
        case "initialise":
            return action.payload.contacts;
        case "contacts/add":
            return [...state, action.payload];
        default:
            return state;
    }
};

export default contacts;
