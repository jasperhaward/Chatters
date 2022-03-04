import { Conversation, Message } from "@types";

// DATE UTILS

export const isToday = (date: Date) => {
    return date.getTime() > new Date().setHours(0, 0, 0, 0);
};

export const isYesterday = (date: Date) => {
    var day = 24 * 60 * 60 * 1000;
    return date.getTime() > new Date().setHours(0, 0, 0, 0) - day;
};

export const isThisWeek = (date: Date) => {
    var week = 7 * 24 * 60 * 60 * 1000;
    return date.getTime() > new Date().setHours(0, 0, 0, 0) - week;
};

export const isThisYear = (date: Date) => {
    var year = 365 * 24 * 60 * 60 * 1000;
    return date.getTime() > new Date().setHours(0, 0, 0, 0) - year;
};

// CONVERSATION UTILS

export function getConversationHeader(conversation: Conversation) {
    const { title, recipients } = conversation;

    if (title) {
        return title;
    } else if (recipients.length === 1) {
        const { firstName, lastName } = recipients[0];
        return firstName + " " + lastName;
    } else {
        return recipients.map((recipient) => recipient.firstName).join(", ");
    }
}

export function getConversationAvatar(conversation: Conversation) {
    const { avatar, recipients } = conversation;

    if (avatar) {
        return avatar;
    } else if (recipients.length === 1) {
        return recipients[0].avatar;
    } else {
        return recipients.map((recipient) => recipient.avatar);
    }
}

// MESSAGE UTILS

export function sentWithinFiveMins(message1: Message, message2: Message) {
    const FIVE_MINS = 5 * 60 * 1000;

    const date1 = new Date(message1.createdAt);
    const date2 = new Date(message2.createdAt);

    return (
        date1.getTime() <= date2.getTime() + FIVE_MINS &&
        date1.getTime() >= date2.getTime() - FIVE_MINS
    );
}

export function sentSameDay(message1: Message, message2: Message) {
    const date1 = new Date(message1.createdAt);
    const date2 = new Date(message2.createdAt);

    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}
