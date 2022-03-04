import { useEffect, useRef } from "preact/hooks";
import styles from "./index.scss";

import { Message, User } from "@types";
import * as utils from "../utils";
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
            pointed: {
                top: hasPointedTop(message, prevMessage),
                bottom: hasPointedBottom(message, nextMessage),
            },
            timestamp: hasTimestamp(message, nextMessage),
        };
    }

    function getDatestamp(message: Message, prevMessage: Message) {
        // Displayed when:
        // 1. no {prevMessage}, hence {message} must be the first message
        // 2. {message} & {prevMessage} were NOT sent on the same day
        if (!prevMessage || !utils.sentSameDay(message, prevMessage)) {
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

    function hasPointedTop(message: Message, prevMessage: Message) {
        const prevMessageTimeStamp = hasTimestamp(prevMessage, message);

        // prettier-ignore
        // Current message has a pointed top border when:
        // 1. {prevMessage} does not have a timestamp,
        //    ie {prevMessage} and {message} were sent within 5 minutes of each other
        // 2. And {prevMessage} and {message} were created by the same user
        if (!prevMessageTimeStamp && message.createdBy === prevMessage.createdBy) {
            return true;
        }
    }

    function hasPointedBottom(message: Message, nextMessage: Message) {
        const messageTimeStamp = hasTimestamp(message, nextMessage);

        // Current message has a pointed bottom border when:
        // 1. {message} does not have a timestamp,
        //    ie {message} and {nextMessage} were sent within 5 minutes of each other
        // 2. And {message} and {nextMessage} were created by the same user
        if (!messageTimeStamp && message.createdBy === nextMessage.createdBy) {
            return true;
        }
    }

    function hasTimestamp(message: Message, nextMessage: Message) {
        // Displayed when:
        // 1. {nextMessage} is not defined, hence {message} is the last message
        // 2. {message} and {nextMessage} were NOT sent within 5 minutes of each other
        if (!nextMessage || !utils.sentWithinFiveMins(message, nextMessage)) {
            return true;
        }
    }

    return (
        <div className={styles.messages}>
            {messages.map((message, index) => {
                // prettier-ignore
                const { 
                    datestamp, 
                    author, 
                    pointed,
                    timestamp, 
                } = getMessageMeta(message, index);

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
                            author={author}
                            timestamp={timestamp}
                            pointed={pointed}
                            right={message.createdBy === user.id}
                        />
                    </>
                );
            })}
            <div ref={ref}></div>
        </div>
    );
}

export default MessagesWindow;
