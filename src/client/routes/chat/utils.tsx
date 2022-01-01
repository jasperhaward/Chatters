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

export const isSameDay = (date1: Date, date2: Date) => {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}

export const isWithinFiveMins = (date1: Date, date2: Date) => {
    const fiveMins = 5 * 60 * 1000;

    return (
        date1.getTime() <= date2.getTime() + fiveMins &&
        date1.getTime() >= date2.getTime() - fiveMins 
    );
}