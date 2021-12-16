import type { JSX } from "preact";
import { IconButton } from "@components";
import { FormEvent } from "@hooks";
import styles from "./styles.scss";

export interface MessageBoxProps {
    name: string;
    value: string;
    onInput: (event: FormEvent) => void;
    onClick: (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => void;
}

export default function MessageBox({ name, value, onInput, onClick }: MessageBoxProps) {
    return (
        <div className={styles.search}>
            <input
                placeholder="Enter message..."
                name={name}
                value={value}
                onInput={onInput}
            />
            {value !== "" && (
                <IconButton
                    name="sendMessage"
                    icon={["fas", "paper-plane"]}
                    onClick={onClick}
                />
            )}
        </div>
    );
}
