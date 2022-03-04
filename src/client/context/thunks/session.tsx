import * as api from "@api";
import { SessionContextThunk } from "../SessionContext";

export function loadSession(): SessionContextThunk {
    return async (dispatch) => {
        let session = await api.getSession().catch(console.error);

        if (session) {
            dispatch({
                type: "initialise",
                payload: session,
            });
        }
    };
}
