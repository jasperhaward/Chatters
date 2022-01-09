import { User, Conversation } from "./types";

export const user: User = {
    id: "U1",
    firstName: "Jasper",
    lastName: "Haward",
    avatar: "images/users/profiles/jasper.jpg",
};

export const recipient1: User = {
    id: "U2",
    firstName: "Monika",
    lastName: "Rahne",
    avatar: "images/users/profiles/monika.jpg",
};

export const recipient2: User = {
    id: "U3",
    firstName: "Ben",
    lastName: "James",
};

export const recipient3: User = {
    id: "U4",
    firstName: "Tim",
    lastName: "Bracken",
    avatar: "images/users/profiles/tim.jpg",
};

export const contacts: User[] = [recipient1, recipient2, recipient3];

export const conversations: Conversation[] = [
    {
        id: "C0",
        recipients: [recipient1, recipient2, recipient3],
        messages: [
            {
                id: "M3",
                conversationId: "C0",
                content: "Hello all!",
                createdAt: new Date(2022, 0, 3, 16, 12).toString(),
                createdBy: user.id,
            },
            {
                id: "M1",
                conversationId: "C0",
                content: "Hello guys!",
                createdAt: new Date(2022, 0, 3, 15, 36).toString(),
                createdBy: recipient1.id,
            },
            {
                id: "M2",
                conversationId: "C0",
                content: "Hello Monika!",
                createdAt: new Date(2022, 0, 3, 14, 59).toString(),
                createdBy: recipient2.id,
            },
            {
                id: "M3",
                conversationId: "C0",
                content: "Hello Hello Tim!",
                createdAt: new Date(2022, 0, 3, 11, 12).toString(),
                createdBy: recipient2.id,
            },
        ],
    },
    {
        id: "C1",
        recipients: [recipient1],
        messages: [
            {
                id: "M1",
                conversationId: "C1",
                content: "Hello!",
                createdAt: new Date(2021, 11, 7, 14, 36).toString(),
                createdBy: recipient1.id,
            },
            {
                id: "M2",
                conversationId: "C1",
                content: "Hello Monika!",
                createdAt: new Date(2021, 11, 7, 13, 23).toString(),
                createdBy: user.id,
            },
            {
                id: "M1",
                conversationId: "C1",
                content: "Hello!",
                createdAt: new Date(2021, 11, 7, 14, 36).toString(),
                createdBy: recipient1.id,
            },
            {
                id: "M2",
                conversationId: "C1",
                content: "Hello Monika!",
                createdAt: new Date(2021, 11, 7, 13, 23).toString(),
                createdBy: user.id,
            },
            {
                id: "M1",
                conversationId: "C1",
                content: "Hello!",
                createdAt: new Date(2021, 11, 7, 14, 36).toString(),
                createdBy: recipient1.id,
            },
            {
                id: "M2",
                conversationId: "C1",
                content: "Hello Monika!",
                createdAt: new Date(2021, 11, 7, 13, 23).toString(),
                createdBy: user.id,
            },
            {
                id: "M1",
                conversationId: "C1",
                content: "Hello!",
                createdAt: new Date(2021, 11, 7, 14, 36).toString(),
                createdBy: recipient1.id,
            },
            {
                id: "M2",
                conversationId: "C1",
                content: "Hello Monika!",
                createdAt: new Date(2021, 11, 7, 13, 23).toString(),
                createdBy: user.id,
            },
            {
                id: "M1",
                conversationId: "C1",
                content: "Hello!",
                createdAt: new Date(2021, 11, 7, 14, 36).toString(),
                createdBy: recipient1.id,
            },
            {
                id: "M2",
                conversationId: "C1",
                content: "Hello Monika!",
                createdAt: new Date(2021, 11, 7, 13, 23).toString(),
                createdBy: user.id,
            },
            {
                id: "M1",
                conversationId: "C1",
                content: "Hello!",
                createdAt: new Date(2021, 11, 7, 14, 36).toString(),
                createdBy: recipient1.id,
            },
            {
                id: "M2",
                conversationId: "C1",
                content: "Hello Monika!",
                createdAt: new Date(2021, 11, 7, 13, 23).toString(),
                createdBy: user.id,
            },
            {
                id: "M1",
                conversationId: "C1",
                content: "Hello!",
                createdAt: new Date(2021, 11, 7, 14, 36).toString(),
                createdBy: recipient1.id,
            },
            {
                id: "M2",
                conversationId: "C1",
                content: "Hello Monika!",
                createdAt: new Date(2021, 11, 7, 13, 23).toString(),
                createdBy: user.id,
            },
            {
                id: "M1",
                conversationId: "C1",
                content: "Hello!",
                createdAt: new Date(2021, 11, 7, 14, 36).toString(),
                createdBy: recipient1.id,
            },
            {
                id: "M2",
                conversationId: "C1",
                content: "Hello Monika!",
                createdAt: new Date(2021, 11, 7, 13, 23).toString(),
                createdBy: user.id,
            },
            {
                id: "M1",
                conversationId: "C1",
                content: "Hello!",
                createdAt: new Date(2021, 11, 7, 14, 36).toString(),
                createdBy: recipient1.id,
            },
            {
                id: "M2",
                conversationId: "C1",
                content: "Hello Monika!",
                createdAt: new Date(2021, 11, 7, 13, 23).toString(),
                createdBy: user.id,
            },
            {
                id: "M1",
                conversationId: "C1",
                content: "Hello!",
                createdAt: new Date(2021, 11, 7, 14, 36).toString(),
                createdBy: recipient1.id,
            },
            {
                id: "M2",
                conversationId: "C1",
                content: "Hello Monika!",
                createdAt: new Date(2021, 11, 7, 13, 23).toString(),
                createdBy: user.id,
            },
        ],
    },
    {
        id: "C2",
        recipients: [recipient2],
        messages: [
            {
                id: "M3",
                conversationId: "C2",
                content:
                    "This is a another really long mesasage....reallllyyyy longggg messsage for testing shit",
                createdAt: new Date(2021, 11, 6, 16, 56).toString(),
                createdBy: user.id,
            },
            {
                id: "M4",
                conversationId: "C2",
                content: "This is a really long mesasage u cuck",
                createdAt: new Date(2021, 11, 6, 15, 52).toString(),
                createdBy: recipient2.id,
            },
            {
                id: "M4",
                conversationId: "C2",
                content: "How are you?",
                createdAt: new Date(2021, 11, 6, 15, 12).toString(),
                createdBy: user.id,
            },
        ],
    },
    {
        id: "C3",
        recipients: [recipient3],
        messages: [
            {
                id: "M3",
                conversationId: "C2",
                content: "Wagwan bro",
                createdAt: new Date(2021, 11, 2, 17, 12).toString(),
                createdBy: user.id,
            },
            {
                id: "M4",
                conversationId: "C2",
                content: "This is a really long mesasage u cuck",
                createdAt: new Date(2021, 10, 7, 18, 55).toString(),
                createdBy: recipient3.id,
            },
        ],
    },
];
