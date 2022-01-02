import type { JSX } from "preact";
import { Input, IconButton } from "@components";

interface SearchBoxProps {
    name: string;
    value: string;
    onInput: (event: JSX.TargetedEvent<HTMLInputElement>) => void;
    onClick: (event: JSX.TargetedEvent<HTMLButtonElement>) => void;
    onSubmit: (event: JSX.TargetedEvent<HTMLFormElement>) => void;
}

function SearchBox({ name, value, onInput, onClick, onSubmit }: SearchBoxProps) {
    const disabled = value === "";

    return (
        <form name="submitSearch" onSubmit={onSubmit}>
            <Input
                name={name}
                placeholder="Search"  
                value={value} 
                onInput={onInput} 
            />
            <IconButton
                name="clearSearch"
                icon={["fas", disabled ? "search" : "times"]}
                disabled={disabled}
                onClick={onClick}
            />
        </form>
    );
}

export default SearchBox;