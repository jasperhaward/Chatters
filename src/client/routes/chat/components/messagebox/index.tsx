import type { JSX } from "preact";
import { Input, IconButton } from "@components";

type MessageBoxProps = {
    name: string;
    value: string;
    onInput: (event: JSX.TargetedEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
};

function MessageBox({ name, value, onInput, onSubmit }: MessageBoxProps) {
    function _onSubmit(event: JSX.TargetedEvent<HTMLFormElement>) {
        event.preventDefault();
        onSubmit();
    }

    return (
        <form onSubmit={_onSubmit}>
            <Input
                placeholder="Type a message..."
                autoComplete="off"
                name={name}
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
