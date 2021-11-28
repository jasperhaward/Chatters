import { useHistory } from "@hooks";
import {
    Navbar,
    Navlink,
    Container,
    Footerbar,
    FooterbarContent,
    Icon,
    Link,
} from "@components";
import styles from "./App.module.scss";

import HomePage from "./routes/index";
import ChatPage from "./routes/chat";
import NotFoundPage from "./routes/notfound";

function App() {
    const history = useHistory();

    function render() {
        switch (history.path) {
            case "/":
                return <HomePage />;
            case "/chat":
                return <ChatPage />;
            default:
                return <NotFoundPage />;
        }
    }

    return (
        <>
            <Navbar>
                <Navlink href="/">HOME</Navlink>
                <Navlink href="/chat">CHAT</Navlink>
            </Navbar>
            <Container>{render()}</Container>
            <Footerbar>
                <FooterbarContent position="left">
                    <span className={styles.text}>
                        Built with Preact, TypeScript & SASS.
                    </span>
                </FooterbarContent>
                <FooterbarContent position="middle">
                    <div className={styles.links}>
                        <Link external href="https://github.com/jasperhaward">
                            <Icon icon={["fab", "github"]} />
                        </Link>
                        <Link external href="https://www.linkedin.com/in/jhaward">
                            <Icon icon={["fab", "linkedin"]} />
                        </Link>
                        <Link external href="https://steamcommunity.com/id/ric0o">
                            <Icon icon={["fab", "steam"]} />
                        </Link>
                        <Link external href="mailto:jasperhaward@virginmedia.com">
                            <Icon icon={["fas", "envelope"]} />
                        </Link>
                    </div>
                </FooterbarContent>
                <FooterbarContent position="right">
                    <span className={styles.text}>
                        © 2021 Jasper Haward, All Rights Reserved.
                    </span>
                </FooterbarContent>
            </Footerbar>
        </>
    );
}

export default App;
