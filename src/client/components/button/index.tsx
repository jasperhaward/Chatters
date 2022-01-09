import type { JSX, VNode } from "preact";
import styles from "./styles.scss";

export type ButtonProps = {
    type?: string;
    id?: string;
    name?: string;
    title?: string;
    primary?: boolean;
    disabled?: boolean;
    onClick?: (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => void;
    children: string | VNode | VNode[];
};

export function Button({
    type,
    id,
    name,
    title,
    primary,
    disabled,
    onClick,
    children,
}: ButtonProps) {
    var className = styles.button;

    if (primary) className += " " + styles.primary;

    return (
        <button
            className={className}
            type={type}
            id={id}
            name={name}
            title={title}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
