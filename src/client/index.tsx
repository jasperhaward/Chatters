if (process.env.NODE_ENV === "development") {
    require("preact/debug");
}

import { render } from "preact";
import App from "./App";
import "./index.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faEnvelope,
    faUser,
    faUserCircle,
    faSearch,
    faTimes,
    faPaperPlane,
    faUsers,
    faUserFriends,
    faListUl,
} from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithub,
    faSteam,
} from "@fortawesome/free-brands-svg-icons";

library.add({
    faEnvelope,
    faUser,
    faUserCircle,
    faLinkedin,
    faGithub,
    faSteam,
    faSearch,
    faTimes,
    faPaperPlane,
    faUsers,
    faUserFriends,
    faListUl,
});

render(<App />, document.body);
