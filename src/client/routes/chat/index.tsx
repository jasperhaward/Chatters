import { JSX } from "preact";
import { useState } from "preact/hooks";
import styles from "./styles.scss";

import { useForm } from "@hooks";
import { Button } from "@components";

import * as variables from "./variables";
import { User, Inputs, Conversation } from "./types";

import ConversationHandler from "./handler";
import ConversationComponent from "./components/conversation";
import SearchBox from "./components/searchbox";
import MessagesWindow from "./components/messageswindow";
import MessageBox from "./components/messagebox";

function ChatPage() {
    const [user, setUser] = useState<User>(variables.user);
    const [users, setUsers] = useState<User[]>(variables.users);
    const [inputs, onInput, setInput] = useForm<Inputs>({
        search: "",
        message: "",
    });

    const { selected, setSelectedId, conversations, dispatch } = ConversationHandler(
        variables.conversations
    );

    function onClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
        const { name, id } = event.currentTarget;

        switch (name) {
            case "selectConversation":
                setInput({ message: "" });
                setSelectedId(id);
                break;
            case "clearSearch":
                setInput({ search: "" });
                break;
        }
    }

    function onSubmit(event: JSX.TargetedEvent<HTMLFormElement>) {
        event.preventDefault();

        const { name } = event.currentTarget;
        
        switch (name) {
            case "submitSearch":
                break;
            case "submitMessage":
                dispatch({
                    type: "send",
                    message: {
                        content: inputs.message,
                        createdBy: user.id,
                    },
                });
                setInput({ message: "" });
                break;
        }
    }

    function getConversationHeader(conversation: Conversation) {
        const { users } = conversation;

        if (users.length === 1) {
            const { firstName, lastName } = users[0];
            return firstName + " " + lastName;
        } else {
            return users.map((user) => user.firstName).join(", ");
        }
    }

    return (
        <div className={styles.page}>
            <section id="conversations">
                <div className={styles.controls}>
                    <SearchBox
                        name="search"
                        value={inputs.search}
                        onInput={onInput}
                        onClick={onClick}
                        onSubmit={onSubmit}
                    />
                </div>
                <div className={styles.conversations}>
                    {conversations.map((conversation) => (
                        <ConversationComponent
                            key={conversation}
                            name="selectConversation"
                            isSelected={conversation === selected}
                            header={getConversationHeader(conversation)}
                            conversation={conversation}
                            onClick={onClick}
                        />
                    ))}
                </div>
                <Button name="newConversation" primary onClick={onClick}>
                    New Conversation
                </Button>
            </section>
            <section id="messages">
                <header>
                    {getConversationHeader(selected)}
                </header>
                <MessagesWindow 
                    messages={selected.messages.slice().reverse()}
                    user={user}
                    users={users}
                />
                <div className={styles.controls}>
                    <MessageBox
                        name="message"
                        value={inputs.message}
                        onInput={onInput}
                        onSubmit={onSubmit}
                    />
                </div>
            </section>
        </div>
    );
}

export default ChatPage;
