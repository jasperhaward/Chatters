export const isToday = (date: Date) => {
    return date.getTime() > new Date().setHours(0, 0, 0, 0);
}

export const isYesterday = (date: Date) => {
    var day = 24 * 60 * 60 * 1000;
    return date.getTime() > new Date().setHours(0, 0, 0, 0) - day;
}

export const isThisWeek = (date: Date) => {
    var week = 7 * 24 * 60 * 60 * 1000;
    return date.getTime() > new Date().setHours(0, 0, 0, 0) - week;
}

export const isThisYear = (date: Date) => {
    var year = 365 * 24 * 60 * 60 * 1000;
    return date.getTime() > new Date().setHours(0, 0, 0, 0) - year;
}