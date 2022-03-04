import * as api from "@api";
import { AppContextThunk } from "../AppContext";

export function sendMessage(params: api.SendMessageParams): AppContextThunk {
    return async (dispatch) => {
        let message = await api.sendMessage(params).catch(console.error);

        if (message) {
            dispatch({
                type: "conversations/messsages/send",
                payload: message,
            });
        }
    };
}
