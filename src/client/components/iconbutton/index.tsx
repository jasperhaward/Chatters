import type { JSX } from "preact";
import { Icon, IconProps } from "@components";
import styles from "./styles.scss";

export interface IconButtonProps extends IconProps {
    id?: string;
    name?: string;
    disabled?: boolean;
    onClick: (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => void;
}

export function IconButton({ id, name, disabled, icon, onClick }: IconButtonProps) {
    return (
        <button
            className={styles.iconButton}
            id={id}
            name={name}
            disabled={disabled}
            onClick={onClick}
        >
            <Icon icon={icon} />
        </button>
    );
}
