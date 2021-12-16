export type SendMessageAction = {
    type: "send";
    message: {
        content: string;
        createdBy: string;
    };
};

export type DeleteMessageAction = {
    type: "delete";
    message: {
        id: string;
    };
};

export type Action = SendMessageAction | DeleteMessageAction;
