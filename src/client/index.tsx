import { render } from "preact";
import App from "./App";
import "./index.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithub,
    faSteam,
} from "@fortawesome/free-brands-svg-icons";

library.add({
    faEnvelope,
    faLinkedin,
    faGithub,
    faSteam,
});

render(<App />, document.body);
