import { Icon } from "@components";
import styles from "./styles.scss";

import { User, Message } from "../../types";

interface MessageProps {
    message: Message;
    author: User;
    margin: boolean;
    right: boolean;
}

function Message({ message, author, margin, right }: MessageProps) {
    var className = styles.message;
    
    if (right) className += " " + styles.right; 
    if (margin) className += " " + styles.margin; 

    return (
        <>
            {author && (
                <span className={styles.header}>
                    {author.firstName} {author.lastName}
                </span>
            )}
            <div className={className}>
                <div className={styles.icon}>
                    {author && (
                        <Icon icon={["fas", "user-circle"]} />
                    )}
                </div>
                <div className={styles.content}>
                    <div>{message.content}</div>
                </div>
                <time>
                    {new Date(message.createdAt).toLocaleTimeString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </time>
            </div>
        </>
    );
}

export default Message;