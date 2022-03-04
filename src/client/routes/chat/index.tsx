import {
    useState,
    useEffect,
    useContext,
    useReducer,
    Reducer,
} from "preact/hooks";
import styles from "./styles.scss";

import { User, Conversation } from "@types";
import { useForm } from "@hooks";
import { SessionContext, AppContext } from "@context";
import * as thunks from "@thunks";
import { Button, IconButton } from "@components";

import * as utils from "./utils";
import { Inputs } from "./types";

import UserMenu from "./UserMenu";
import Avatar from "./Avatar";
import ConversationComponent from "./Conversation";
import SearchBox from "./SearchBox";
import MessageBox from "./MessageBox";
import MessagesWindow from "./MessagesWindow";

function ChatPage() {
    const [{ user }] = useContext(SessionContext);
    const [{ contacts, conversations }, dispatch] = useContext(AppContext);

    const [selectedId, setSelectedId] = useState<string>();
    const [inputs, onInput, setInput] = useForm<Inputs>({
        search: "",
        message: "",
    });

    const selected = conversations?.find((conversation) => {
        return conversation.id === selectedId;
    });

    useEffect(() => {
        if (user) {
            dispatch(thunks.initialise({ userId: user.id }));
        }
    }, [user]);

    useEffect(() => {
        if (conversations) {
            setSelectedId(conversations[0].id);
        }
    }, [conversations]);

    function onConversationClick(id: string) {
        setInput({ message: "" });
        setSelectedId(id);
    }

    function onClearSearchClick() {
        setInput({ search: "" });
    }

    function onSearchSubmit() {}

    function onMessageSubmit() {
        const message = {
            conversationId: selected.id,
            content: inputs.message,
            createdBy: user.id,
        };

        dispatch(thunks.sendMessage(message));
        setInput({ message: "" });
    }

    return (
        <div className={styles.page}>
            <UserMenu />
            {selected && (
                <>
                    <section id="navigation">
                        <header>Recents</header>
                        <SearchBox
                            name="search"
                            value={inputs.search}
                            onInput={onInput}
                            onClick={onClearSearchClick}
                            onSubmit={onSearchSubmit}
                        />
                        <div>
                            {conversations.map((conversation) => (
                                <ConversationComponent
                                    key={conversation.id}
                                    selected={conversation.id === selected.id}
                                    user={user}
                                    contacts={contacts}
                                    conversation={conversation}
                                    onClick={onConversationClick}
                                />
                            ))}
                        </div>
                        <Button primary>New chat</Button>
                    </section>
                    <section id="messages">
                        <header>
                            <Avatar
                                md
                                src={utils.getConversationAvatar(selected)}
                            />
                            <div>
                                <span>
                                    {utils.getConversationHeader(selected)}
                                </span>
                                <div>
                                    {selected.recipients.length > 1
                                        ? selected.recipients.length +
                                          " members"
                                        : "Last message 2 hours ago"}
                                </div>
                            </div>
                            <IconButton icon={["fas", "search"]} />
                            <IconButton icon={["fas", "user-plus"]} />
                        </header>
                        <MessagesWindow
                            messages={selected.messages.slice().reverse()}
                            user={user}
                            contacts={contacts}
                        />
                        <MessageBox
                            name="message"
                            value={inputs.message}
                            onInput={onInput}
                            onSubmit={onMessageSubmit}
                        />
                    </section>
                </>
            )}
        </div>
    );
}

export default ChatPage;
