import type { JSX } from "preact";
import styles from "./index.scss";

import { Icon, Input, IconButton } from "@components";

interface SearchBoxProps {
    name: string;
    value: string;
    onInput: (event: JSX.TargetedEvent<HTMLInputElement>) => void;
    onClick: () => void;
    onSubmit: () => void;
}

function SearchBox({
    name,
    value,
    onInput,
    onClick,
    onSubmit,
}: SearchBoxProps) {
    function onSubmitWrapper(event: JSX.TargetedEvent<HTMLFormElement>) {
        event.preventDefault();
        onSubmit();
    }

    return (
        <form className={styles.search} onSubmit={onSubmitWrapper}>
            <Icon icon={["fas", "search"]} />
            <Input
                placeholder="Search"
                name={name}
                value={value}
                onInput={onInput}
            />
            {value !== "" && (
                <IconButton icon={["fas", "times"]} onClick={onClick} />
            )}
        </form>
    );
}

export default SearchBox;
