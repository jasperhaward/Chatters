import type { JSX } from "preact";
import { Icon } from "@components";
import styles from "./styles.scss";

import * as utils from "../../utils";
import { Conversation, Message } from "../../types";

interface ConversationPreviewProps {
    selected: boolean;
    header: string;
    conversation: Conversation;
    onClick: (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => void;
}

function ConversationPreview({ selected, header, conversation, onClick }: ConversationPreviewProps) {
    const { id, messages, users } = conversation;
    const [message] = messages;

    function getTimeStamp(message: Message) {
        var date = new Date(message.createdAt);
        var options: Intl.DateTimeFormatOptions;

        if (utils.isToday(date)) {
            options = {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            };
        } else if (utils.isThisWeek(date)) {
            options = {
                weekday: "short",
            };
        } else {
            options ={
                day: "numeric",
                month: "short",
            };
        } 

        return date.toLocaleString("en-GB", options);
    }

    return (
        <button
            className={selected 
                ? styles.conversation + " " + styles.selected 
                : styles.conversation
            }
            id={id}
            name="selectConversation"
            onClick={onClick}
        >
            <Icon icon={["fas", users.length > 1 ? "users" : "user"]} />
            <div className={styles.details}>
                <header>{header}</header>
                <span>{message.content}</span>
            </div>
            <time>{getTimeStamp(message)}</time>
        </button>
    );
}

export default ConversationPreview;