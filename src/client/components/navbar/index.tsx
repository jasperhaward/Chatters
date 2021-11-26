import type { VNode } from "preact";
import { Link, LinkProps } from "@components";
import styles from "./styles.module.scss";

export interface NavbarProps {
    children: VNode | VNode[];
}

export function Navbar({ children }: NavbarProps) {
    return <div class={styles.navbar}>{children}</div>;
}

export function Navlink(props: LinkProps) {
    return <Link activeClass={styles.active} {...props}></Link>;
}
