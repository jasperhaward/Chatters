import { useEffect, useRef } from "preact/hooks";
import styles from "./styles.scss";

import * as utils from "../../utils";
import { Message, User } from "../../types";
import MessageComponent from "../Message";

type MessagesWindowProps = {
    messages: Message[];
    user: User;
    contacts: User[];
};

function MessagesWindow({ messages, user, contacts }: MessagesWindowProps) {
    const ref = useRef<HTMLDivElement>();

    useEffect(() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    function getMessageMeta(message: Message, index: number) {
        const prevMessage = index > 0 && messages[index - 1];
        const nextMessage = index < messages.length - 1 && messages[index + 1];

        return {
            datestamp: getDatestamp(message, prevMessage),
            author: getAuthor(message, prevMessage),
            spacer: hasSpacer(message, nextMessage),
        };
    }

    function getDatestamp(message: Message, prevMessage: Message) {
        // Displayed when:
        // 1. no {prevMessage}, hence {message} must be the first message
        // 2. {message} & {prevMessage} were NOT sent on the same day
        if (!prevMessage || !sentSameDay(message, prevMessage)) {
            const createdAt = new Date(message.createdAt);

            if (utils.isToday(createdAt)) {
                return "Today";
            } else if (utils.isYesterday(createdAt)) {
                return "Yesterday";
            } else if (utils.isThisWeek(createdAt)) {
                return createdAt.toLocaleString("en-GB", {
                    weekday: "long",
                });
            } else if (utils.isThisYear(createdAt)) {
                return createdAt.toLocaleString("en-GB", {
                    day: "numeric",
                    month: "long",
                });
            } else {
                return createdAt.toLocaleString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                });
            }
        }
    }

    function getAuthor(message: Message, prevMessage: Message) {
        // Displayed when {message} was NOT created by the current user and:
        // 1. no {prevMessage}, hence {message} must be the first message
        // 2. {message} & {prevMessage} were created by different users
        if (message.createdBy !== user.id) {
            if (!prevMessage || message.createdBy !== prevMessage.createdBy) {
                return contacts.find(
                    (contact) => contact.id === message.createdBy
                );
            }
        }
    }

    function hasSpacer(message: Message, nextMessage: Message) {
        // Displayed when {nextMessage} is defined, hence {message} is not the last message and:
        // 1. {message} and {nextMessage} were NOT sent within 5 minutes of each other
        if (nextMessage && !sentWithinFiveMins(message, nextMessage)) {
            return true;
        }
    }

    function sentWithinFiveMins(message1: Message, message2: Message) {
        const FIVE_MINS = 5 * 60 * 1000;

        const date1 = new Date(message1.createdAt);
        const date2 = new Date(message2.createdAt);

        return (
            date1.getTime() <= date2.getTime() + FIVE_MINS &&
            date1.getTime() >= date2.getTime() - FIVE_MINS
        );
    }

    function sentSameDay(message1: Message, message2: Message) {
        const date1 = new Date(message1.createdAt);
        const date2 = new Date(message2.createdAt);

        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    }

    return (
        <div className={styles.messages}>
            {messages.map((message, index) => {
                const { datestamp, author, spacer } = getMessageMeta(
                    message,
                    index
                );

                return (
                    <>
                        {datestamp && (
                            <time className={styles.datestamp}>
                                {datestamp}
                            </time>
                        )}
                        {author && (
                            <div className={styles.author}>
                                {author.firstName} {author.lastName}
                            </div>
                        )}
                        <MessageComponent
                            message={message}
                            right={message.createdBy === user.id}
                            author={author}
                        />
                        {spacer && <div className={styles.spacer} />}
                    </>
                );
            })}
            <div ref={ref}></div>
        </div>
    );
}

export default MessagesWindow;
