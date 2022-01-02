import { JSX } from "preact";

// prettier-ignore
export type FormEvent = JSX.TargetedEvent<HTMLInputElement | HTMLSelectElement, InputEvent> & {
    currentTarget: HTMLInputElement;
}

export type FormInputs = {
    [key: string]: string | boolean;
}

export type Form<T extends FormInputs> = [
    T,
    (event: FormEvent) => void,
    (newState: Partial<T>) => void
];
