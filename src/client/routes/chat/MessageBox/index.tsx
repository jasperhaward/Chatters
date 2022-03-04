import type { JSX } from "preact";
import styles from "./index.scss";

import { Input, IconButton } from "@components";

type MessageBoxProps = {
    name: string;
    value: string;
    onInput: (event: JSX.TargetedEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
};

function MessageBox({ name, value, onInput, onSubmit }: MessageBoxProps) {
    function onSubmitWrapper(event: JSX.TargetedEvent<HTMLFormElement>) {
        event.preventDefault();
        onSubmit();
    }

    return (
        <form className={styles.message} onSubmit={onSubmitWrapper}>
            <Input
                placeholder="Write a message..."
                autoComplete="off"
                name={name}
                value={value}
                onInput={onInput}
            />
            <IconButton
                type="submit"
                disabled={value === ""}
                icon={["fas", "paper-plane"]}
            />
        </form>
    );
}

export default MessageBox;
