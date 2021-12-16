import { Conversation } from "./types";

export const isToday = (date: Date) => {
    return date.getTime() > new Date().setHours(0, 0, 0, 0);
};

export const isYesterday = (date: Date) => {
    var day = 24 * 60 * 60 * 1000;
    return date.getTime() > new Date().setHours(0, 0, 0, 0) - day;
};

export const isSameWeek = (date: Date) => {
    var week = 7 * 24 * 60 * 60 * 1000;
    return date.getTime() > new Date().setHours(0, 0, 0, 0) - week;
};

export const isSameYear = (date: Date) => {
    var year = 365 * 24 * 60 * 60 * 1000;
    return date.getTime() > new Date().setHours(0, 0, 0, 0) - year;
};

export const getTimeStamp = (input: string | Conversation, detailed?: boolean) => {
    if (typeof input !== "string") {
        input = input.messages[0].createdAt;
    }

    var date = new Date(input);

    if (isToday(date)) {
        return detailed
            ? date.toLocaleString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
              })
            : "Today";
    } else if (isYesterday(date)) {
        return "Yesterday";
    } else if (isSameWeek(date)) {
        return date.toLocaleDateString("en-GB", {
            weekday: "long",
        });
    } else if (isSameYear(date)) {
        return detailed
            ? date.toLocaleString("en-GB", {
                  day: "numeric",
                  month: "short",
              })
            : date.toLocaleString("en-GB", {
                  month: "long",
              });
    } else {
        return detailed
            ? date.toLocaleString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
              })
            : date.toLocaleString("en-GB", {
                  year: "numeric",
              });
    }
};
