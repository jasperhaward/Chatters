import { JSX, Fragment } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";
import { useForm } from "@hooks";
import styles from "./styles.scss";

import * as variables from "./variables";
import * as utils from "./utils";
import { User, Inputs, Conversation, Message } from "./types";

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

    const { 
        selected, 
        setSelectedId, 
        conversations, 
        dispatch 
    } = ConversationHandler(variables.conversations);

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [selected])

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

        dispatch({
            type: "send",
            message: {
                content: inputs.message,
                createdBy: user.id,
            },
        });
        setInput({ message: "" });
    }

    function getConversationHeader(conversation: Conversation) {
        const { users } = conversation;

        if (users.length === 1) {
            const { firstName, lastName } = users[0];
            return firstName + " " + lastName;
        } else {
            return users
                .map((user) => user.firstName)
                .join(", ");
        }
    }

    function getMessageLayout(message: Message, index: number, messages: Message[]) {
        var previousMessage: Message;
        var nextMessage: Message;

        var divider: boolean;
        var margin: boolean;
        var author: User;
        var authorIsCurrentUser = message.createdBy === user.id;

        if (index > 0) {
            previousMessage = messages[index - 1]; 
        }

        if (index < messages.length - 1) {
            nextMessage = messages[index + 1]; 
        }

        if (index === 0 || !isSameDay(message, previousMessage)) {
            divider = true;
        }

        if (!authorIsCurrentUser) {
            if (index === 0 || message.createdBy !== previousMessage.createdBy) {
                author = users.find((user) => {
                    return user.id === message.createdBy
                });
            }
        }

        if (index < messages.length - 1) {
            const messageDate = new Date(message.createdAt);
            const nextMessageDate = new Date(nextMessage.createdAt);
             
            if (!utils.isWithinFiveMins(messageDate, nextMessageDate)) {
                margin = true;
            }
        }

        return (
            <Fragment key={message}>
                {divider && (
                    <Divider date={message.createdAt} />
                )}
                <MessageComponent
                    message={message}
                    author={author}
                    margin={margin}
                    right={authorIsCurrentUser}
                />
            </Fragment>
        )
    }

    function isSameDay(message1: Message, message2: Message) {
        const date1 = new Date(message1.createdAt);
        const date2 = new Date(message2.createdAt);

        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    }

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
                    {conversations.map((conversation) => (
                        <ConversationComponent
                            key={conversation}
                            selected={conversation === selected}
                            header={getConversationHeader(conversation)}
                            conversation={conversation}
                            onClick={onClick}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.messagesContainer}>
                <div className={styles.header}>
                    {getConversationHeader(selected)}
                </div>
                <div className={styles.messages}>
                    {selected.messages
                        .slice()
                        .reverse()
                        .map(getMessageLayout)
                    }
                    <div ref={scrollRef}></div>
                </div>
                <div className={styles.controls}>
                    <MessageBox
                        name="message"
                        value={inputs.message}
                        onInput={onInput}
                        onSubmit={onSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default ChatPage;
