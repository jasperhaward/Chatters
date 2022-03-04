import styles from "./index.scss";

import { Message, User } from "@types";
import Avatar from "../Avatar";

interface MessageComponentProps {
    message: Message;
    author: User;
    timestamp: boolean;
    pointed: {
        top: boolean;
        bottom: boolean;
    };
    right: boolean;
}

function MessageComponent({
    message,
    author,
    timestamp,
    pointed,
    right,
}: MessageComponentProps) {
    const { content, createdAt } = message;

    var className: string;

    if (right) className = styles.right;
    else className = styles.left;

    if (pointed.top) className += " " + styles.pointedTop;
    if (pointed.bottom) className += " " + styles.pointedBottom;

    return (
        <article className={styles.message}>
            {author && <Avatar sm src={author.avatar} />}
            <section className={className}>
                <div>{content}</div>
                {timestamp && (
                    <time>
                        {new Date(createdAt).toLocaleTimeString("en-GB", {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </time>
                )}
            </section>
        </article>
    );
}

export default MessageComponent;
