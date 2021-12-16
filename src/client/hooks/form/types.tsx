import { JSX } from "preact";

// prettier-ignore
export interface FormEvent extends JSX.TargetedEvent<HTMLInputElement | HTMLSelectElement, InputEvent> {
    currentTarget: HTMLInputElement;
}

export interface FormInputs {
    [key: string]: string | boolean;
}

export type Form<T extends FormInputs> = [
    T,
    (event: FormEvent) => void,
    (newState: Partial<T>) => void
];
