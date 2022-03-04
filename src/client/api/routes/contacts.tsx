import type { User } from "@types";
import * as data from "../data";

// GET CONTACTS

export type GetContactsParams = {
    userId: string;
};

export async function getContacts(params: GetContactsParams) {
    return new Promise<User[]>((resolve, reject) => {
        resolve(data.contacts);
    });
}
