import type { Session } from "@types";
import * as data from "../data";

// GET USER

export async function getSession() {
    return new Promise<Session>((resolve, reject) => {
        resolve({ user: data.user });
    });
}
