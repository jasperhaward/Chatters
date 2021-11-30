import type { VNode } from "preact";
import styles from "./styles.scss";

export interface FooterbarProps {
    children: VNode | VNode[];
}

export function Footerbar({ children }: FooterbarProps) {
    return <footer className={styles.footerbar}>{children}</footer>;
}

export interface FooterbarContentProps {
    position: "left" | "middle" | "right";
    children: VNode | VNode[];
}

export function FooterbarContent({ position, children }: FooterbarContentProps) {
    return <div className={styles[position]}>{children}</div>;
}
