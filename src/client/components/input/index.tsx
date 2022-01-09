import type { JSX } from "preact";
import styles from "./styles.scss";

export type InputProps = {
    type?: "text" | "email" | "password" | "number";
    id?: string;
    name?: string;
    title?: string;
    placeholder?: string;
    autoComplete?: "on" | "off";
    disabled?: boolean;
    value: string;
    onInput?: (event: JSX.TargetedEvent<HTMLInputElement, InputEvent>) => void;
};

export function Input({
    type,
    id,
    name,
    title,
    placeholder,
    autoComplete,
    disabled,
    value,
    onInput,
}: InputProps) {
    return (
        <input
            className={styles.input}
            type={type}
            id={id}
            name={name}
            title={title}
            placeholder={placeholder}
            autoComplete={autoComplete}
            disabled={disabled}
            value={value}
            onInput={onInput}
        />
    );
}
