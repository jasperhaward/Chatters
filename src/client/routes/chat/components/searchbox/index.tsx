import type { JSX } from "preact";
import { Input, IconButton } from "@components";

interface SearchBoxProps {
    name: string;
    value: string;
    onInput: (event: JSX.TargetedEvent<HTMLInputElement>) => void;
    onClear: () => void;
    onSubmit: () => void;
}

function SearchBox({
    name,
    value,
    onInput,
    onClear,
    onSubmit,
}: SearchBoxProps) {
    const disabled = value === "";

    function _onSubmit(event: JSX.TargetedEvent<HTMLFormElement>) {
        event.preventDefault();
        onSubmit();
    }

    return (
        <form onSubmit={_onSubmit}>
            <Input
                placeholder="Search"
                name={name}
                value={value}
                onInput={onInput}
            />
            <IconButton
                icon={["fas", disabled ? "search" : "times"]}
                disabled={disabled}
                onClick={onClear}
            />
        </form>
    );
}

export default SearchBox;
