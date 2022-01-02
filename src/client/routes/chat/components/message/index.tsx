import { Icon } from "@components";
import styles from "./styles.scss";

import { Message } from "../../types";

interface MessageProps {
    message: Message;
    icon: boolean;
    right: boolean;
}

function Message({ message, icon, right }: MessageProps) {
    return (
        <div className={styles.message}>
            {icon && (
                <Icon icon={["fas", "user-circle"]} />
            )}
            <div className={styles.content}>
                <span className={right 
                    ? styles.right 
                    : styles.left}
                >
                    {message.content}
                </span>
            </div>
            <time>
                {new Date(message.createdAt).toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </time>
        </div>
    );
}

export default Message;