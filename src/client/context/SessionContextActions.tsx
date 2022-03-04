import type { User } from "@types";

export type InitialiseAction = {
    type: "initialise";
    payload: {
        user: User;
    };
};

export type UserUpdateAction = {
    type: "user/update";
    payload: {
        user: User;
    };
};
