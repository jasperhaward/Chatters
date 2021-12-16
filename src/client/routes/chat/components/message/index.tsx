import { Icon } from "@components";
import styles from "./styles.scss";

import { User, Message } from "../../types";

export interface MessageProps {
    users: User[];
    message: Message;
}

export default function Message({ users, message }: MessageProps) {
    const user = users?.find((user) => {
        return user.id === message.createdBy;
    });

    return (
        <>
            {user && (
                <span className={styles.header}>
                    {user.firstName} {user.lastName}
                </span>
            )}
            <div className={!user ? `${styles.message} ${styles.right}` : styles.message}>
                {user && <Icon icon={["fas", "user-circle"]} />}
                <div className={styles.content}>
                    <div>{message.content}</div>
                </div>
                <div className={styles.stamp}>
                    {new Date(message.createdAt).toLocaleTimeString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </div>
            </div>
        </>
    );
}
