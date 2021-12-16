import type { JSX } from "preact";
import { IconButton } from "@components";
import { FormEvent } from "@hooks";
import styles from "./styles.scss";

export interface SearchBoxProps {
    name: string;
    value: string;
    onInput: (event: FormEvent) => void;
    onClick: (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => void;
}

export default function SearchBox({ name, value, onInput, onClick }: SearchBoxProps) {
    const disabled = value === "";

    return (
        <div className={styles.search}>
            <input placeholder="Search" name={name} value={value} onInput={onInput} />
            <IconButton
                name="clearSearch"
                icon={["fas", disabled ? "search" : "times"]}
                disabled={disabled}
                onClick={onClick}
            />
        </div>
    );
}
