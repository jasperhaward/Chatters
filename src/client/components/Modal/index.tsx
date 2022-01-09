import type { VNode } from "preact";
import { IconButton } from "@components";
import styles from "./styles.scss";

export type ModalProps = {
    show: boolean;
    toggle: () => void;
    children: VNode | VNode[];
};

export function Modal({ show, toggle, children }: ModalProps) {
    return (
        <div 
            className={show 
                ? styles.modal + " " + styles.show
                : styles.modal
            } 
            onClick={toggle}
        >
            <section>{children}</section>
        </div>
    );
}

export type ModalHeaderProps = {
    toggle: () => void;
    children: string | VNode | VNode[];
};

export function ModalHeader({ toggle, children }: ModalHeaderProps) {
    return (
        <header>
            {children}
            <IconButton icon={["fas", "times"]} onClick={toggle} />
        </header>
    );
}

export type ModalBodyProps = {
    children: VNode | VNode[];
};

export function ModalBody({ children }: ModalBodyProps) {
    return (
        <div>{children}</div>
    );
}
