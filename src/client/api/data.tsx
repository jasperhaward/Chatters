import { User, Conversation } from "@types";

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
    firstName: "Benedict",
    lastName: "Ng",
    avatar: "images/users/profiles/ben.jpg",
};

export const recipient3: User = {
    id: "U4",
    firstName: "Tim",
    lastName: "Bracken",
    avatar: "images/users/profiles/tim.jpg",
};

export const recipient4: User = {
    id: "U4",
    firstName: "John",
    lastName: "Van Hoof",
    avatar: "images/users/profiles/john.jpg",
};

export const recipient5: User = {
    id: "U4",
    firstName: "Alasdair",
    lastName: "Dibben",
    avatar: "images/users/profiles/alasdair.jpg",
};

export const contacts: User[] = [
    recipient1,
    recipient2,
    recipient3,
    recipient4,
    recipient5,
];

export const conversations: Conversation[] = [
    {
        id: "C-1",
        title: "Gaymers",
        recipients: [recipient1, recipient2],
        messages: [
            {
                id: "M3",
                conversationId: "C10",
                content: "Today we get 3K elo!",
                createdAt: new Date(2022, 0, 16, 13, 12).toString(),
                createdBy: recipient2.id,
            },
            {
                id: "M3",
                conversationId: "C10",
                content: "Lets go lads",
                createdAt: new Date(2022, 0, 16, 11, 12).toString(),
                createdBy: recipient2.id,
            },
        ],
    },
    {
        id: "C0",
        recipients: [recipient1, recipient2, recipient3],
        messages: [
            {
                id: "M1",
                conversationId: "C0",
                content: "How is everyone doing?!",
                createdAt: new Date(2022, 0, 3, 15, 36).toString(),
                createdBy: recipient1.id,
            },
            {
                id: "M1",
                conversationId: "C0",
                content: "Hello guys!",
                createdAt: new Date(2022, 0, 3, 15, 38).toString(),
                createdBy: recipient1.id,
            },
            {
                id: "M3",
                conversationId: "C0",
                content: "Will see you soon",
                createdAt: new Date(2022, 0, 3, 15, 12).toString(),
                createdBy: user.id,
            },
            {
                id: "M3",
                conversationId: "C0",
                content: "Hope you all had a good new year",
                createdAt: new Date(2022, 0, 3, 15, 11).toString(),
                createdBy: user.id,
            },
            {
                id: "M3",
                conversationId: "C0",
                content: "Hello all!",
                createdAt: new Date(2022, 0, 3, 15, 11).toString(),
                createdBy: user.id,
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
                id: "M2",
                conversationId: "C1",
                content: "Hello Monika!",
                createdAt: new Date(2021, 11, 7, 13, 23).toString(),
                createdBy: user.id,
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
                id: "M3",
                conversationId: "C2",
                content: "Wagwan was going to ask about your shotgun",
                createdAt: new Date(2021, 10, 7, 18, 58).toString(),
                createdBy: recipient3.id,
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
