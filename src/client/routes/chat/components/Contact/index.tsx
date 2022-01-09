import styles from "./styles.scss";

import { User } from "../../types";
import Avatar from "../Avatar";

interface ContactProps {
    contact: User;
    onClick: (user: User) => void;
}

function Contact({ contact, onClick }: ContactProps) {
    const { avatar, firstName, lastName } = contact;

    const _onClick = () => onClick(contact);

    return (
        <button className={styles.contact} onClick={_onClick}>
            <Avatar
                sm
                src={avatar}
                content={firstName[0] + " " + lastName[0]}
            />
            <span>
                {contact.firstName} {contact.lastName}
            </span>
        </button>
    );
}

export default Contact;
