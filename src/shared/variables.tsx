import { User, Conversation, Message } from "./types";

export const user: User = {
    id: "U1",
    firstName: "Jasper",
    lastName: "Haward",
};

export const recipient1: User = {
    id: "U2",
    firstName: "Monika",
    lastName: "Rahne",
};

export const recipient2: User = {
    id: "U3",
    firstName: "Ben",
    lastName: "James",
};

export const users: User[] = [user, recipient1, recipient2];

export const conversations: Conversation[] = [
    { id: "C1", users: [user.id, recipient1.id] },
    { id: "C2", users: [user.id, recipient2.id] },
];

export const messages: Message[] = [
    {
        id: "M1",
        conversationId: "C1",
        content: "Hello!",
        createdAt: new Date(2021, 11, 1, 14, 36).toString(),
        createdBy: recipient1.id,
    },
    {
        id: "M2",
        conversationId: "C1",
        content: "Hello Monika!",
        createdAt: new Date(2021, 10, 5, 14, 39).toString(),
        createdBy: user.id,
    },
    {
        id: "M3",
        conversationId: "C2",
        content: "Wagwan bro",
        createdAt: new Date(2021, 10, 7, 17, 12).toString(),
        createdBy: user.id,
    },
    {
        id: "M4",
        conversationId: "C2",
        content: "This is a really long mesasage u cuck",
        createdAt: new Date(2021, 10, 7, 18, 55).toString(),
        createdBy: recipient2.id,
    },
    {
        id: "M4",
        conversationId: "C2",
        content: "This is a another really long mesasage....asasdasd test",
        createdAt: new Date(2021, 10, 7, 18, 59).toString(),
        createdBy: recipient2.id,
    },
];
