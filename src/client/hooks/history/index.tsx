import { useState } from "preact/hooks";
import { History } from "./types";

export function useHistory(): History {
    const [path, setPath] = useState<string>(location.pathname);

    const { pushState } = history;

    history.pushState = (...args) => {
        setPath(args[2].toString());
        pushState.apply(window.history, args);
    };

    window.onpopstate = (event) => {
        const { location } = event.currentTarget as Window;

        if (location.pathname !== path) {
            setPath(location.pathname);
        }
    };

    const push = (path: string) => history.pushState(null, null, path);

    return { path, push };
}

export * from "./types";
