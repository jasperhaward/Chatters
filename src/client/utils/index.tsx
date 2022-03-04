export function generateId() {
    var arr = new Uint8Array(40 / 2);
    crypto.getRandomValues(arr);

    const dec2hex = (dec: number) => dec.toString(16).padStart(2, "0");

    return Array.from(arr, dec2hex).join("");
}

type ObjectWithId = {
    id: string;
};

declare global {
    interface Array<T> {
        remove<T extends ObjectWithId>(this: T[], id: string): T[];
    }
}

Array.prototype.remove = function <T extends ObjectWithId>(
    this: T[],
    id: string
): T[] {
    return this.filter((e) => e.id !== id);
};
