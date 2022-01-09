import styles from "./styles.scss";

import * as utils from "../../utils";
import { Conversation, User } from "../../types";
import Avatar from "../Avatar";

type ConversationPreviewProps = {
    header: string;
    selected: boolean;
    conversation: Conversation;
    onClick: (id: string) => void;
};

function ConversationPreview({
    header,
    selected,
    conversation,
    onClick,
}: ConversationPreviewProps) {
    const { id, messages, recipients, avatar } = conversation;
    const [message] = messages;

    const _onClick = () => onClick(id);

    function getTimeStamp() {
        const date = new Date(message.createdAt);
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
            options = {
                day: "numeric",
                month: "short",
            };
        }

        return date.toLocaleString("en-GB", options);
    }

    function initials(recipient: User) {
        const { firstName, lastName } = recipient;
        return firstName[0] + " " + lastName[0];
    }

    return (
        <button
            className={
                selected
                    ? styles.conversation + " " + styles.selected
                    : styles.conversation
            }
            onClick={_onClick}
        >
            {recipients.length === 1 ? (
                <Avatar
                    md
                    src={recipients[0].avatar}
                    content={initials(recipients[0])}
                />
            ) : (
                <Avatar md src={avatar} content={recipients.length} />
            )}
            <section>
                <header>{header}</header>
                <div>{message.content}</div>
            </section>
            <time>{getTimeStamp()}</time>
        </button>
    );
}

export default ConversationPreview;
