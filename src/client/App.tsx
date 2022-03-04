import { useHistory } from "@hooks";
import {
    Headerbar,
    HeaderbarLink,
    Container,
    Footerbar,
    FooterbarContent,
    FooterbarText,
    IconLink,
} from "@components";

import { SessionContextProvider, AppContextProvider } from "@context";
import HomePage from "./routes/home";
import ChatPage from "./routes/chat";
import AboutPage from "./routes/about";
import NotFoundPage from "./routes/notfound";

function App() {
    const history = useHistory();

    function route() {
        switch (history.path) {
            case "/":
                return <HomePage />;
            case "/chat":
                return <ChatPage />;
            case "/about":
                return <AboutPage />;
            default:
                return <NotFoundPage />;
        }
    }

    return (
        <>
            <Headerbar>
                <HeaderbarLink href="/">HOME</HeaderbarLink>
                <HeaderbarLink href="/chat">CHAT</HeaderbarLink>
                <HeaderbarLink href="/about">ABOUT</HeaderbarLink>
            </Headerbar>
            <Container>
                <SessionContextProvider>
                    <AppContextProvider>{route()}</AppContextProvider>
                </SessionContextProvider>
            </Container>
            <Footerbar>
                <FooterbarContent left>
                    <FooterbarText>
                        Built with Preact, TypeScript & SASS.
                    </FooterbarText>
                </FooterbarContent>
                <FooterbarContent middle>
                    <IconLink
                        external
                        href="https://github.com/jasperhaward"
                        icon={["fab", "github"]}
                    />
                    <IconLink
                        external
                        href="https://www.linkedin.com/in/jhaward"
                        icon={["fab", "linkedin"]}
                    />
                    <IconLink
                        external
                        href="https://steamcommunity.com/id/ric0o"
                        icon={["fab", "steam"]}
                    />
                    <IconLink
                        external
                        href="mailto:jasperhaward@virginmedia.com"
                        icon={["fas", "envelope"]}
                    />
                </FooterbarContent>
                <FooterbarContent right>
                    <FooterbarText>
                        © 2021 Jasper Haward, All Rights Reserved.
                    </FooterbarText>
                </FooterbarContent>
            </Footerbar>
        </>
    );
}

export default App;
