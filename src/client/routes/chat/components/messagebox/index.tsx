import type { JSX } from "preact";
import { Input, IconButton } from "@components";

type MessageBoxProps = {
    name: string;
    value: string;
    onInput: (event: JSX.TargetedEvent<HTMLInputElement>) => void;
    onSubmit: (event: JSX.TargetedEvent<HTMLFormElement>) => void;
}

function MessageBox({ name, value, onInput, onSubmit }: MessageBoxProps) {
    return (
        <form name="submitMessage" onSubmit={onSubmit}>
            <Input
                name={name}
                placeholder="Type a message..."
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