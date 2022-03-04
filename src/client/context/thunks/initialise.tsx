import * as api from "@api";
import { AppContextThunk } from "../AppContext";

export type InitialiseParams = {
    userId: string;
};

export function initialise(params: InitialiseParams): AppContextThunk {
    return async (dispatch) => {
        let conversations = await api
            .getConversations(params)
            .catch(console.error);

        let contacts = await api.getContacts(params).catch(console.error);

        if (conversations && contacts) {
            dispatch({
                type: "initialise",
                payload: {
                    contacts,
                    conversations,
                },
            });
        }
    };
}
