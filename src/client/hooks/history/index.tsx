import { useState } from "preact/hooks";
import { History } from "./types";

function useHistory(): History {
    const [path, setPath] = useState<string>(location.pathname);

    const { pushState } = history;

    history.pushState = (data, unused, url) => {
        setPath(url.toString());
        pushState.apply(window.history, [data, unused, url]);
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

export { History, useHistory };
