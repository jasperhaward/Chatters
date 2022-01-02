import { Icon, IconProps, ButtonProps } from "@components";
import styles from "./styles.scss";

export type IconButtonProps = Omit<ButtonProps, "primary" | "children"> & IconProps;

export function IconButton({ 
    type, 
    id, 
    name, 
    disabled, 
    icon, 
    onClick 
}: IconButtonProps) {
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
