import type { VNode } from "preact";
import styles from "./styles.module.scss";

export interface FooterbarProps {
    children: VNode | VNode[];
}

export function Footerbar({ children }: FooterbarProps) {
    return <div className={styles.footerbar}>{children}</div>;
}

export interface FooterbarContentProps {
    position: "left" | "middle" | "right";
    children: VNode | VNode[];
}

export function FooterbarContent({ position, children }: FooterbarContentProps) {
    return <div className={styles[position]}>{children}</div>;
}
