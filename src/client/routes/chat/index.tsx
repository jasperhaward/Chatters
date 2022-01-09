import { JSX } from "preact";
import { useState } from "preact/hooks";
import styles from "./styles.scss";

import { useForm } from "@hooks";
import { Button, IconButton } from "@components";

import * as variables from "./variables";
import { User, Inputs, Conversation } from "./types";

import ConversationHandler from "./handler";
import Contact from "./components/Contact";
import Divider from "./components/Divider";
import ConversationComponent from "./components/Conversation";
import SearchBox from "./components/SearchBox";
import MessageBox from "./components/MessageBox";
import MessagesWindow from "./components/MessagesWindow";

function ChatPage() {
    const [user, setUser] = useState<User>(variables.user);
    const [contacts, setContacts] = useState<User[]>(variables.contacts);
    const [inputs, onInput, setInput] = useForm<Inputs>({
        search: "",
        message: "",
    });
    const [view, setView] = useState<"conversations" | "contacts">(
        "conversations"
    );

    const { selected, setSelectedId, conversations, dispatch } =
        ConversationHandler(variables.conversations);

    function onConversationClick(id: string) {
        setInput({ message: "" });
        setSelectedId(id);
    }

    function onCreateConversation() {}

    function onContactClick(user: User) {
        // Find {conversation} where the ONLY recipient is {user}
        const conversation = conversations.find(({ recipients }) => {
            return recipients.length === 1 && recipients[0] == user;
        });

        if (conversation) {
            setSelectedId(conversation.id);
            onToggleView();
        } else {
            onCreateConversation();
        }
    }

    function onCreateContact() {}

    function onToggleView() {
        if (inputs.search !== "") {
            setInput({ search: "" });
        }

        setView(view === "contacts" ? "conversations" : "contacts");
    }

    function onClearSearch() {
        setInput({ search: "" });
    }

    function onSubmitSearch() {
        console.log("Submit search");
    }

    function onSubmitMessage() {
        dispatch({
            type: "send",
            message: {
                content: inputs.message,
                createdBy: user.id,
            },
        });
        setInput({ message: "" });
    }

    function getConversationHeader(conversation: Conversation) {
        const { recipients } = conversation;

        if (recipients.length === 1) {
            const { firstName, lastName } = recipients[0];
            return firstName + " " + lastName;
        } else {
            return recipients
                .map((recipient) => recipient.firstName)
                .join(", ");
        }
    }

    function showContactsDivider(index: number, contacts: User[]) {
        const currContact = contacts[index];
        const prevContact = index > 0 && contacts[index - 1];

        // Show divider when:
        // -The current contact is the first contact
        // -The first letter of the current and previous contacts names differ
        return (
            !prevContact ||
            prevContact.firstName[0] !== currContact.firstName[0]
        );
    }

    return (
        <div className={styles.page}>
            <section id="navigation">
                <header>Recents</header>
                <div className={styles.controls}>
                    <SearchBox
                        name="search"
                        value={inputs.search}
                        onInput={onInput}
                        onClear={onClearSearch}
                        onSubmit={onSubmitSearch}
                    />
                    <IconButton
                        icon={[
                            "fas",
                            view === "conversations"
                                ? "user-friends"
                                : "list-ul",
                        ]}
                        onClick={onToggleView}
                    />
                </div>
                <div className={styles.container}>
                    {view === "conversations"
                        ? conversations.map((conversation) => (
                              <ConversationComponent
                                  selected={conversation === selected}
                                  header={getConversationHeader(conversation)}
                                  conversation={conversation}
                                  onClick={onConversationClick}
                              />
                          ))
                        : contacts.map((contact, index, contacts) => (
                              <>
                                  {showContactsDivider(index, contacts) && (
                                      <Divider letter={contact.firstName[0]} />
                                  )}
                                  <Contact
                                      key={user}
                                      contact={contact}
                                      onClick={onContactClick}
                                  />
                              </>
                          ))}
                </div>
                {view === "conversations" ? (
                    <Button primary onClick={onCreateConversation}>
                        Create conversation
                    </Button>
                ) : (
                    <Button primary onClick={onCreateContact}>
                        Create contact
                    </Button>
                )}
            </section>
            <section id="messages">
                <header>{getConversationHeader(selected)}</header>
                <MessagesWindow
                    messages={selected.messages.slice().reverse()}
                    user={user}
                    contacts={contacts}
                />
                <div className={styles.controls}>
                    <MessageBox
                        name="message"
                        value={inputs.message}
                        onInput={onInput}
                        onSubmit={onSubmitMessage}
                    />
                </div>
            </section>
        </div>
    );
}

export default ChatPage;
