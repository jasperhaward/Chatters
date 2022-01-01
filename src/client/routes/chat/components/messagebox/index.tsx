import type { JSX } from "preact";
import { IconButton } from "@components";
import { FormEvent } from "@hooks";
import styles from "./styles.scss";

interface MessageBoxProps {
    name: string;
    value: string;
    onInput: (event: FormEvent) => void;
    onSubmit: JSX.EventHandler<JSX.TargetedEvent<HTMLFormElement>>;
}

function MessageBox({ name, value, onInput, onSubmit }: MessageBoxProps) {
    return (
        <form className={styles.search} onSubmit={onSubmit}>
            <input
                placeholder="Enter message..."
                name={name}
                autoComplete="off"
                value={value}
                onInput={onInput}
            />
            {value !== "" && (
                <IconButton type="submit" icon={["fas", "paper-plane"]} />
            )}
        </form>
    );
}

export default MessageBox;