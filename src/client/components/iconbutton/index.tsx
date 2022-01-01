import type { JSX } from "preact";
import { Icon, IconProps } from "@components";
import styles from "./styles.scss";

export interface IconButtonProps extends IconProps {
    type?: string;
    id?: string;
    name?: string;
    disabled?: boolean;
    onClick?: (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => void;
}

export function IconButton({ type, id, name, disabled, icon, onClick }: IconButtonProps) {
    return (
        <button
            className={styles.iconButton}
            type={type}
            id={id}
            name={name}
            disabled={disabled}
            onClick={onClick}
        >
            <Icon icon={icon} />
        </button>
    );
}
