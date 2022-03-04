import styles from "./index.scss";

import * as utils from "../utils";
import { Conversation, User } from "@types";
import Avatar from "../Avatar";

type ConversationComponentProps = {
    selected: boolean;
    user: User;
    contacts: User[];
    conversation: Conversation;
    onClick: (id: string) => void;
};

function ConversationComponent({
    selected,
    user,
    contacts,
    conversation,
    onClick,
}: ConversationComponentProps) {
    const { id, messages, recipients } = conversation;
    const [message] = messages;

    function onClickWrapper() {
        onClick(id);
    }

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

    function getMessageAuthor() {
        if (message.createdBy === user.id) {
            return <span>You: </span>;
        } else if (recipients.length > 1) {
            const author = contacts.find(
                (contact) => message.createdBy === contact.id
            );

            return <span>{author.firstName}: </span>;
        }
    }

    return (
        <article
            className={
                selected
                    ? styles.conversation + " " + styles.selected
                    : styles.conversation
            }
            onClick={onClickWrapper}
        >
            <Avatar md src={utils.getConversationAvatar(conversation)} />
            <section>
                <header>{utils.getConversationHeader(conversation)}</header>
                <div>
                    {message ? (
                        <>
                            {getMessageAuthor()}
                            {message.content}
                        </>
                    ) : (
                        <i>Draft</i>
                    )}
                </div>
            </section>
            {message && <time>{getTimeStamp()}</time>}
        </article>
    );
}

export default ConversationComponent;
