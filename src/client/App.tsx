import { useHistory } from "@hooks";
import { Navlink, Navbar } from "@components";

import HomePage from "./routes/index";
import ChatPage from "./routes/chat";
import NotFoundPage from "./routes/notfound";

import "./App.scss";

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
            {render()}
        </>
    );
}

export default App;
