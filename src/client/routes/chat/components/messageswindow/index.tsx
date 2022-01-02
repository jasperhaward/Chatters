import { useEffect, useRef } from "preact/hooks";
import styles from "./styles.scss";

import * as utils from "../../utils";
import { Message, User } from "../../types";
import MessageComponent from "../message";

type MessagesWindowProps = {
    messages: Message[];
    user: User;
    users: User[];
}

function MessagesWindow({ messages, user, users }: MessagesWindowProps) {
    const ref = useRef<HTMLDivElement>();

    useEffect(() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    function getMessageLayout(message: Message, index: number) {
        const prevMessage = index > 0 && messages[index - 1];
        const nextMessage = index < messages.length - 1 && messages[index + 1];

        return {
            timestamp: getTimestamp(message, prevMessage),
            author: getAuthor(message, prevMessage),
            spacer: getSpacer(message, nextMessage),
        };
    }

    function getTimestamp(message: Message, prevMessage: Message) {
        // Displayed when:
        // 1. no {prevMessage}, hence {message} must be the first message 
        // 2. {message} & {prevMessage} were NOT sent on the same day
        if (!prevMessage || !sentSameDay(message, prevMessage)) {
            return (
                <time className={styles.timestamp}>
                    {getTimestampContent(message.createdAt)}
                </time>
            );
        }
    }

    function getTimestampContent(createdAt: string) {
        var date = new Date(createdAt);
        var options: Intl.DateTimeFormatOptions;
        
        if (utils.isToday(date)) {
            return "Today";
        } else if (utils.isYesterday(date)) {
            return "Yesterday";
        } else if (utils.isThisWeek(date)) {
            options = {
                weekday: "long",
            };
        } else if (utils.isThisYear(date)) {
            options = {
                day: "numeric",
                month: "long",
            };
        } else {
            options =  {
                day: "numeric",
                month: "long",
                year: "numeric",
            };
        }

        return date.toLocaleString("en-GB", options);
    }

    function getAuthor(message: Message, prevMessage: Message) {
        // Displayed when {message} was NOT created by the current user and:
        // 1. no {prevMessage}, hence {message} must be the first message 
        // 2. {message} & {prevMessage} were created by different users
        if (message.createdBy !== user.id) {
            if (!prevMessage || message.createdBy !== prevMessage.createdBy) {
                const author = users.find((user) => {
                    return user.id === message.createdBy;
                });
                
                return (
                    <div className={styles.author}>
                        {author.firstName} {author.lastName}
                    </div>
                );
            }
        }
    }

    function getSpacer(message: Message, nextMessage: Message) {
        // Displayed when {nextMessage} is defined, hence {message} is not the last message and:
        // 1. {message} and {nextMessage} were NOT sent within 5 minutes of each other 
        if (nextMessage && !sentWithinFiveMins(message, nextMessage)) {
            return (
                <div className={styles.spacer} />
            );
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
                const { timestamp, author, spacer } = getMessageLayout(message, index);

                return (
                    <>
                        {timestamp}
                        {author}
                        <MessageComponent
                            message={message}
                            icon={author !== undefined}
                            right={message.createdBy === user.id}
                        />
                        {spacer}
                    </>
                );
            })}
            <div ref={ref}></div>
        </div>
    );
}

export default MessagesWindow;