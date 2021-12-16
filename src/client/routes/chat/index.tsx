import { JSX, Fragment } from "preact";
import { useState } from "preact/hooks";
import { useForm } from "@hooks";
import styles from "./styles.scss";

import * as variables from "./variables";
import * as utils from "./utils";
import { User, Inputs } from "./types";

import ConversationHandler from "./handler";
import ConversationComponent from "./components/conversation";
import SearchBox from "./components/searchbox";
import Divider from "./components/divider";
import MessageComponent from "./components/message";
import MessageBox from "./components/messagebox";

function ChatPage() {
    const [user, setUser] = useState<User>(variables.user);
    const [users, setUsers] = useState<User[]>(variables.users);
    const [inputs, onInput, setInput] = useForm<Inputs>({
        search: "",
        message: "",
    });

    // prettier-ignore
    const { 
        selected, 
        select, 
        conversations, 
        dispatch 
    } = ConversationHandler(variables.conversations);

    function onClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
        const { name, id } = event.currentTarget;

        const index = parseInt(id);

        switch (name) {
            case "selectConversation":
                setInput({ message: "" });
                select(index);
                break;
            case "clearSearch":
                setInput({ search: "" });
                break;
            case "sendMessage":
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

    const { messages } = selected;

    return (
        <div className={styles.page}>
            <div className={styles.conversationsContainer}>
                <div className={styles.controls}>
                    <SearchBox
                        name="search"
                        value={inputs.search}
                        onInput={onInput}
                        onClick={onClick}
                    />
                </div>
                <div className={styles.conversations}>
                    {conversations.map((conversation, index) => (
                        <Fragment key={conversation}>
                            {(index === 0 ||
                                utils.getTimeStamp(conversation) !==
                                    utils.getTimeStamp(conversations[index - 1])) && (
                                <Divider date={conversation.messages[0].createdAt} />
                            )}
                            <ConversationComponent
                                index={index}
                                selected={conversation === selected}
                                conversation={conversation}
                                onClick={onClick}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>
            <div className={styles.messagesContainer}>
                <div className={styles.header}>
                    {selected.users[0].firstName} {selected.users[0].lastName}
                </div>
                <div className={styles.messages}>
                    {selected.messages
                        .slice()
                        .reverse()
                        .map((message, index) => (
                            <Fragment key={message}>
                                {(index === 0 ||
                                    utils.getTimeStamp(message.createdAt) !==
                                        utils.getTimeStamp(messages[index - 1].createdAt)) && (
                                    <Divider date={message.createdAt} />
                                )}
                                <MessageComponent
                                    users={user.id === message.createdBy ? null : users}
                                    message={message}
                                />
                            </Fragment>
                        ))}
                </div>
                <div className={styles.controls}>
                    <MessageBox
                        name="message"
                        value={inputs.message}
                        onInput={onInput}
                        onClick={onClick}
                    />
                </div>
            </div>
        </div>
    );
}

export default ChatPage;
