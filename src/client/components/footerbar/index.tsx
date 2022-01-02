import type { VNode } from "preact";
import styles from "./styles.scss";

export type FooterbarProps = {
    children: VNode | VNode[];
}

export function Footerbar({ children }: FooterbarProps) {
    return <footer className={styles.footerbar}>{children}</footer>;
}

export type FooterbarContentProps = {
    left?: boolean;
    middle?: boolean;
    right?: boolean;
    children: VNode | VNode[];
}

export function FooterbarContent({ left, middle, right, children }: FooterbarContentProps) {
    var className;

    if (left) className = styles.left;
    else if (middle) className = styles.middle;
    else if (right) className = styles.right;

    return <div className={className}>{children}</div>;
}

export type FooterbarTextProps = {
    children: string;
}

export function FooterbarText({ children }: FooterbarTextProps) {
    return <div className={styles.text}>{children}</div>;
}
