import styles from "./styles.scss";

import { Message, User } from "../../types";
import Avatar from "../Avatar";

interface MessageProps {
    message: Message;
    author: User;
    right: boolean;
}

function Message({ message, author, right }: MessageProps) {
    return (
        <article className={styles.message}>
            {author && (
                <Avatar
                    sm
                    src={author.avatar}
                    content={author.firstName[0] + " " + author.lastName[0]}
                />
            )}
            <section>
                <div className={right ? styles.right : styles.left}>
                    {message.content}
                </div>
            </section>
            <time>
                {new Date(message.createdAt).toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </time>
        </article>
    );
}

export default Message;
