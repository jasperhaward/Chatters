import styles from "./index.scss";

import { User } from "@types";
import Avatar from "../Avatar";

interface ContactProps {
    contact: User;
    onClick: (user: User) => void;
}

function Contact({ contact, onClick }: ContactProps) {
    function onClickWrapper() {
        onClick(contact);
    }

    return (
        <button className={styles.contact} onClick={onClickWrapper}>
            <Avatar sm src={contact.avatar} />
            <span>
                {contact.firstName} {contact.lastName}
            </span>
        </button>
    );
}

export default Contact;
