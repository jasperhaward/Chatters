import type { JSX } from "preact";
import { Icon } from "@components";
import styles from "./styles.scss";

import * as utils from "../../utils";
import { Conversation, Message } from "../../types";

export interface ConversationPreviewProps {
    index: number;
    selected: boolean;
    conversation: Conversation;
    onClick: (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => void;
}

export default function ConversationPreview({
    index,
    selected,
    conversation,
    onClick,
}: ConversationPreviewProps) {
    const { users, messages } = conversation;
    const message = messages[0];

    const header =
        users.length === 1
            ? users[0].firstName + " " + users[0].lastName
            : users.map((user) => user.firstName).join(", ");

    return (
        <button
            className={
                selected ? styles.conversation + " " + styles.selected : styles.conversation
            }
            id={index.toString()}
            name="selectConversation"
            onClick={onClick}
        >
            <Icon icon={["fas", users.length > 1 ? "users" : "user"]} />
            <div className={styles.details}>
                <span>{header}</span>
                <div>{message.content}</div>
            </div>
            <div className={styles.stamp}>{utils.getTimeStamp(message.createdAt, true)}</div>
        </button>
    );
}
