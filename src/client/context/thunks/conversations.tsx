import * as api from "@api";
import { AppContextThunk } from "../AppContext";

export function createConversation(
    params: api.CreateConversationParams
): AppContextThunk {
    return async (dispatch) => {
        let conversation = await api
            .createConversation(params)
            .catch(console.error);

        if (conversation) {
            dispatch({
                type: "conversations/create",
                payload: conversation,
            });
        }
    };
}
